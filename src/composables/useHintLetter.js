import { computed, onUnmounted, ref } from 'vue'

// Czasy trwania efektów (ms)
const FLASH_MS = 1200 // dwa mignięcia (2 x 600 ms)
const REMOVE_MS = 300 // pauza po zniknięciu błędnych liter
const FADE_MS = 700 // pojawianie się podpowiedzianej litery

// Długość wspólnego początku wpisanego tekstu i poprawnej odpowiedzi
// (bez rozróżniania wielkości liter, ale z rozróżnianiem znaków
// diakrytycznych, bo č i c to różne litery)
function commonPrefixLength(typed, target) {
  const max = Math.min(typed.length, target.length)
  let i = 0

  while (i < max && typed[i].toLowerCase() === target[i].toLowerCase()) {
    i++
  }

  return i
}

// Następny fragment do ujawnienia. Jeśli kolejny znak to spacja,
// ujawniamy ją razem z następną literą, żeby podpowiedź było widać.
function nextChars(target, from) {
  let end = from

  while (end < target.length && /\s/.test(target[end])) end++
  if (end < target.length) end++

  return target.slice(from, end)
}

/**
 * Podpowiedź litery.
 *
 * Działanie po kliknięciu:
 * - wpisany tekst jest poprawnym początkiem odpowiedzi: mignie dwa razy
 *   na zielono, po czym doda się kolejna litera (fade-in),
 * - wpisany tekst zawiera błąd: poprawny początek zostaje nietknięty,
 *   błędne litery mrugają dwa razy na czerwono, znikają, a na końcu
 *   pojawia się poprawna litera (fade-in).
 *
 * @param {Ref<string>} userAnswer    wpisany tekst (v-model pola)
 * @param {Ref<string>} correctAnswer poprawna odpowiedź
 * @param {Ref<boolean>} locked       odpowiedź już sprawdzona
 * @param {Function} onComplete       podpowiedź dokończyła całą odpowiedź
 * @param {Function} onSettled        efekt się zakończył
 */
export function useHintLetter({
  userAnswer,
  correctAnswer,
  locked,
  onComplete,
  onSettled
}) {
  // Stan nakładki: { phase, ok, bad, added, flashMs, fadeMs } albo null
  const hint = ref(null)
  const busy = ref(false)

  let timers = []
  let pending = null

  const isComplete = computed(() => {
    const typed = userAnswer.value
    const target = correctAnswer.value

    return (
      typed.length === target.length &&
      typed.toLowerCase() === target.toLowerCase()
    )
  })

  const canHint = computed(() => !locked.value && !busy.value)

  function later(fn, ms) {
    timers.push(setTimeout(fn, ms))
  }

  function clearTimers() {
    timers.forEach(clearTimeout)
    timers = []
  }

  function frame(phase, ok, bad, added) {
    return {
      phase,
      ok,
      bad,
      added,
      flashMs: FLASH_MS,
      fadeMs: FADE_MS
    }
  }

  // Kończy efekt. allowComplete: czy dokończenie odpowiedzi ma
  // wywołać onComplete (nie, gdy tylko usunięto nadmiarowe litery).
  function settle(allowComplete = true) {
    clearTimers()

    hint.value = null
    busy.value = false
    pending = null

    if (allowComplete && isComplete.value) {
      onComplete?.()
    }

    onSettled?.()
  }

  function addLetters(ok, added) {
    if (!added) {
      settle(false)
      return
    }

    userAnswer.value = ok + added
    hint.value = frame('fade-new', ok, '', added)

    later(settle, FADE_MS)
  }

  function revealHint() {
    if (!canHint.value) return

    // Całe słowo wpisane poprawnie: podpowiedź nic nie robi i niczego nie
    // zdradza (przycisk wygląda tak samo jak zawsze, nie ma żadnego efektu)
    if (isComplete.value) return

    const target = correctAnswer.value
    const typed = userAnswer.value

    const okLength = commonPrefixLength(typed, target)
    const ok = typed.slice(0, okLength)
    const bad = typed.slice(okLength)
    const added = nextChars(target, okLength)

    busy.value = true
    pending = { value: ok + added, reveals: added !== '' }

    // Błędne litery: czerwone mignięcia, zniknięcie, potem nowa litera
    if (bad) {
      hint.value = frame('flash-bad', ok, bad, '')

      later(() => {
        userAnswer.value = ok
        hint.value = frame('removed', ok, '', '')

        later(() => addLetters(ok, added), REMOVE_MS)
      }, FLASH_MS)

      return
    }

    // Poprawny początek: zielone mignięcia, potem nowa litera
    if (ok) {
      hint.value = frame('flash-ok', ok, '', '')

      later(() => addLetters(ok, added), FLASH_MS)

      return
    }

    // Pole puste: od razu pojawia się pierwsza litera
    addLetters(ok, added)
  }

  // Natychmiast kończy trwający efekt i ustawia wynik końcowy
  // (używane przy sprawdzaniu, pomijaniu i przechodzeniu dalej)
  function finishHint() {
    if (!busy.value || !pending) return

    const { value, reveals } = pending

    clearTimers()
    userAnswer.value = value

    settle(reveals)
  }

  onUnmounted(clearTimers)

  return {
    hint,
    busy,
    canHint,
    revealHint,
    finishHint
  }
}