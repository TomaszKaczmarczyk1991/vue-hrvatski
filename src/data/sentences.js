// UWAGA: treść chorwacka wymaga weryfikacji przez native speakera
// przed użyciem produkcyjnym — zobacz komentarz w rozmowie z Claude.

export const sentences = [
  // --- Powitania ---
  {
    id: 1,
    category: 'powitania',
    tokens: [
      { hr: 'Bok', pl: 'Cześć' },
      { hr: ',', pl: ',', punct: true },
      { hr: 'kako', pl: 'jak', blank: true },
      { hr: 'si?', pl: 'się masz?' }
    ]
  },
  {
    id: 2,
    category: 'powitania',
    tokens: [
      { hr: 'Dobar dan', pl: 'Dzień dobry' },
      { hr: ',', pl: ',', punct: true },
      { hr: 'drago mi je', pl: 'miło' },
      { hr: 'upoznati', pl: 'poznać', blank: true },
      { hr: 'te.', pl: 'cię.' }
    ]
  },
  {
    id: 3,
    category: 'powitania',
    tokens: [
      { hr: 'Dobra večer', pl: 'Dobry wieczór' },
      { hr: ',', pl: ',', punct: true },
      { hr: 'kako je prošao', pl: 'jak minął', blank: true },
      { hr: 'dan?', pl: 'dzień?' }
    ]
  },
  {
    id: 4,
    category: 'powitania',
    tokens: [
      { hr: 'Doviđenja', pl: 'Do widzenia' },
      { hr: ',', pl: ',', punct: true },
      { hr: 'vidimo se', pl: 'do zobaczenia' },
      { hr: 'sutra!', pl: 'jutro!', blank: true }
    ]
  },
  {
    id: 5,
    category: 'powitania',
    tokens: [
      { hr: 'Laku noć', pl: 'Dobranoc' },
      { hr: ',', pl: ',', punct: true },
      { hr: 'spavaj', pl: 'śpij', blank: true },
      { hr: 'dobro.', pl: 'dobrze.' }
    ]
  },

  // --- Podstawy ---
  {
    id: 6,
    category: 'podstawy',
    tokens: [
      { hr: 'Zovem se', pl: 'Mam na imię', blank: true },
      { hr: 'Ana', pl: 'Ana' },
      { hr: ',', pl: ',', punct: true },
      { hr: 'a ti?', pl: 'a ty?' }
    ]
  },
  {
    id: 7,
    category: 'podstawy',
    tokens: [
      { hr: 'Ne razumijem', pl: 'Nie rozumiem', blank: true },
      { hr: ',', pl: ',', punct: true },
      { hr: 'možeš li', pl: 'możesz' },
      { hr: 'ponoviti?', pl: 'powtórzyć?' }
    ]
  },
  {
    id: 8,
    category: 'podstawy',
    tokens: [
      { hr: 'Hvala ti puno', pl: 'Bardzo dziękuję', blank: true },
      { hr: 'na pomoći.', pl: 'za pomoc.' }
    ]
  },
  {
    id: 9,
    category: 'podstawy',
    tokens: [
      { hr: 'Oprosti', pl: 'Przepraszam' },
      { hr: ',', pl: ',', punct: true },
      { hr: 'gdje je', pl: 'gdzie jest' },
      { hr: 'kolodvor?', pl: 'dworzec?', blank: true }
    ]
  },
  {
    id: 10,
    category: 'podstawy',
    tokens: [
      { hr: 'Molim te', pl: 'Proszę' },
      { hr: ',', pl: ',', punct: true },
      { hr: 'sjedni', pl: 'usiądź', blank: true },
      { hr: 'ovdje.', pl: 'tutaj.' }
    ]
  },

  // --- Restauracja ---
  {
    id: 11,
    category: 'restauracja',
    tokens: [
      { hr: 'Molim vas', pl: 'Poproszę o' },
      { hr: 'račun.', pl: 'rachunek.', blank: true }
    ]
  },
  {
    id: 12,
    category: 'restauracja',
    tokens: [
      { hr: 'Ova juha', pl: 'Ta zupa' },
      { hr: 'je stvarno', pl: 'jest naprawdę' },
      { hr: 'ukusna.', pl: 'pyszna.', blank: true }
    ]
  },
  {
    id: 13,
    category: 'restauracja',
    tokens: [
      { hr: 'Mogu li', pl: 'Czy mogę' },
      { hr: 'vidjeti', pl: 'zobaczyć', blank: true },
      { hr: 'jelovnik?', pl: 'menu?' }
    ]
  },
  {
    id: 14,
    category: 'restauracja',
    tokens: [
      { hr: 'Htio bih', pl: 'Chciałbym' },
      { hr: 'naručiti', pl: 'zamówić', blank: true },
      { hr: 'kavu', pl: 'kawę' },
      { hr: 'i', pl: 'i' },
      { hr: 'kolač.', pl: 'ciastko.' }
    ]
  },
  {
    id: 15,
    category: 'restauracja',
    tokens: [
      { hr: 'Stol', pl: 'Stolik' },
      { hr: 'za dvije osobe', pl: 'dla dwóch osób', blank: true },
      { hr: ',', pl: ',', punct: true },
      { hr: 'molim.', pl: 'proszę.' }
    ]
  },

  // --- Zakupy ---
  {
    id: 16,
    category: 'zakupy',
    tokens: [
      { hr: 'Koliko košta', pl: 'Ile kosztuje', blank: true },
      { hr: 'ova košulja?', pl: 'ta koszula?' }
    ]
  },
  {
    id: 17,
    category: 'zakupy',
    tokens: [
      { hr: 'Imate li', pl: 'Czy macie' },
      { hr: 'ovaj džemper', pl: 'ten sweter' },
      { hr: 'u drugoj', pl: 'w innym' },
      { hr: 'boji?', pl: 'kolorze?', blank: true }
    ]
  },
  {
    id: 18,
    category: 'zakupy',
    tokens: [
      { hr: 'Tražim', pl: 'Szukam', blank: true },
      { hr: 'poklon', pl: 'prezentu' },
      { hr: 'za svoju mamu.', pl: 'dla mojej mamy.' }
    ]
  },
  {
    id: 19,
    category: 'zakupy',
    tokens: [
      { hr: 'Mogu li', pl: 'Czy mogę' },
      { hr: 'platiti', pl: 'zapłacić', blank: true },
      { hr: 'karticom?', pl: 'kartą?' }
    ]
  },
  {
    id: 20,
    category: 'zakupy',
    tokens: [
      { hr: 'Ove cipele', pl: 'Te buty' },
      { hr: 'su', pl: 'są' },
      { hr: 'premale.', pl: 'za małe.', blank: true }
    ]
  },

  // --- Czas ---
  {
    id: 21,
    category: 'czas',
    tokens: [
      { hr: 'Koliko je sad', pl: 'Która jest teraz', blank: true },
      { hr: 'sati?', pl: 'godzina?' }
    ]
  },
  {
    id: 22,
    category: 'czas',
    tokens: [
      { hr: 'Vlak', pl: 'Pociąg' },
      { hr: 'polazi', pl: 'odjeżdża', blank: true },
      { hr: 'u osam ujutro.', pl: 'o ósmej rano.' }
    ]
  },
  {
    id: 23,
    category: 'czas',
    tokens: [
      { hr: 'Nađimo se', pl: 'Spotkajmy się', blank: true },
      { hr: 'sutra poslijepodne.', pl: 'jutro po południu.' }
    ]
  },
  {
    id: 24,
    category: 'czas',
    tokens: [
      { hr: 'Imam', pl: 'Mam' },
      { hr: 'puno posla', pl: 'dużo pracy', blank: true },
      { hr: 'ovaj tjedan.', pl: 'w tym tygodniu.' }
    ]
  },
  {
    id: 25,
    category: 'czas',
    tokens: [
      { hr: 'Jučer', pl: 'Wczoraj' },
      { hr: 'je padala kiša', pl: 'padał deszcz', blank: true },
      { hr: 'cijeli dan.', pl: 'cały dzień.' }
    ]
  },

  // --- Rodzina ---
  {
    id: 26,
    category: 'rodzina',
    tokens: [
      { hr: 'Imam', pl: 'Mam' },
      { hr: 'dvije sestre', pl: 'dwie siostry', blank: true },
      { hr: 'i', pl: 'i' },
      { hr: 'jednog brata.', pl: 'jednego brata.' }
    ]
  },
  {
    id: 27,
    category: 'rodzina',
    tokens: [
      { hr: 'Moji roditelji', pl: 'Moi rodzice' },
      { hr: 'žive', pl: 'mieszkają', blank: true },
      { hr: 'u malom gradu.', pl: 'w małym mieście.' }
    ]
  },
  {
    id: 28,
    category: 'rodzina',
    tokens: [
      { hr: 'Moj djed', pl: 'Mój dziadek' },
      { hr: 'priča', pl: 'opowiada', blank: true },
      { hr: 'divne priče.', pl: 'wspaniałe historie.' }
    ]
  },
  {
    id: 29,
    category: 'rodzina',
    tokens: [
      { hr: 'Ona je', pl: 'Ona jest' },
      { hr: 'moja najbolja', pl: 'moją najlepszą' },
      { hr: 'prijateljica.', pl: 'przyjaciółką.', blank: true }
    ]
  },
  {
    id: 30,
    category: 'rodzina',
    tokens: [
      { hr: 'Naša obitelj', pl: 'Nasza rodzina', blank: true },
      { hr: 'se sastaje', pl: 'spotyka się' },
      { hr: 'svake nedjelje.', pl: 'w każdą niedzielę.' }
    ]
  },

  // --- Uczucia ---
  {
    id: 31,
    category: 'uczucia',
    tokens: [
      { hr: 'Ja sam', pl: 'Jestem' },
      { hr: 'danas', pl: 'dzisiaj' },
      { hr: 'jako sretan.', pl: 'bardzo szczęśliwy.', blank: true }
    ]
  },
  {
    id: 32,
    category: 'uczucia',
    tokens: [
      { hr: 'Malo se', pl: 'Trochę się' },
      { hr: 'bojim', pl: 'boję', blank: true },
      { hr: 'mraka.', pl: 'ciemności.' }
    ]
  },
  {
    id: 33,
    category: 'uczucia',
    tokens: [
      { hr: 'To je bio', pl: 'To było' },
      { hr: 'stvarno tužan', pl: 'naprawdę smutne', blank: true },
      { hr: 'događaj.', pl: 'wydarzenie.' }
    ]
  },
  {
    id: 34,
    category: 'uczucia',
    tokens: [
      { hr: 'Jako se', pl: 'Bardzo się' },
      { hr: 'veselim', pl: 'cieszę', blank: true },
      { hr: 'odmoru.', pl: 'na wakacje.' }
    ]
  },
  {
    id: 35,
    category: 'uczucia',
    tokens: [
      { hr: 'Osjećam se', pl: 'Czuję się', blank: true },
      { hr: 'danas', pl: 'dzisiaj' },
      { hr: 'jako umorno.', pl: 'bardzo zmęczony.' }
    ]
  },

  // --- Pogoda ---
  {
    id: 36,
    category: 'pogoda',
    tokens: [
      { hr: 'Danas', pl: 'Dzisiaj' },
      { hr: 'je vani', pl: 'jest na dworze' },
      { hr: 'jako sunčano.', pl: 'bardzo słonecznie.', blank: true }
    ]
  },
  {
    id: 37,
    category: 'pogoda',
    tokens: [
      { hr: 'Zimi ovdje', pl: 'Zimą tutaj' },
      { hr: 'često pada', pl: 'często pada' },
      { hr: 'snijeg.', pl: 'śnieg.', blank: true }
    ]
  },
  {
    id: 38,
    category: 'pogoda',
    tokens: [
      { hr: 'Sutra bi trebao biti', pl: 'Jutro ma być' },
      { hr: 'jak', pl: 'silny' },
      { hr: 'vjetar.', pl: 'wiatr.', blank: true }
    ]
  },
  {
    id: 39,
    category: 'pogoda',
    tokens: [
      { hr: 'Ljeti', pl: 'Latem', blank: true },
      { hr: 'je ovdje', pl: 'jest tu' },
      { hr: 'jako vruće.', pl: 'bardzo gorąco.' }
    ]
  },
  {
    id: 40,
    category: 'pogoda',
    tokens: [
      { hr: 'Nebo', pl: 'Niebo' },
      { hr: 'je danas', pl: 'jest dzisiaj' },
      { hr: 'potpuno oblačno.', pl: 'całkiem zachmurzone.', blank: true }
    ]
  },

  // --- Podróże ---
  {
    id: 41,
    category: 'podroze',
    tokens: [
      { hr: 'Sutra', pl: 'Jutro' },
      { hr: 'letimo avionom', pl: 'lecimy samolotem', blank: true },
      { hr: 'u Zagreb.', pl: 'do Zagrzebia.' }
    ]
  },
  {
    id: 42,
    category: 'podroze',
    tokens: [
      { hr: 'Ovaj grad', pl: 'To miasto' },
      { hr: 'ima', pl: 'ma' },
      { hr: 'prekrasnu staru gradsku jezgru.', pl: 'piękną starówkę.', blank: true }
    ]
  },
  {
    id: 43,
    category: 'podroze',
    tokens: [
      { hr: 'Izgubili smo se', pl: 'Zgubiliśmy się', blank: true },
      { hr: 'u uskim uličicama.', pl: 'w wąskich uliczkach.' }
    ]
  },
  {
    id: 44,
    category: 'podroze',
    tokens: [
      { hr: 'More', pl: 'Morze' },
      { hr: 'je odavde', pl: 'jest stąd' },
      { hr: 'jako blizu.', pl: 'bardzo blisko.', blank: true }
    ]
  },
  {
    id: 45,
    category: 'podroze',
    tokens: [
      { hr: 'Ovaj otok', pl: 'Ta wyspa' },
      { hr: 'je stvarno', pl: 'jest naprawdę' },
      { hr: 'šarmantan.', pl: 'urokliwa.', blank: true }
    ]
  },

  // --- Praca ---
  {
    id: 46,
    category: 'praca',
    tokens: [
      { hr: 'Radim', pl: 'Pracuję', blank: true },
      { hr: 'svaki dan', pl: 'codziennie' },
      { hr: 'od osam do četiri.', pl: 'od ósmej do czwartej.' }
    ]
  },
  {
    id: 47,
    category: 'praca',
    tokens: [
      { hr: 'Moj šef', pl: 'Mój szef' },
      { hr: 'je jako', pl: 'jest bardzo' },
      { hr: 'zahtjevan.', pl: 'wymagający.', blank: true }
    ]
  },
  {
    id: 48,
    category: 'praca',
    tokens: [
      { hr: 'Imam danas', pl: 'Mam dzisiaj' },
      { hr: 'važan sastanak', pl: 'ważne spotkanie', blank: true },
      { hr: 'na poslu.', pl: 'w pracy.' }
    ]
  },
  {
    id: 49,
    category: 'praca',
    tokens: [
      { hr: 'Tražim', pl: 'Szukam', blank: true },
      { hr: 'novi posao', pl: 'nowej pracy' },
      { hr: 'već mjesec dana.', pl: 'od miesiąca.' }
    ]
  },
  {
    id: 50,
    category: 'praca',
    tokens: [
      { hr: 'Ovaj projekt', pl: 'Ten projekt' },
      { hr: 'moramo', pl: 'musimy' },
      { hr: 'završiti', pl: 'skończyć', blank: true },
      { hr: 'do petka.', pl: 'do piątku.' }
    ]
  },

  // --- Pytania podstawowe ---
  {
    id: 51,
    category: 'pytania',
    tokens: [
      { hr: 'Gdje je', pl: 'Gdzie jest', blank: true },
      { hr: 'WC?', pl: 'WC?' }
    ]
  },
  {
    id: 52,
    category: 'pytania',
    tokens: [
      { hr: 'Kako se', pl: 'Jak to się' },
      { hr: 'kaže', pl: 'mówi', blank: true },
      { hr: 'ovo?', pl: 'to?' }
    ]
  },
  {
    id: 53,
    category: 'pytania',
    tokens: [
      { hr: 'Govorite li', pl: 'Czy mówi pan/pani', blank: true },
      { hr: 'engleski?', pl: 'po angielsku?' }
    ]
  },
  {
    id: 54,
    category: 'pytania',
    tokens: [
      { hr: 'Zašto', pl: 'Dlaczego', blank: true },
      { hr: 'ne dolaziš?', pl: 'nie przychodzisz?' }
    ]
  },
  {
    id: 55,
    category: 'pytania',
    tokens: [
      { hr: 'Tko je', pl: 'Kto jest', blank: true },
      { hr: 'ovo?', pl: 'to?' }
    ]
  },

  // --- Liczby i ilość ---
  {
    id: 56,
    category: 'liczby',
    tokens: [
      { hr: 'Trebam', pl: 'Potrzebuję', blank: true },
      { hr: 'dva kilograma.', pl: 'dwóch kilogramów.' }
    ]
  },
  {
    id: 57,
    category: 'liczby',
    tokens: [
      { hr: 'Imam', pl: 'Mam' },
      { hr: 'samo', pl: 'tylko', blank: true },
      { hr: 'pet minuta.', pl: 'pięć minut.' }
    ]
  },
  {
    id: 58,
    category: 'liczby',
    tokens: [
      { hr: 'To je', pl: 'To jest' },
      { hr: 'previše', pl: 'za dużo', blank: true },
      { hr: 'novca.', pl: 'pieniędzy.' }
    ]
  },
  {
    id: 59,
    category: 'liczby',
    tokens: [
      { hr: 'Trebam', pl: 'Potrzebuję' },
      { hr: 'malo', pl: 'trochę', blank: true },
      { hr: 'vremena.', pl: 'czasu.' }
    ]
  },
  {
    id: 60,
    category: 'liczby',
    tokens: [
      { hr: 'Nemam', pl: 'Nie mam', blank: true },
      { hr: 'više', pl: 'już' },
      { hr: 'novca.', pl: 'pieniędzy.' }
    ]
  },

  // --- Kierunki ---
  {
    id: 61,
    category: 'kierunki',
    tokens: [
      { hr: 'Idi', pl: 'Idź' },
      { hr: 'ravno', pl: 'prosto', blank: true },
      { hr: 'naprijed.', pl: 'przed siebie.' }
    ]
  },
  {
    id: 62,
    category: 'kierunki',
    tokens: [
      { hr: 'Skreni', pl: 'Skręć' },
      { hr: 'lijevo', pl: 'w lewo', blank: true },
      { hr: 'ovdje.', pl: 'tutaj.' }
    ]
  },
  {
    id: 63,
    category: 'kierunki',
    tokens: [
      { hr: 'To je', pl: 'To jest' },
      { hr: 'blizu', pl: 'blisko', blank: true },
      { hr: 'odavde.', pl: 'stąd.' }
    ]
  },
  {
    id: 64,
    category: 'kierunki',
    tokens: [
      { hr: 'To je', pl: 'To jest' },
      { hr: 'jako', pl: 'bardzo' },
      { hr: 'daleko.', pl: 'daleko.', blank: true }
    ]
  },
  {
    id: 65,
    category: 'kierunki',
    tokens: [
      { hr: 'Ja sam', pl: 'Jestem' },
      { hr: 'izgubljen.', pl: 'zgubiony.', blank: true }
    ]
  },

  // --- Zdrowie ---
  {
    id: 66,
    category: 'zdrowie',
    tokens: [
      { hr: 'Boli me', pl: 'Boli mnie', blank: true },
      { hr: 'glava.', pl: 'głowa.' }
    ]
  },
  {
    id: 67,
    category: 'zdrowie',
    tokens: [
      { hr: 'Trebam', pl: 'Potrzebuję' },
      { hr: 'liječnika.', pl: 'lekarza.', blank: true }
    ]
  },
  {
    id: 68,
    category: 'zdrowie',
    tokens: [
      { hr: 'Osjećam se', pl: 'Czuję się' },
      { hr: 'loše.', pl: 'źle.', blank: true }
    ]
  },
  {
    id: 69,
    category: 'zdrowie',
    tokens: [
      { hr: 'Gdje je', pl: 'Gdzie jest' },
      { hr: 'ljekarna?', pl: 'apteka?', blank: true }
    ]
  },
  {
    id: 70,
    category: 'zdrowie',
    tokens: [
      { hr: 'Trebam', pl: 'Potrzebuję', blank: true },
      { hr: 'pomoć.', pl: 'pomocy.' }
    ]
  },

  // --- Jedzenie ---
  {
    id: 71,
    category: 'jedzenie',
    tokens: [
      { hr: 'Ja sam', pl: 'Jestem' },
      { hr: 'gladan.', pl: 'głodny.', blank: true }
    ]
  },
  {
    id: 72,
    category: 'jedzenie',
    tokens: [
      { hr: 'Ja sam', pl: 'Jestem' },
      { hr: 'žedan.', pl: 'spragniony.', blank: true }
    ]
  },
  {
    id: 73,
    category: 'jedzenie',
    tokens: [
      { hr: 'Volim', pl: 'Lubię', blank: true },
      { hr: 'ovo jelo.', pl: 'to danie.' }
    ]
  },
  {
    id: 74,
    category: 'jedzenie',
    tokens: [
      { hr: 'Ne jedem', pl: 'Nie jem' },
      { hr: 'meso.', pl: 'mięsa.', blank: true }
    ]
  },
  {
    id: 75,
    category: 'jedzenie',
    tokens: [
      { hr: 'Voda', pl: 'Woda' },
      { hr: 'bez', pl: 'bez' },
      { hr: 'plina, molim.', pl: 'gazu, proszę.', blank: true }
    ]
  },

  // --- Dom ---
  {
    id: 76,
    category: 'dom',
    tokens: [
      { hr: 'Gdje', pl: 'Gdzie' },
      { hr: 'živiš?', pl: 'mieszkasz?', blank: true }
    ]
  },
  {
    id: 77,
    category: 'dom',
    tokens: [
      { hr: 'Moj stan', pl: 'Moje mieszkanie' },
      { hr: 'je', pl: 'jest' },
      { hr: 'malen.', pl: 'małe.', blank: true }
    ]
  },
  {
    id: 78,
    category: 'dom',
    tokens: [
      { hr: 'Zatvori', pl: 'Zamknij', blank: true },
      { hr: 'vrata, molim.', pl: 'drzwi, proszę.' }
    ]
  },
  {
    id: 79,
    category: 'dom',
    tokens: [
      { hr: 'Otvori', pl: 'Otwórz' },
      { hr: 'prozor.', pl: 'okno.', blank: true }
    ]
  },
  {
    id: 80,
    category: 'dom',
    tokens: [
      { hr: 'Ovo je', pl: 'To jest' },
      { hr: 'moja soba.', pl: 'mój pokój.', blank: true }
    ]
  },

  // --- Transport ---
  {
    id: 81,
    category: 'transport',
    tokens: [
      { hr: 'Kamo', pl: 'Dokąd', blank: true },
      { hr: 'ideš?', pl: 'idziesz?' }
    ]
  },
  {
    id: 82,
    category: 'transport',
    tokens: [
      { hr: 'Autobus', pl: 'Autobus' },
      { hr: 'kasni.', pl: 'się spóźnia.', blank: true }
    ]
  },
  {
    id: 83,
    category: 'transport',
    tokens: [
      { hr: 'Idem', pl: 'Idę / jadę', blank: true },
      { hr: 'kući.', pl: 'do domu.' }
    ]
  },
  {
    id: 84,
    category: 'transport',
    tokens: [
      { hr: 'Trebam', pl: 'Potrzebuję' },
      { hr: 'taksi.', pl: 'taksówki.', blank: true }
    ]
  },
  {
    id: 85,
    category: 'transport',
    tokens: [
      { hr: 'Koliko', pl: 'Ile', blank: true },
      { hr: 'traje put?', pl: 'trwa podróż?' }
    ]
  },

  // --- Codzienne zwroty ---
  {
    id: 86,
    category: 'codzienne',
    tokens: [
      { hr: 'Nema problema.', pl: 'Nie ma problemu.', blank: true }
    ]
  },
  {
    id: 87,
    category: 'codzienne',
    tokens: [
      { hr: 'Naravno!', pl: 'Oczywiście!', blank: true }
    ]
  },
  {
    id: 88,
    category: 'codzienne',
    tokens: [
      { hr: 'Nisam', pl: 'Nie jestem', blank: true },
      { hr: 'siguran.', pl: 'pewien.' }
    ]
  },
  {
    id: 89,
    category: 'codzienne',
    tokens: [
      { hr: 'To je', pl: 'To jest' },
      { hr: 'dobra ideja.', pl: 'dobry pomysł.', blank: true }
    ]
  },
  {
    id: 90,
    category: 'codzienne',
    tokens: [
      { hr: 'Nemoj', pl: 'Nie', blank: true },
      { hr: 'brinuti.', pl: 'martw się.' }
    ]
  },
  {
    id: 91,
    category: 'codzienne',
    tokens: [
      { hr: 'Šteta.', pl: 'Szkoda.', blank: true }
    ]
  },
  {
    id: 92,
    category: 'codzienne',
    tokens: [
      { hr: 'Sve je', pl: 'Wszystko jest' },
      { hr: 'u redu.', pl: 'w porządku.', blank: true }
    ]
  },
  {
    id: 93,
    category: 'codzienne',
    tokens: [
      { hr: 'Nema na čemu.', pl: 'Nie ma za co.', blank: true }
    ]
  },
  {
    id: 94,
    category: 'towarzyskie',
    tokens: [
      { hr: 'Sretan rođendan!', pl: 'Wszystkiego najlepszego!', blank: true }
    ]
  },
  {
    id: 95,
    category: 'towarzyskie',
    tokens: [
      { hr: 'Živjeli!', pl: 'Na zdrowie!', blank: true }
    ]
  },
  {
    id: 96,
    category: 'towarzyskie',
    tokens: [
      { hr: 'Dobar tek!', pl: 'Smacznego!', blank: true }
    ]
  },
  {
    id: 97,
    category: 'towarzyskie',
    tokens: [
      { hr: 'Sretan put!', pl: 'Szczęśliwej podróży!', blank: true }
    ]
  },
  {
    id: 98,
    category: 'uczucia',
    tokens: [
      { hr: 'Nedostaješ mi.', pl: 'Tęsknię za tobą.', blank: true }
    ]
  },
  {
    id: 99,
    category: 'uczucia',
    tokens: [
      { hr: 'Volim te.', pl: 'Kocham cię.', blank: true }
    ]
  },
  {
    id: 100,
    category: 'codzienne',
    tokens: [
      { hr: 'Vidimo se', pl: 'Do zobaczenia', blank: true },
      { hr: 'uskoro.', pl: 'wkrótce.' }
    ]
  }
]