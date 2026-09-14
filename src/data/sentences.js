// UWAGA: treść chorwacka wymaga weryfikacji przez native speakera
// przed użyciem produkcyjnym.

export const sentences = [
  // --- Powitania ---
  { id: 1, category: 'powitania', tokens: [
    { hr: 'Bok', pl: 'Cześć' },
    { hr: ',', pl: ',', punct: true },
    { hr: 'kako', pl: 'jak', blank: true },
    { hr: 'si?', pl: 'się masz?' }
  ]},
  { id: 2, category: 'powitania', tokens: [
    { hr: 'Dobar dan', pl: 'Dzień dobry' },
    { hr: ',', pl: ',', punct: true },
    { hr: 'drago mi je', pl: 'miło mi je' },
    { hr: 'što smo se upoznali.', pl: 'że się poznaliśmy.', blank: true }
  ]},
  { id: 3, category: 'powitania', tokens: [
    { hr: 'Dobra večer', pl: 'Dobry wieczór' },
    { hr: ',', pl: ',', punct: true },
    { hr: 'kako je prošao', pl: 'jak minął', blank: true },
    { hr: 'dan?', pl: 'dzień?' }
  ]},
  { id: 4, category: 'powitania', tokens: [
    { hr: 'Doviđenja', pl: 'Do widzenia' },
    { hr: ',', pl: ',', punct: true },
    { hr: 'vidimo se', pl: 'do zobaczenia' },
    { hr: 'sutra!', pl: 'jutro!', blank: true }
  ]},
  { id: 5, category: 'powitania', tokens: [
    { hr: 'Laku noć', pl: 'Dobranoc' },
    { hr: ',', pl: ',', punct: true },
    { hr: 'spavaj', pl: 'śpij', blank: true },
    { hr: 'dobro.', pl: 'dobrze.' }
  ]},

  // --- Podstawy ---
  { id: 6, category: 'podstawy', tokens: [
    { hr: 'Zovem se', pl: 'Mam na imię', blank: true },
    { hr: 'Ana', pl: 'Ana' },
    { hr: ',', pl: ',', punct: true },
    { hr: 'a ti?', pl: 'a ty?' }
  ]},
  { id: 7, category: 'podstawy', tokens: [
    { hr: 'Ne razumijem', pl: 'Nie rozumiem', blank: true },
    { hr: ',', pl: ',', punct: true },
    { hr: 'možeš li', pl: 'możesz' },
    { hr: 'ponoviti?', pl: 'powtórzyć?' }
  ]},
  { id: 8, category: 'podstawy', tokens: [
    { hr: 'Hvala ti puno', pl: 'Bardzo dziękuję', blank: true },
    { hr: 'na pomoći.', pl: 'za pomoc.' }
  ]},
  { id: 9, category: 'podstawy', tokens: [
    { hr: 'Oprosti', pl: 'Przepraszam' },
    { hr: ',', pl: ',', punct: true },
    { hr: 'gdje je', pl: 'gdzie jest' },
    { hr: 'kolodvor?', pl: 'dworzec?', blank: true }
  ]},
  { id: 10, category: 'podstawy', tokens: [
    { hr: 'Molim te', pl: 'Proszę' },
    { hr: ',', pl: ',', punct: true },
    { hr: 'sjedni', pl: 'usiądź', blank: true },
    { hr: 'ovdje.', pl: 'tutaj.' }
  ]},

  // --- Restauracja ---
  { id: 11, category: 'restauracja', tokens: [
    { hr: 'Molim vas', pl: 'Poproszę o' },
    { hr: 'račun.', pl: 'rachunek.', blank: true }
  ]},
  { id: 12, category: 'restauracja', tokens: [
    { hr: 'Ova juha', pl: 'Ta zupa' },
    { hr: 'je stvarno', pl: 'jest naprawdę' },
    { hr: 'ukusna.', pl: 'pyszna.', blank: true }
  ]},
  { id: 13, category: 'restauracja', tokens: [
    { hr: 'Mogu li', pl: 'Czy mogę' },
    { hr: 'vidjeti', pl: 'zobaczyć', blank: true },
    { hr: 'jelovnik?', pl: 'menu?' }
  ]},
  { id: 14, category: 'restauracja', tokens: [
    { hr: 'Htio bih', pl: 'Chciałbym' },
    { hr: 'naručiti', pl: 'zamówić', blank: true },
    { hr: 'kavu', pl: 'kawę' },
    { hr: 'i', pl: 'i' },
    { hr: 'kolač.', pl: 'ciastko.' }
  ]},
  { id: 15, category: 'restauracja', tokens: [
    { hr: 'Stol', pl: 'Stolik' },
    { hr: 'za dvije osobe', pl: 'dla dwóch osób', blank: true },
    { hr: ',', pl: ',', punct: true },
    { hr: 'molim.', pl: 'proszę.' }
  ]},

  // --- Zakupy ---
  { id: 16, category: 'zakupy', tokens: [
    { hr: 'Koliko košta', pl: 'Ile kosztuje', blank: true },
    { hr: 'ova košulja?', pl: 'ta koszula?' }
  ]},
  { id: 17, category: 'zakupy', tokens: [
    { hr: 'Imate li', pl: 'Czy macie' },
    { hr: 'ovaj džemper', pl: 'ten sweter' },
    { hr: 'u drugoj', pl: 'w innym' },
    { hr: 'boji?', pl: 'kolorze?', blank: true }
  ]},
  { id: 18, category: 'zakupy', tokens: [
    { hr: 'Tražim', pl: 'Szukam', blank: true },
    { hr: 'poklon', pl: 'prezentu' },
    { hr: 'za svoju mamu.', pl: 'dla mojej mamy.' }
  ]},
  { id: 19, category: 'zakupy', tokens: [
    { hr: 'Mogu li', pl: 'Czy mogę' },
    { hr: 'platiti', pl: 'zapłacić', blank: true },
    { hr: 'karticom?', pl: 'kartą?' }
  ]},
  { id: 20, category: 'zakupy', tokens: [
    { hr: 'Ove cipele', pl: 'Te buty' },
    { hr: 'su', pl: 'są' },
    { hr: 'premale.', pl: 'za małe.', blank: true }
  ]},

  // --- Czas ---
  { id: 21, category: 'czas', tokens: [
    { hr: 'Koliko je sad', pl: 'Która jest teraz', blank: true },
    { hr: 'sati?', pl: 'godzina?' }
  ]},
  { id: 22, category: 'czas', tokens: [
    { hr: 'Vlak', pl: 'Pociąg' },
    { hr: 'polazi', pl: 'odjeżdża', blank: true },
    { hr: 'u osam ujutro.', pl: 'o ósmej rano.' }
  ]},
  { id: 23, category: 'czas', tokens: [
    { hr: 'Nađimo se', pl: 'Spotkajmy się', blank: true },
    { hr: 'sutra poslijepodne.', pl: 'jutro po południu.' }
  ]},
  { id: 24, category: 'czas', tokens: [
    { hr: 'Imam', pl: 'Mam' },
    { hr: 'puno posla', pl: 'dużo pracy', blank: true },
    { hr: 'ovaj tjedan.', pl: 'w tym tygodniu.' }
  ]},
  { id: 25, category: 'czas', tokens: [
    { hr: 'Jučer', pl: 'Wczoraj' },
    { hr: 'je padala kiša', pl: 'padał deszcz', blank: true },
    { hr: 'cijeli dan.', pl: 'cały dzień.' }
  ]},

  // --- Rodzina ---
  { id: 26, category: 'rodzina', tokens: [
    { hr: 'Imam', pl: 'Mam' },
    { hr: 'dvije sestre', pl: 'dwie siostry', blank: true },
    { hr: 'i', pl: 'i' },
    { hr: 'jednog brata.', pl: 'jednego brata.' }
  ]},
  { id: 27, category: 'rodzina', tokens: [
    { hr: 'Moji roditelji', pl: 'Moi rodzice' },
    { hr: 'žive', pl: 'mieszkają', blank: true },
    { hr: 'u malom gradu.', pl: 'w małym mieście.' }
  ]},
  { id: 28, category: 'rodzina', tokens: [
    { hr: 'Moj djed', pl: 'Mój dziadek' },
    { hr: 'priča', pl: 'opowiada', blank: true },
    { hr: 'divne priče.', pl: 'wspaniałe historie.' }
  ]},
  { id: 29, category: 'rodzina', tokens: [
    { hr: 'Ona je', pl: 'Ona jest' },
    { hr: 'moja najbolja', pl: 'moją najlepszą' },
    { hr: 'prijateljica.', pl: 'przyjaciółką.', blank: true }
  ]},
  { id: 30, category: 'rodzina', tokens: [
    { hr: 'Naša obitelj', pl: 'Nasza rodzina', blank: true },
    { hr: 'se sastaje', pl: 'spotyka się' },
    { hr: 'svake nedjelje.', pl: 'w każdą niedzielę.' }
  ]},

  // --- Uczucia ---
  { id: 31, category: 'uczucia', tokens: [
    { hr: 'Ja sam', pl: 'Jestem' },
    { hr: 'danas', pl: 'dzisiaj' },
    { hr: 'jako sretan.', pl: 'bardzo szczęśliwy.', blank: true }
  ]},
  { id: 32, category: 'uczucia', tokens: [
    { hr: 'Malo se', pl: 'Trochę się' },
    { hr: 'bojim', pl: 'boję', blank: true },
    { hr: 'mraka.', pl: 'ciemności.' }
  ]},
  { id: 33, category: 'uczucia', tokens: [
    { hr: 'To je bio', pl: 'To było' },
    { hr: 'stvarno tužan', pl: 'naprawdę smutne', blank: true },
    { hr: 'događaj.', pl: 'wydarzenie.' }
  ]},
  { id: 34, category: 'uczucia', tokens: [
    { hr: 'Jako se', pl: 'Bardzo się' },
    { hr: 'veselim', pl: 'cieszę', blank: true },
    { hr: 'odmoru.', pl: 'na urlop.' }
  ]},
  { id: 35, category: 'uczucia', tokens: [
    { hr: 'Osjećam se', pl: 'Czuję się', blank: true },
    { hr: 'danas', pl: 'dzisiaj' },
    { hr: 'jako umorno.', pl: 'bardzo zmęczony.' }
  ]},

  // --- Pogoda ---
  { id: 36, category: 'pogoda', tokens: [
    { hr: 'Danas', pl: 'Dzisiaj' },
    { hr: 'je', pl: 'jest' },
    { hr: 'jako sunčano.', pl: 'bardzo słonecznie.', blank: true }
  ]},
  { id: 37, category: 'pogoda', tokens: [
    { hr: 'Zimi ovdje', pl: 'Zimą tutaj' },
    { hr: 'često pada', pl: 'często pada' },
    { hr: 'snijeg.', pl: 'śnieg.', blank: true }
  ]},
  { id: 38, category: 'pogoda', tokens: [
    { hr: 'Sutra će puhati', pl: 'Jutro będzie wiał' },
    { hr: 'jak', pl: 'silny' },
    { hr: 'vjetar.', pl: 'wiatr.', blank: true }
  ]},
  { id: 39, category: 'pogoda', tokens: [
    { hr: 'Ljeti', pl: 'Latem', blank: true },
    { hr: 'je ovdje', pl: 'jest tu' },
    { hr: 'jako vruće.', pl: 'bardzo gorąco.' }
  ]},
  { id: 40, category: 'pogoda', tokens: [
    { hr: 'Nebo', pl: 'Niebo' },
    { hr: 'je danas', pl: 'jest dzisiaj' },
    { hr: 'potpuno oblačno.', pl: 'całkiem zachmurzone.', blank: true }
  ]},

  // --- Podróże ---
  { id: 41, category: 'podroze', tokens: [
    { hr: 'Sutra', pl: 'Jutro' },
    { hr: 'letimo avionom', pl: 'lecimy samolotem', blank: true },
    { hr: 'u Zagreb.', pl: 'do Zagrzebia.' }
  ]},
  { id: 42, category: 'podroze', tokens: [
    { hr: 'Ovaj grad', pl: 'To miasto' },
    { hr: 'ima', pl: 'ma' },
    { hr: 'prekrasnu staru gradsku jezgru.', pl: 'piękną starówkę.', blank: true }
  ]},
  { id: 43, category: 'podroze', tokens: [
    { hr: 'Izgubili smo se', pl: 'Zgubiliśmy się', blank: true },
    { hr: 'u uskim uličicama.', pl: 'w wąskich uliczkach.' }
  ]},
  { id: 44, category: 'podroze', tokens: [
    { hr: 'More', pl: 'Morze' },
    { hr: 'je odavde', pl: 'jest stąd' },
    { hr: 'jako blizu.', pl: 'bardzo blisko.', blank: true }
  ]},
  { id: 45, category: 'podroze', tokens: [
    { hr: 'Ovaj otok', pl: 'Ta wyspa' },
    { hr: 'je stvarno', pl: 'jest naprawdę' },
    { hr: 'šarmantan.', pl: 'urokliwy.', blank: true }
  ]},

  // --- Praca ---
  { id: 46, category: 'praca', tokens: [
    { hr: 'Radim', pl: 'Pracuję', blank: true },
    { hr: 'svaki dan', pl: 'codziennie' },
    { hr: 'od osam do četiri.', pl: 'od ósmej do czwartej.' }
  ]},
  { id: 47, category: 'praca', tokens: [
    { hr: 'Moj šef', pl: 'Mój szef' },
    { hr: 'je jako', pl: 'jest bardzo' },
    { hr: 'zahtjevan.', pl: 'wymagający.', blank: true }
  ]},
  { id: 48, category: 'praca', tokens: [
    { hr: 'Imam danas', pl: 'Mam dzisiaj' },
    { hr: 'važan sastanak', pl: 'ważne spotkanie', blank: true },
    { hr: 'na poslu.', pl: 'w pracy.' }
  ]},
  { id: 49, category: 'praca', tokens: [
    { hr: 'Tražim', pl: 'Szukam', blank: true },
    { hr: 'novi posao', pl: 'nowej pracy' },
    { hr: 'već mjesec dana.', pl: 'od miesiąca.' }
  ]},
  { id: 50, category: 'praca', tokens: [
    { hr: 'Ovaj projekt', pl: 'Ten projekt' },
    { hr: 'moramo', pl: 'musimy' },
    { hr: 'završiti', pl: 'skończyć', blank: true },
    { hr: 'do petka.', pl: 'do piątku.' }
  ]},

  // --- Pytania podstawowe ---
  { id: 51, category: 'pytania', tokens: [
    { hr: 'Gdje je', pl: 'Gdzie jest', blank: true },
    { hr: 'WC?', pl: 'WC?' }
  ]},
  { id: 52, category: 'pytania', tokens: [
    { hr: 'Kako se', pl: 'Jak to się' },
    { hr: 'kaže', pl: 'mówi', blank: true },
    { hr: 'ovo?', pl: 'to?' }
  ]},
  { id: 53, category: 'pytania', tokens: [
    { hr: 'Govorite li', pl: 'Czy mówi pan/pani', blank: true },
    { hr: 'engleski?', pl: 'po angielsku?' }
  ]},
  { id: 54, category: 'pytania', tokens: [
    { hr: 'Zašto', pl: 'Dlaczego', blank: true },
    { hr: 'ne dolaziš?', pl: 'nie przychodzisz?' }
  ]},
  { id: 55, category: 'pytania', tokens: [
    { hr: 'Tko je', pl: 'Kto jest', blank: true },
    { hr: 'ovo?', pl: 'to?' }
  ]},

  // --- Liczby i ilość ---
  { id: 56, category: 'liczby', tokens: [
    { hr: 'Trebam', pl: 'Potrzebuję', blank: true },
    { hr: 'dva kilograma.', pl: 'dwóch kilogramów.' }
  ]},
  { id: 57, category: 'liczby', tokens: [
    { hr: 'Imam', pl: 'Mam' },
    { hr: 'samo', pl: 'tylko', blank: true },
    { hr: 'pet minuta.', pl: 'pięć minut.' }
  ]},
  { id: 58, category: 'liczby', tokens: [
    { hr: 'To je', pl: 'To jest' },
    { hr: 'previše', pl: 'za dużo', blank: true },
    { hr: 'novca.', pl: 'pieniędzy.' }
  ]},
  { id: 59, category: 'liczby', tokens: [
    { hr: 'Trebam', pl: 'Potrzebuję' },
    { hr: 'malo', pl: 'trochę', blank: true },
    { hr: 'vremena.', pl: 'czasu.' }
  ]},
  { id: 60, category: 'liczby', tokens: [
    { hr: 'Nemam', pl: 'Nie mam', blank: true },
    { hr: 'više', pl: 'już' },
    { hr: 'novca.', pl: 'pieniędzy.' }
  ]},

  // --- Kierunki ---
  { id: 61, category: 'kierunki', tokens: [
    { hr: 'Idi', pl: 'Idź' },
    { hr: 'ravno', pl: 'prosto', blank: true },
    { hr: 'naprijed.', pl: 'przed siebie.' }
  ]},
  { id: 62, category: 'kierunki', tokens: [
    { hr: 'Skreni', pl: 'Skręć' },
    { hr: 'lijevo', pl: 'w lewo', blank: true },
    { hr: 'ovdje.', pl: 'tutaj.' }
  ]},
  { id: 63, category: 'kierunki', tokens: [
    { hr: 'Blizu je', pl: 'Jest blisko', blank: true },
    { hr: 'odavde.', pl: 'stąd.' }
  ]},
  { id: 64, category: 'kierunki', tokens: [
    { hr: 'To je', pl: 'To jest' },
    { hr: 'jako', pl: 'bardzo' },
    { hr: 'daleko.', pl: 'daleko.', blank: true }
  ]},
  { id: 65, category: 'kierunki', tokens: [
    { hr: 'Izgubio', pl: 'Zgubiłem', blank: true },
    { hr: 'sam se.', pl: 'się.' }
  ]},

  // --- Zdrowie ---
  { id: 66, category: 'zdrowie', tokens: [
    { hr: 'Boli me', pl: 'Boli mnie', blank: true },
    { hr: 'glava.', pl: 'głowa.' }
  ]},
  { id: 67, category: 'zdrowie', tokens: [
    { hr: 'Trebam', pl: 'Potrzebuję' },
    { hr: 'liječnika.', pl: 'lekarza.', blank: true }
  ]},
  { id: 68, category: 'zdrowie', tokens: [
    { hr: 'Osjećam se', pl: 'Czuję się' },
    { hr: 'loše.', pl: 'źle.', blank: true }
  ]},
  { id: 69, category: 'zdrowie', tokens: [
    { hr: 'Gdje je', pl: 'Gdzie jest' },
    { hr: 'ljekarna?', pl: 'apteka?', blank: true }
  ]},
  { id: 70, category: 'zdrowie', tokens: [
    { hr: 'Trebam', pl: 'Potrzebuję', blank: true },
    { hr: 'pomoć.', pl: 'pomocy.' }
  ]},

  // --- Jedzenie ---
  { id: 71, category: 'jedzenie', tokens: [
    { hr: 'Ja sam', pl: 'Jestem' },
    { hr: 'gladan.', pl: 'głodny.', blank: true }
  ]},
  { id: 72, category: 'jedzenie', tokens: [
    { hr: 'Ja sam', pl: 'Jestem' },
    { hr: 'žedan.', pl: 'spragniony.', blank: true }
  ]},
  { id: 73, category: 'jedzenie', tokens: [
    { hr: 'Volim', pl: 'Lubię', blank: true },
    { hr: 'ovo jelo.', pl: 'to danie.' }
  ]},
  { id: 74, category: 'jedzenie', tokens: [
    { hr: 'Ne jedem', pl: 'Nie jem' },
    { hr: 'meso.', pl: 'mięsa.', blank: true }
  ]},
  { id: 75, category: 'jedzenie', tokens: [
    { hr: 'Voda', pl: 'Woda' },
    { hr: 'bez', pl: 'bez' },
    { hr: 'plina, molim.', pl: 'gazu, proszę.', blank: true }
  ]},

  // --- Dom ---
  { id: 76, category: 'dom', tokens: [
    { hr: 'Gdje', pl: 'Gdzie' },
    { hr: 'živiš?', pl: 'mieszkasz?', blank: true }
  ]},
  { id: 77, category: 'dom', tokens: [
    { hr: 'Moj stan', pl: 'Moje mieszkanie' },
    { hr: 'je', pl: 'jest' },
    { hr: 'malen.', pl: 'małe.', blank: true }
  ]},
  { id: 78, category: 'dom', tokens: [
    { hr: 'Zatvori', pl: 'Zamknij', blank: true },
    { hr: 'vrata, molim.', pl: 'drzwi, proszę.' }
  ]},
  { id: 79, category: 'dom', tokens: [
    { hr: 'Otvori', pl: 'Otwórz' },
    { hr: 'prozor.', pl: 'okno.', blank: true }
  ]},
  { id: 80, category: 'dom', tokens: [
    { hr: 'Ovo je', pl: 'To jest' },
    { hr: 'moja soba.', pl: 'mój pokój.', blank: true }
  ]},

  // --- Transport ---
  { id: 81, category: 'transport', tokens: [
    { hr: 'Kamo', pl: 'Dokąd', blank: true },
    { hr: 'ideš?', pl: 'idziesz?' }
  ]},
  { id: 82, category: 'transport', tokens: [
    { hr: 'Autobus', pl: 'Autobus' },
    { hr: 'kasni.', pl: 'się spóźnia.', blank: true }
  ]},
  { id: 83, category: 'transport', tokens: [
    { hr: 'Idem', pl: 'Idę / jadę', blank: true },
    { hr: 'kući.', pl: 'do domu.' }
  ]},
  { id: 84, category: 'transport', tokens: [
    { hr: 'Trebam', pl: 'Potrzebuję' },
    { hr: 'taksi.', pl: 'taksówki.', blank: true }
  ]},
  { id: 85, category: 'transport', tokens: [
    { hr: 'Koliko', pl: 'Ile', blank: true },
    { hr: 'traje put?', pl: 'trwa podróż?' }
  ]},

  // --- Codzienne zwroty ---
  { id: 86, category: 'codzienne', tokens: [
    { hr: 'Nema', pl: 'Nie ma', blank: true },
    { hr: 'problema.', pl: 'problemu.' }
  ]},
  { id: 87, category: 'codzienne', tokens: [
    { hr: 'Naravno', pl: 'Oczywiście', blank: true },
    { hr: '!', pl: '!', punct: true }
  ]},
  { id: 88, category: 'codzienne', tokens: [
    { hr: 'Nisam', pl: 'Nie jestem', blank: true },
    { hr: 'siguran.', pl: 'pewien.' }
  ]},
  { id: 89, category: 'codzienne', tokens: [
    { hr: 'To je', pl: 'To jest' },
    { hr: 'dobra ideja.', pl: 'dobry pomysł.', blank: true }
  ]},
  { id: 90, category: 'codzienne', tokens: [
    { hr: 'Ne', pl: 'Nie' },
    { hr: 'brini.', pl: 'martw się.', blank: true }
  ]},
  { id: 91, category: 'codzienne', tokens: [
    { hr: 'Šteta', pl: 'Szkoda', blank: true },
    { hr: '.', pl: '.', punct: true }
  ]},
  { id: 92, category: 'codzienne', tokens: [
    { hr: 'Sve je', pl: 'Wszystko jest' },
    { hr: 'u redu.', pl: 'w porządku.', blank: true }
  ]},
  { id: 93, category: 'codzienne', tokens: [
    { hr: 'Nema', pl: 'Nie ma' },
    { hr: 'na čemu.', pl: 'za co.', blank: true }
  ]},
  // Uwaga: 94-99 to krótkie idiomy/wykrzykniki — podział na tokeny
  // jest częściowo sztuczny, bo tłumaczenia PL są idiomatyczne, nie
  // dosłowne (np. 'Živjeli' = jedno słowo, 'Na zdrowie' = idiom).
  { id: 94, category: 'towarzyskie', tokens: [
    { hr: 'Sretan', pl: 'Wszystkiego', blank: true },
    { hr: 'rođendan!', pl: 'najlepszego!' }
  ]},
  { id: 95, category: 'towarzyskie', tokens: [
    { hr: 'Živjeli', pl: 'Na zdrowie', blank: true },
    { hr: '!', pl: '!', punct: true }
  ]},
  { id: 96, category: 'towarzyskie', tokens: [
    { hr: 'Dobar tek', pl: 'Smacznego', blank: true },
    { hr: '!', pl: '!', punct: true }
  ]},
  { id: 97, category: 'towarzyskie', tokens: [
    { hr: 'Sretan', pl: 'Szczęśliwej', blank: true },
    { hr: 'put!', pl: 'podróży!' }
  ]},
  { id: 98, category: 'uczucia', tokens: [
    { hr: 'Nedostaješ', pl: 'Tęsknię', blank: true },
    { hr: 'mi.', pl: 'za tobą.' }
  ]},
  { id: 99, category: 'uczucia', tokens: [
    { hr: 'Volim', pl: 'Kocham', blank: true },
    { hr: 'te.', pl: 'cię.' }
  ]},
  { id: 100, category: 'codzienne', tokens: [
    { hr: 'Vidimo se', pl: 'Do zobaczenia', blank: true },
    { hr: 'uskoro.', pl: 'wkrótce.' }
  ]},

  // --- Powitania (2) ---
  { id: 101, category: 'powitania', tokens: [
    { hr: 'Kako si', pl: 'Jak się masz', blank: true },
    { hr: 'danas?', pl: 'dzisiaj?' }
  ]},
  { id: 102, category: 'powitania', tokens: [
    { hr: 'Vidimo se', pl: 'Do zobaczenia' },
    { hr: 'večeras.', pl: 'wieczorem.', blank: true }
  ]},
  { id: 103, category: 'powitania', tokens: [
    { hr: 'Drago mi je', pl: 'Cieszę się' },
    { hr: 'da si', pl: 'że' },
    { hr: 'došao.', pl: 'przyszedłeś.', blank: true }
  ]},
  { id: 104, category: 'powitania', tokens: [
    { hr: 'Čujemo se', pl: 'Usłyszymy się', blank: true },
    { hr: 'kasnije.', pl: 'później.' }
  ]},
  { id: 105, category: 'powitania', tokens: [
    { hr: 'Ugodan', pl: 'Miłego', blank: true },
    { hr: 'dan!', pl: 'dnia!' }
  ]},

  // --- Podstawy (2) ---
  { id: 106, category: 'podstawy', tokens: [
    { hr: 'Kako se', pl: 'Jak' },
    { hr: 'zoveš?', pl: 'masz na imię?', blank: true }
  ]},
  { id: 107, category: 'podstawy', tokens: [
    { hr: 'Odakle', pl: 'Skąd', blank: true },
    { hr: 'si?', pl: 'jesteś?' }
  ]},
  { id: 108, category: 'podstawy', tokens: [
    { hr: 'Ne govorim', pl: 'Nie mówię', blank: true },
    { hr: 'dobro hrvatski.', pl: 'dobrze po chorwacku.' }
  ]},
  { id: 109, category: 'podstawy', tokens: [
    { hr: 'Možete li', pl: 'Czy może pan/pani' },
    { hr: 'govoriti', pl: 'mówić', blank: true },
    { hr: 'sporije?', pl: 'wolniej?' }
  ]},
  { id: 110, category: 'podstawy', tokens: [
    { hr: 'Kako se to', pl: 'Jak to się' },
    { hr: 'kaže', pl: 'mówi', blank: true },
    { hr: 'na hrvatskom?', pl: 'po chorwacku?' }
  ]},

  // --- Restauracja (2) ---
  { id: 111, category: 'restauracja', tokens: [
    { hr: 'Što', pl: 'Co', blank: true },
    { hr: 'preporučujete?', pl: 'pan/pani poleca?' }
  ]},
  { id: 112, category: 'restauracja', tokens: [
    { hr: 'Imate li', pl: 'Czy macie' },
    { hr: 'slobodan', pl: 'wolny', blank: true },
    { hr: 'stol?', pl: 'stolik?' }
  ]},
  { id: 113, category: 'restauracja', tokens: [
    { hr: 'Za mene', pl: 'Dla mnie' },
    { hr: 'salatu', pl: 'sałatkę', blank: true },
    { hr: ',', pl: ',', punct: true },
    { hr: 'molim.', pl: 'proszę.' }
  ]},
  { id: 114, category: 'restauracja', tokens: [
    { hr: 'Bez', pl: 'Bez', blank: true },
    { hr: 'luka', pl: 'cebuli' },
    { hr: ',', pl: ',', punct: true },
    { hr: 'molim.', pl: 'proszę.' }
  ]},
  { id: 115, category: 'restauracja', tokens: [
    { hr: 'Možemo li dobiti', pl: 'Czy możemy prosić o', blank: true },
    { hr: 'račun?', pl: 'rachunek?' }
  ]},

  // --- Zakupy (2) ---
  { id: 116, category: 'zakupy', tokens: [
    { hr: 'Koliko', pl: 'Ile', blank: true },
    { hr: 'ovo košta?', pl: 'to kosztuje?' }
  ]},
  { id: 117, category: 'zakupy', tokens: [
    { hr: 'Imate li ovo', pl: 'Czy macie to' },
    { hr: 'u većoj', pl: 'w większym', blank: true },
    { hr: 'veličini?', pl: 'rozmiarze?' }
  ]},
  { id: 118, category: 'zakupy', tokens: [
    { hr: 'Mogu li ovo', pl: 'Czy mogę to' },
    { hr: 'probati?', pl: 'przymierzyć?', blank: true }
  ]},
  { id: 119, category: 'zakupy', tokens: [
    { hr: 'Samo', pl: 'Tylko', blank: true },
    { hr: 'gledam', pl: 'oglądam' },
    { hr: ',', pl: ',', punct: true },
    { hr: 'hvala.', pl: 'dziękuję.' }
  ]},
  { id: 120, category: 'zakupy', tokens: [
    { hr: 'Gdje je', pl: 'Gdzie jest' },
    { hr: 'blagajna?', pl: 'kasa?', blank: true }
  ]},

  // --- Czas (2) ---
  { id: 121, category: 'czas', tokens: [
    { hr: 'Vidimo se', pl: 'Widzimy się' },
    { hr: 'u šest', pl: 'o szóstej', blank: true },
    { hr: 'sati.', pl: '.' }
  ]},
  { id: 122, category: 'czas', tokens: [
    { hr: 'Kasnim', pl: 'Spóźnię się', blank: true },
    { hr: 'deset minuta.', pl: 'dziesięć minut.' }
  ]},
  { id: 123, category: 'czas', tokens: [
    { hr: 'Nemam', pl: 'Nie mam', blank: true },
    { hr: 'vremena danas.', pl: 'dzisiaj czasu.' }
  ]},
  { id: 124, category: 'czas', tokens: [
    { hr: 'Koliko dugo', pl: 'Jak długo' },
    { hr: 'ćeš ostati?', pl: 'zostaniesz?', blank: true }
  ]},
  { id: 125, category: 'czas', tokens: [
    { hr: 'Vidimo se', pl: 'Widzimy się' },
    { hr: 'sljedeći tjedan.', pl: 'w przyszłym tygodniu.', blank: true }
  ]},

  // --- Rodzina (2) ---
  { id: 126, category: 'rodzina', tokens: [
    { hr: 'Imam', pl: 'Mam' },
    { hr: 'mlađeg', pl: 'młodszego', blank: true },
    { hr: 'brata.', pl: 'brata.' }
  ]},
  { id: 127, category: 'rodzina', tokens: [
    { hr: 'Moja sestra', pl: 'Moja siostra' },
    { hr: 'živi', pl: 'mieszka', blank: true },
    { hr: 'u Splitu.', pl: 'w Splicie.' }
  ]},
  { id: 128, category: 'rodzina', tokens: [
    { hr: 'Moji roditelji', pl: 'Moi rodzice' },
    { hr: 'dolaze', pl: 'przyjeżdżają', blank: true },
    { hr: 'sutra.', pl: 'jutro.' }
  ]},
  { id: 129, category: 'rodzina', tokens: [
    { hr: 'Imam', pl: 'Mam' },
    { hr: 'veliku', pl: 'dużą', blank: true },
    { hr: 'obitelj.', pl: 'rodzinę.' }
  ]},
  { id: 130, category: 'rodzina', tokens: [
    { hr: 'Moja baka', pl: 'Moja babcia' },
    { hr: 'živi', pl: 'mieszka', blank: true },
    { hr: 'blizu nas.', pl: 'blisko nas.' }
  ]},

  // --- Uczucia (2) ---
  { id: 131, category: 'uczucia', tokens: [
    { hr: 'Sretan sam', pl: 'Cieszę się', blank: true },
    { hr: 'što si ovdje.', pl: 'że tu jesteś.' }
  ]},
  { id: 132, category: 'uczucia', tokens: [
    { hr: 'Ne osjećam se', pl: 'Nie czuję się' },
    { hr: 'baš dobro.', pl: 'najlepiej.', blank: true }
  ]},
  { id: 133, category: 'uczucia', tokens: [
    { hr: 'Jako sam', pl: 'Jestem bardzo', blank: true },
    { hr: 'umoran danas.', pl: 'zmęczony dzisiaj.' }
  ]},
  { id: 134, category: 'uczucia', tokens: [
    { hr: 'Drago mi je', pl: 'Cieszę się', blank: true },
    { hr: 'zbog tebe.', pl: 'z twojego powodu.' }
  ]},
  { id: 135, category: 'uczucia', tokens: [
    { hr: 'Nemoj se', pl: 'Nie', blank: true },
    { hr: 'ljutiti.', pl: 'złość się.' }
  ]},

  // --- Pogoda (2) ---
  { id: 136, category: 'pogoda', tokens: [
    { hr: 'Danas je', pl: 'Dzisiaj jest' },
    { hr: 'lijepo', pl: 'ładna', blank: true },
    { hr: 'vrijeme.', pl: 'pogoda.' }
  ]},
  { id: 137, category: 'pogoda', tokens: [
    { hr: 'Pada', pl: 'Pada', blank: true },
    { hr: 'jaka kiša.', pl: 'ulewny deszcz.' }
  ]},
  { id: 138, category: 'pogoda', tokens: [
    { hr: 'Danas je', pl: 'Dzisiaj jest' },
    { hr: 'dosta', pl: 'dość', blank: true },
    { hr: 'hladno.', pl: 'zimno.' }
  ]},
  { id: 139, category: 'pogoda', tokens: [
    { hr: 'Nadam se', pl: 'Mam nadzieję', blank: true },
    { hr: 'da će sutra biti', pl: 'że jutro będzie' },
    { hr: 'sunčano.', pl: 'słonecznie.' }
  ]},
  { id: 140, category: 'pogoda', tokens: [
    { hr: 'Puše', pl: 'Wieje', blank: true },
    { hr: 'jak vjetar.', pl: 'silny wiatr.' }
  ]},

  // --- Podróże (2) ---
  { id: 141, category: 'podroze', tokens: [
    { hr: 'Gdje mogu', pl: 'Gdzie mogę' },
    { hr: 'kupiti', pl: 'kupić', blank: true },
    { hr: 'kartu?', pl: 'bilet?' }
  ]},
  { id: 142, category: 'podroze', tokens: [
    { hr: 'Koliko traje', pl: 'Jak długo trwa', blank: true },
    { hr: 'put do Splita?', pl: 'podróż do Splitu?' }
  ]},
  { id: 143, category: 'podroze', tokens: [
    { hr: 'Želim', pl: 'Chcę', blank: true },
    { hr: 'posjetiti Dubrovnik.', pl: 'odwiedzić Dubrownik.' }
  ]},
  { id: 144, category: 'podroze', tokens: [
    { hr: 'Gdje je', pl: 'Gdzie jest' },
    { hr: 'najbliža', pl: 'najbliższy', blank: true },
    { hr: 'autobusna stanica?', pl: 'przystanek autobusowy?' }
  ]},
  { id: 145, category: 'podroze', tokens: [
    { hr: 'Koliko je', pl: 'Jak' },
    { hr: 'udaljeno', pl: 'daleko', blank: true },
    { hr: 'odavde?', pl: 'jest stąd?' }
  ]},

  // --- Praca (2) ---
  { id: 146, category: 'praca', tokens: [
    { hr: 'Danas radim', pl: 'Dzisiaj pracuję', blank: true },
    { hr: 'od kuće.', pl: 'z domu.' }
  ]},
  { id: 147, category: 'praca', tokens: [
    { hr: 'Moram', pl: 'Muszę' },
    { hr: 'završiti', pl: 'skończyć', blank: true },
    { hr: 'ovaj posao danas.', pl: 'tę pracę dzisiaj.' }
  ]},
  { id: 148, category: 'praca', tokens: [
    { hr: 'Imamo', pl: 'Mamy', blank: true },
    { hr: 'sastanak u deset.', pl: 'spotkanie o dziesiątej.' }
  ]},
  { id: 149, category: 'praca', tokens: [
    { hr: 'Radim ovdje', pl: 'Pracuję tutaj' },
    { hr: 'već tri', pl: 'od trzech', blank: true },
    { hr: 'godine.', pl: 'lat.' }
  ]},
  { id: 150, category: 'praca', tokens: [
    { hr: 'Možemo', pl: 'Możemy' },
    { hr: 'razgovarati', pl: 'porozmawiać', blank: true },
    { hr: 'o tome sutra.', pl: 'o tym jutro.' }
  ]},

  // --- Dom (2) ---
  { id: 151, category: 'dom', tokens: [
    { hr: 'Gdje su', pl: 'Gdzie są' },
    { hr: 'ključevi?', pl: 'klucze?', blank: true }
  ]},
  { id: 152, category: 'dom', tokens: [
    { hr: 'Moram', pl: 'Muszę' },
    { hr: 'pospremiti', pl: 'posprzątać', blank: true },
    { hr: 'stan.', pl: 'mieszkanie.' }
  ]},
  { id: 153, category: 'dom', tokens: [
    { hr: 'Kuhinja je', pl: 'Kuchnia jest' },
    { hr: 'odmah desno.', pl: 'od razu po prawej.', blank: true }
  ]},
  { id: 154, category: 'dom', tokens: [
    { hr: 'Gdje je', pl: 'Gdzie jest' },
    { hr: 'kupaonica?', pl: 'łazienka?', blank: true }
  ]},
  { id: 155, category: 'dom', tokens: [
    { hr: 'Moram', pl: 'Muszę' },
    { hr: 'oprati', pl: 'umyć', blank: true },
    { hr: 'suđe.', pl: 'naczynia.' }
  ]},
  { id: 156, category: 'dom', tokens: [
    { hr: 'Možeš li', pl: 'Możesz' },
    { hr: 'zatvoriti', pl: 'zamknąć', blank: true },
    { hr: 'prozor?', pl: 'okno?' }
  ]},
  { id: 157, category: 'dom', tokens: [
    { hr: 'U stanu je', pl: 'W mieszkaniu jest' },
    { hr: 'previše', pl: 'za', blank: true },
    { hr: 'hladno.', pl: 'zimno.' }
  ]},
  { id: 158, category: 'dom', tokens: [
    { hr: 'Gdje mogu', pl: 'Gdzie mogę' },
    { hr: 'ostaviti', pl: 'zostawić', blank: true },
    { hr: 'cipele?', pl: 'buty?' }
  ]},
  { id: 159, category: 'dom', tokens: [
    { hr: 'Moramo', pl: 'Musimy' },
    { hr: 'kupiti', pl: 'kupić', blank: true },
    { hr: 'novi stol.', pl: 'nowy stół.' }
  ]},
  { id: 160, category: 'dom', tokens: [
    { hr: 'Idem', pl: 'Idę' },
    { hr: 'rano', pl: 'wcześnie', blank: true },
    { hr: 'spavati.', pl: 'spać.' }
  ]},

  // --- Jedzenie (2) ---
  { id: 161, category: 'jedzenie', tokens: [
    { hr: 'Što ćemo', pl: 'Co' },
    { hr: 'danas', pl: 'dzisiaj', blank: true },
    { hr: 'kuhati?', pl: 'ugotujemy?' }
  ]},
  { id: 162, category: 'jedzenie', tokens: [
    { hr: 'Stvarno sam', pl: 'Naprawdę jestem' },
    { hr: 'gladan.', pl: 'głodny.', blank: true }
  ]},
  { id: 163, category: 'jedzenie', tokens: [
    { hr: 'Ovo je jako', pl: 'To jest bardzo' },
    { hr: 'ukusno.', pl: 'smaczne.', blank: true }
  ]},
  { id: 164, category: 'jedzenie', tokens: [
    { hr: 'Hoćeš li još', pl: 'Chcesz jeszcze' },
    { hr: 'malo?', pl: 'trochę?', blank: true }
  ]},
  { id: 165, category: 'jedzenie', tokens: [
    { hr: 'Ne volim', pl: 'Nie lubię', blank: true },
    { hr: 'previše slatku hranu.', pl: 'zbyt słodkiego jedzenia.' }
  ]},
  { id: 166, category: 'jedzenie', tokens: [
    { hr: 'Možeš li mi', pl: 'Możesz mi' },
    { hr: 'dodati', pl: 'podać', blank: true },
    { hr: 'sol?', pl: 'sól?' }
  ]},
  { id: 167, category: 'jedzenie', tokens: [
    { hr: 'Imamo li', pl: 'Czy mamy' },
    { hr: 'dovoljno', pl: 'wystarczająco dużo', blank: true },
    { hr: 'kruha?', pl: 'chleba?' }
  ]},
  { id: 168, category: 'jedzenie', tokens: [
    { hr: 'Ovo meso je još', pl: 'To mięso jest jeszcze' },
    { hr: 'sirovo.', pl: 'surowe.', blank: true }
  ]},
  { id: 169, category: 'jedzenie', tokens: [
    { hr: 'Već sam', pl: 'Już' },
    { hr: 'doručkovao.', pl: 'jadłem śniadanie.', blank: true }
  ]},
  { id: 170, category: 'jedzenie', tokens: [
    { hr: 'Jesi li već', pl: 'Jadłeś już' },
    { hr: 'ručao?', pl: 'obiad?', blank: true }
  ]},

  // --- Piće (2) ---
  { id: 171, category: 'pice', tokens: [
    { hr: 'Mogu li dobiti', pl: 'Czy mogę prosić o' },
    { hr: 'čašu', pl: 'szklankę', blank: true },
    { hr: 'vode?', pl: 'wody?' }
  ]},
  { id: 172, category: 'pice', tokens: [
    { hr: 'Želiš li nešto', pl: 'Chcesz się czegoś' },
    { hr: 'popiti?', pl: 'napić?', blank: true }
  ]},
  { id: 173, category: 'pice', tokens: [
    { hr: 'Ja bih', pl: 'Poproszę' },
    { hr: 'jednu', pl: 'jedną', blank: true },
    { hr: 'kavu.', pl: 'kawę.' }
  ]},
  { id: 174, category: 'pice', tokens: [
    { hr: 'Bez', pl: 'Bez' },
    { hr: 'šećera', pl: 'cukru', blank: true },
    { hr: ',', pl: ',', punct: true },
    { hr: 'molim.', pl: 'proszę.' }
  ]},
  { id: 175, category: 'pice', tokens: [
    { hr: 'Može još', pl: 'Może jeszcze' },
    { hr: 'jedna', pl: 'jedna', blank: true },
    { hr: 'čaša?', pl: 'szklanka?' }
  ]},
  { id: 176, category: 'pice', tokens: [
    { hr: 'Radije bih', pl: 'Wolałbym', blank: true },
    { hr: 'čaj.', pl: 'herbatę.' }
  ]},
  { id: 177, category: 'pice', tokens: [
    { hr: 'Je li ovo', pl: 'Czy to jest' },
    { hr: 'mineralna', pl: 'mineralna', blank: true },
    { hr: 'voda?', pl: 'woda?' }
  ]},
  { id: 178, category: 'pice', tokens: [
    { hr: 'Popio sam samo', pl: 'Wypiłem tylko' },
    { hr: 'jednu', pl: 'jedną', blank: true },
    { hr: 'čašu.', pl: 'szklankę.' }
  ]},
  { id: 179, category: 'pice', tokens: [
    { hr: 'Donesi mi', pl: 'Przynieś mi', blank: true },
    { hr: 'malo vode', pl: 'trochę wody' },
    { hr: ',', pl: ',', punct: true },
    { hr: 'molim te.', pl: 'proszę.' }
  ]},
  { id: 180, category: 'pice', tokens: [
    { hr: 'Hoćeš', pl: 'Chcesz' },
    { hr: 'kavu', pl: 'kawę', blank: true },
    { hr: 'ili čaj?', pl: 'czy herbatę?' }
  ]},

  // --- Zdrowie (2) ---
  { id: 181, category: 'zdrowie', tokens: [
    { hr: 'Od jučer se', pl: 'Od wczoraj' },
    { hr: 'ne osjećam se', pl: 'nie czuję się', blank: true },
    { hr: 'dobro.', pl: 'dobrze.' }
  ]},
  { id: 182, category: 'zdrowie', tokens: [
    { hr: 'Boli me', pl: 'Boli mnie' },
    { hr: 'grlo.', pl: 'gardło.', blank: true }
  ]},
  { id: 183, category: 'zdrowie', tokens: [
    { hr: 'Imam', pl: 'Mam', blank: true },
    { hr: 'temperaturu.', pl: 'gorączkę.' }
  ]},
  { id: 184, category: 'zdrowie', tokens: [
    { hr: 'Moram', pl: 'Muszę' },
    { hr: 'otići', pl: 'iść', blank: true },
    { hr: 'liječniku.', pl: 'do lekarza.' }
  ]},
  { id: 185, category: 'zdrowie', tokens: [
    { hr: 'Imate li nešto', pl: 'Czy mają państwo coś' },
    { hr: 'protiv bolova?', pl: 'przeciwbólowego?', blank: true }
  ]},
  { id: 186, category: 'zdrowie', tokens: [
    { hr: 'Koliko puta dnevno', pl: 'Ile razy dziennie' },
    { hr: 'trebam uzeti', pl: 'mam przyjmować', blank: true },
    { hr: 'lijek?', pl: 'lek?' }
  ]},
  { id: 187, category: 'zdrowie', tokens: [
    { hr: 'Alergičan sam', pl: 'Mam alergię', blank: true },
    { hr: 'na penicilin.', pl: 'na penicylinę.' }
  ]},
  { id: 188, category: 'zdrowie', tokens: [
    { hr: 'Odavno me', pl: 'Od dawna' },
    { hr: 'boli', pl: 'bolą mnie', blank: true },
    { hr: 'leđa.', pl: 'plecy.' }
  ]},
  { id: 189, category: 'zdrowie', tokens: [
    { hr: 'Trebam se malo', pl: 'Muszę trochę' },
    { hr: 'odmoriti.', pl: 'odpocząć.', blank: true }
  ]},
  { id: 190, category: 'zdrowie', tokens: [
    { hr: 'Sad se osjećam', pl: 'Teraz czuję się' },
    { hr: 'puno bolje.', pl: 'o wiele lepiej.', blank: true }
  ]},

  // --- Transport (2) ---
  { id: 191, category: 'transport', tokens: [
    { hr: 'Kada', pl: 'Kiedy', blank: true },
    { hr: 'polazi sljedeći autobus?', pl: 'odjeżdża następny autobus?' }
  ]},
  { id: 192, category: 'transport', tokens: [
    { hr: 'Gdje mogu', pl: 'Gdzie mogę' },
    { hr: 'kupiti', pl: 'kupić', blank: true },
    { hr: 'kartu za autobus?', pl: 'bilet autobusowy?' }
  ]},
  { id: 193, category: 'transport', tokens: [
    { hr: 'Je li ovaj autobus', pl: 'Czy ten autobus' },
    { hr: 'ide', pl: 'jedzie', blank: true },
    { hr: 'u centar?', pl: 'do centrum?' }
  ]},
  { id: 194, category: 'transport', tokens: [
    { hr: 'Gdje trebam', pl: 'Gdzie muszę' },
    { hr: 'izaći?', pl: 'wysiąść?', blank: true }
  ]},
  { id: 195, category: 'transport', tokens: [
    { hr: 'Ovaj vlak', pl: 'Ten pociąg' },
    { hr: 'kasni', pl: 'ma', blank: true },
    { hr: 'dvadeset minuta.', pl: 'dwadzieścia minut opóźnienia.' }
  ]},
  { id: 196, category: 'transport', tokens: [
    { hr: 'Je li ovo mjesto', pl: 'Czy to miejsce jest' },
    { hr: 'slobodno?', pl: 'wolne?', blank: true }
  ]},
  { id: 197, category: 'transport', tokens: [
    { hr: 'Koliko traje', pl: 'Ile trwa', blank: true },
    { hr: 'vožnja do centra?', pl: 'przejazd do centrum?' }
  ]},
  { id: 198, category: 'transport', tokens: [
    { hr: 'Možete li me', pl: 'Czy może mnie pan/pani' },
    { hr: 'ostaviti', pl: 'wysadzić', blank: true },
    { hr: 'ovdje?', pl: 'tutaj?' }
  ]},
  { id: 199, category: 'transport', tokens: [
    { hr: 'Trebam', pl: 'Potrzebuję', blank: true },
    { hr: 'taksi do zračne luke.', pl: 'taksówki na lotnisko.' }
  ]},
  { id: 200, category: 'transport', tokens: [
    { hr: 'Koliko košta', pl: 'Ile kosztuje', blank: true },
    { hr: 'vožnja do hotela?', pl: 'przejazd do hotelu?' }
  ]},

  // --- Hotel (2) ---
  { id: 201, category: 'hotel', tokens: [
    { hr: 'Imam', pl: 'Mam' },
    { hr: 'rezervaciju', pl: 'rezerwację', blank: true },
    { hr: 'na svoje ime.', pl: 'na swoje nazwisko.' }
  ]},
  { id: 202, category: 'hotel', tokens: [
    { hr: 'U koliko sati je', pl: 'O której jest' },
    { hr: 'doručak?', pl: 'śniadanie?', blank: true }
  ]},
  { id: 203, category: 'hotel', tokens: [
    { hr: 'Kada se moramo', pl: 'Kiedy musimy się' },
    { hr: 'odjaviti', pl: 'wymeldować', blank: true },
    { hr: 'iz sobe?', pl: 'z pokoju?' }
  ]},
  { id: 204, category: 'hotel', tokens: [
    { hr: 'Možemo li', pl: 'Czy możemy' },
    { hr: 'ostaviti', pl: 'zostawić', blank: true },
    { hr: 'prtljagu ovdje?', pl: 'tutaj bagaż?' }
  ]},
  { id: 205, category: 'hotel', tokens: [
    { hr: 'Imate li', pl: 'Czy mają państwo' },
    { hr: 'slobodnu sobu', pl: 'wolny pokój', blank: true },
    { hr: 'za jednu noć?', pl: 'na jedną noc?' }
  ]},
  { id: 206, category: 'hotel', tokens: [
    { hr: 'Ključ od sobe', pl: 'Klucz do pokoju' },
    { hr: 'ne radi.', pl: 'nie działa.', blank: true }
  ]},
  { id: 207, category: 'hotel', tokens: [
    { hr: 'U sobi nema', pl: 'W pokoju nie ma', blank: true },
    { hr: 'tople vode.', pl: 'ciepłej wody.' }
  ]},
  { id: 208, category: 'hotel', tokens: [
    { hr: 'Možemo li dobiti', pl: 'Czy możemy prosić o' },
    { hr: 'još jedan', pl: 'jeszcze jeden', blank: true },
    { hr: 'ručnik?', pl: 'ręcznik?' }
  ]},
  { id: 209, category: 'hotel', tokens: [
    { hr: 'Je li Wi-Fi', pl: 'Czy Wi-Fi jest' },
    { hr: 'besplatan?', pl: 'bezpłatne?', blank: true }
  ]},
  { id: 210, category: 'hotel', tokens: [
    { hr: 'Soba nam je jako', pl: 'Nasz pokój jest bardzo' },
    { hr: 'bučna.', pl: 'głośny.', blank: true }
  ]},

  // --- Telefon i komunikacja (2) ---
  { id: 211, category: 'telefon', tokens: [
    { hr: 'Nazvat ću te', pl: 'Zadzwonię do ciebie', blank: true },
    { hr: 'kasnije.', pl: 'później.' }
  ]},
  { id: 212, category: 'telefon', tokens: [
    { hr: 'Možeš li mi', pl: 'Możesz mi' },
    { hr: 'poslati', pl: 'wysłać', blank: true },
    { hr: 'poruku?', pl: 'wiadomość?' }
  ]},
  { id: 213, category: 'telefon', tokens: [
    { hr: 'Ne čujem', pl: 'Słabo', blank: true },
    { hr: 'te dobro.', pl: 'cię słyszę.' }
  ]},
  { id: 214, category: 'telefon', tokens: [
    { hr: 'Veza je jako', pl: 'Połączenie jest bardzo' },
    { hr: 'loša.', pl: 'słabe.', blank: true }
  ]},
  { id: 215, category: 'telefon', tokens: [
    { hr: 'Javi mi', pl: 'Daj mi znać', blank: true },
    { hr: 'kad stigneš.', pl: 'kiedy dotrzesz.' }
  ]},
  { id: 216, category: 'telefon', tokens: [
    { hr: 'Mobitel mi je skoro', pl: 'Mój telefon jest prawie' },
    { hr: 'prazan.', pl: 'rozładowany.', blank: true }
  ]},
  { id: 217, category: 'telefon', tokens: [
    { hr: 'Imaš li', pl: 'Masz' },
    { hr: 'punjač?', pl: 'ładowarkę?', blank: true }
  ]},
  { id: 218, category: 'telefon', tokens: [
    { hr: 'Pošalji mi', pl: 'Wyślij mi', blank: true },
    { hr: 'adresu porukom.', pl: 'adres w wiadomości.' }
  ]},
  { id: 219, category: 'telefon', tokens: [
    { hr: 'Možeš li me', pl: 'Możesz do mnie' },
    { hr: 'nazvati', pl: 'zadzwonić', blank: true },
    { hr: 'za deset minuta?', pl: 'za dziesięć minut?' }
  ]},
  { id: 220, category: 'telefon', tokens: [
    { hr: 'Čujemo se', pl: 'Usłyszymy się', blank: true },
    { hr: 'sutra.', pl: 'jutro.' }
  ]},

  // --- Wolny czas (2) ---
  { id: 221, category: 'slobodno_vrijeme', tokens: [
    { hr: 'Što radiš', pl: 'Co robisz', blank: true },
    { hr: 'za vikend?', pl: 'w weekend?' }
  ]},
  { id: 222, category: 'slobodno_vrijeme', tokens: [
    { hr: 'Idemo večeras', pl: 'Idziemy dziś wieczorem' },
    { hr: 'u kino.', pl: 'do kina.', blank: true }
  ]},
  { id: 223, category: 'slobodno_vrijeme', tokens: [
    { hr: 'Voliš li', pl: 'Lubisz' },
    { hr: 'gledati', pl: 'oglądać', blank: true },
    { hr: 'filmove?', pl: 'filmy?' }
  ]},
  { id: 224, category: 'slobodno_vrijeme', tokens: [
    { hr: 'Danas bih radije', pl: 'Dzisiaj wolałbym', blank: true },
    { hr: 'ostao kod kuće.', pl: 'zostać w domu.' }
  ]},
  { id: 225, category: 'slobodno_vrijeme', tokens: [
    { hr: 'Hoćemo li', pl: 'Może pójdziemy' },
    { hr: 'prošetati?', pl: 'na spacer?', blank: true }
  ]},
  { id: 226, category: 'slobodno_vrijeme', tokens: [
    { hr: 'Volim', pl: 'Lubię', blank: true },
    { hr: 'provoditi vrijeme', pl: 'spędzać czas' },
    { hr: 'na otvorenom.', pl: 'na świeżym powietrzu.' }
  ]},
  { id: 227, category: 'slobodno_vrijeme', tokens: [
    { hr: 'Jučer sam', pl: 'Wczoraj' },
    { hr: 'gledao', pl: 'oglądałem', blank: true },
    { hr: 'dobar film.', pl: 'dobry film.' }
  ]},
  { id: 228, category: 'slobodno_vrijeme', tokens: [
    { hr: 'Idemo na kavu', pl: 'Idziemy na kawę' },
    { hr: 'poslije posla.', pl: 'po pracy.', blank: true }
  ]},
  { id: 229, category: 'slobodno_vrijeme', tokens: [
    { hr: 'Vikendom često', pl: 'W weekendy często', blank: true },
    { hr: 'idem u šetnju.', pl: 'chodzę na spacery.' }
  ]},
  { id: 230, category: 'slobodno_vrijeme', tokens: [
    { hr: 'Danas nemam', pl: 'Dzisiaj nie mam', blank: true },
    { hr: 'nikakvih planova.', pl: 'żadnych planów.' }
  ]},

  // --- Miasto i kierunki (2) ---
  { id: 231, category: 'miasto', tokens: [
    { hr: 'Kako mogu', pl: 'Jak mogę' },
    { hr: 'doći', pl: 'dostać się', blank: true },
    { hr: 'do centra?', pl: 'do centrum?' }
  ]},
  { id: 232, category: 'miasto', tokens: [
    { hr: 'Gdje je', pl: 'Gdzie jest' },
    { hr: 'najbliži', pl: 'najbliższy', blank: true },
    { hr: 'supermarket?', pl: 'supermarket?' }
  ]},
  { id: 233, category: 'miasto', tokens: [
    { hr: 'Je li banka', pl: 'Czy bank jest' },
    { hr: 'blizu?', pl: 'blisko?', blank: true }
  ]},
  { id: 234, category: 'miasto', tokens: [
    { hr: 'Idite', pl: 'Proszę iść', blank: true },
    { hr: 'ravno', pl: 'prosto' },
    { hr: 'pa skrenite', pl: 'a potem skręcić' },
    { hr: 'desno.', pl: 'w prawo.' }
  ]},
  { id: 235, category: 'miasto', tokens: [
    { hr: 'Trg je odmah', pl: 'Plac jest zaraz' },
    { hr: 'iza ugla.', pl: 'za rogiem.', blank: true }
  ]},
  { id: 236, category: 'miasto', tokens: [
    { hr: 'Koliko ima', pl: 'Jak daleko jest', blank: true },
    { hr: 'do glavnog trga?', pl: 'do głównego placu?' }
  ]},
  { id: 237, category: 'miasto', tokens: [
    { hr: 'Možete li mi', pl: 'Czy może mi pan/pani' },
    { hr: 'pokazati', pl: 'pokazać', blank: true },
    { hr: 'na karti?', pl: 'na mapie?' }
  ]},
  { id: 238, category: 'miasto', tokens: [
    { hr: 'Ovdje negdje bi trebala biti', pl: 'Gdzieś tutaj powinna być' },
    { hr: 'pošta.', pl: 'poczta.', blank: true }
  ]},
  { id: 239, category: 'miasto', tokens: [
    { hr: 'Koliko je udaljena', pl: 'Jak daleko jest', blank: true },
    { hr: 'plaža?', pl: 'plaża?' }
  ]},
  { id: 240, category: 'miasto', tokens: [
    { hr: 'Ne mogu', pl: 'Nie mogę' },
    { hr: 'pronaći', pl: 'znaleźć', blank: true },
    { hr: 'ovu ulicu.', pl: 'tej ulicy.' }
  ]},

  // --- Problemy i sytuacje codzienne (2) ---
  { id: 241, category: 'problemy', tokens: [
    { hr: 'Ne radi mi', pl: 'Nie działa mi', blank: true },
    { hr: 'internet.', pl: 'internet.' }
  ]},
  { id: 242, category: 'problemy', tokens: [
    { hr: 'Ne znam', pl: 'Nie wiem', blank: true },
    { hr: 'što se dogodilo.', pl: 'co się stało.' }
  ]},
  { id: 243, category: 'problemy', tokens: [
    { hr: 'Možeš li mi', pl: 'Możesz mi' },
    { hr: 'pomoći', pl: 'pomóc', blank: true },
    { hr: 's ovim?', pl: 'z tym?' }
  ]},
  { id: 244, category: 'problemy', tokens: [
    { hr: 'Mislim', pl: 'Myślę', blank: true },
    { hr: 'da je ovo pogrešno.', pl: 'że to jest nieprawidłowe.' }
  ]},
  { id: 245, category: 'problemy', tokens: [
    { hr: 'Ne mogu', pl: 'Nie mogę' },
    { hr: 'pronaći', pl: 'znaleźć', blank: true },
    { hr: 'svoje ključeve.', pl: 'swoich kluczy.' }
  ]},
  { id: 246, category: 'problemy', tokens: [
    { hr: 'Zaboravio sam', pl: 'Zapomniałem', blank: true },
    { hr: 'novčanik kod kuće.', pl: 'portfela w domu.' }
  ]},
  { id: 247, category: 'problemy', tokens: [
    { hr: 'Čekam već', pl: 'Czekam już' },
    { hr: 'pola sata.', pl: 'pół godziny.', blank: true }
  ]},
  { id: 248, category: 'problemy', tokens: [
    { hr: 'Ne mogu se', pl: 'Nie mogę sobie' },
    { hr: 'sjetiti', pl: 'przypomnieć', blank: true },
    { hr: 'njegovog imena.', pl: 'jego imienia.' }
  ]},
  { id: 249, category: 'problemy', tokens: [
    { hr: 'Nema', pl: 'Nie ma', blank: true },
    { hr: 'dovoljno mjesta.', pl: 'wystarczająco dużo miejsca.' }
  ]},
  { id: 250, category: 'problemy', tokens: [
    { hr: 'Sve će biti', pl: 'Wszystko będzie', blank: true },
    { hr: 'u redu.', pl: 'dobrze.' }
  ]}
]