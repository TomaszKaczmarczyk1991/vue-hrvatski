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
      { hr: 'drago mi je', pl: 'miło mi je' },
      { hr: 'što smo se upoznali.', pl: 'że się poznaliśmy.', blank: true }
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
      { hr: 'odmoru.', pl: 'na urlop.' }
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
      { hr: 'je', pl: 'jest' },
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
      { hr: 'Sutra će puhati', pl: 'Jutro będzie wiał' },
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
      { hr: 'šarmantan.', pl: 'urokliwy.', blank: true }
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
      { hr: 'Blizu je', pl: 'Jest blisko', blank: true },
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
      { hr: 'Izgubio sam se.', pl: 'Zgubiłem się.', blank: true }
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
      { hr: 'Ne', pl: 'Nie', blank: true },
      { hr: 'brini.', pl: 'martw się.', blank: true }
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
  },
  {
    id: 101,
    category: 'powitania',
    tokens: [
      { hr: 'Kako si danas?', pl: 'Jak się dzisiaj masz?', blank: true }
    ]
  },
  {
    id: 102,
    category: 'powitania',
    tokens: [
      { hr: 'Vidimo se večeras.', pl: 'Do zobaczenia wieczorem.', blank: true }
    ]
  },
  {
    id: 103,
    category: 'powitania',
    tokens: [
      { hr: 'Drago mi je da si došao.', pl: 'Cieszę się, że przyszedłeś.', blank: true }
    ]
  },
  {
    id: 104,
    category: 'powitania',
    tokens: [
      { hr: 'Čujemo se kasnije.', pl: 'Usłyszymy się później.', blank: true }
    ]
  },
  {
    id: 105,
    category: 'powitania',
    tokens: [
      { hr: 'Ugodan dan!', pl: 'Miłego dnia!', blank: true }
    ]
  },

  // --- Podstawy ---
  {
    id: 106,
    category: 'podstawy',
    tokens: [
      { hr: 'Kako se zoveš?', pl: 'Jak masz na imię?', blank: true }
    ]
  },
  {
    id: 107,
    category: 'podstawy',
    tokens: [
      { hr: 'Odakle si?', pl: 'Skąd jesteś?', blank: true }
    ]
  },
  {
    id: 108,
    category: 'podstawy',
    tokens: [
      { hr: 'Ne govorim dobro hrvatski.', pl: 'Nie mówię dobrze po chorwacku.', blank: true }
    ]
  },
  {
    id: 109,
    category: 'podstawy',
    tokens: [
      { hr: 'Možete li govoriti sporije?', pl: 'Czy może pan/pani mówić wolniej?', blank: true }
    ]
  },
  {
    id: 110,
    category: 'podstawy',
    tokens: [
      { hr: 'Kako se to kaže na hrvatskom?', pl: 'Jak to się mówi po chorwacku?', blank: true }
    ]
  },

  // --- Restauracja ---
  {
    id: 111,
    category: 'restauracja',
    tokens: [
      { hr: 'Što preporučujete?', pl: 'Co pan/pani poleca?', blank: true }
    ]
  },
  {
    id: 112,
    category: 'restauracja',
    tokens: [
      { hr: 'Imate li slobodan stol?', pl: 'Czy macie wolny stolik?', blank: true }
    ]
  },
  {
    id: 113,
    category: 'restauracja',
    tokens: [
      { hr: 'Za mene salatu, molim.', pl: 'Dla mnie sałatkę, proszę.', blank: true }
    ]
  },
  {
    id: 114,
    category: 'restauracja',
    tokens: [
      { hr: 'Bez luka, molim.', pl: 'Bez cebuli, proszę.', blank: true }
    ]
  },
  {
    id: 115,
    category: 'restauracja',
    tokens: [
      { hr: 'Možemo li dobiti račun?', pl: 'Czy możemy prosić o rachunek?', blank: true }
    ]
  },

  // --- Zakupy ---
  {
    id: 116,
    category: 'zakupy',
    tokens: [
      { hr: 'Koliko ovo košta?', pl: 'Ile to kosztuje?', blank: true }
    ]
  },
  {
    id: 117,
    category: 'zakupy',
    tokens: [
      { hr: 'Imate li ovo u većoj veličini?', pl: 'Czy macie to w większym rozmiarze?', blank: true }
    ]
  },
  {
    id: 118,
    category: 'zakupy',
    tokens: [
      { hr: 'Mogu li ovo probati?', pl: 'Czy mogę to przymierzyć?', blank: true }
    ]
  },
  {
    id: 119,
    category: 'zakupy',
    tokens: [
      { hr: 'Samo gledam, hvala.', pl: 'Tylko oglądam, dziękuję.', blank: true }
    ]
  },
  {
    id: 120,
    category: 'zakupy',
    tokens: [
      { hr: 'Gdje je blagajna?', pl: 'Gdzie jest kasa?', blank: true }
    ]
  },

  // --- Czas ---
  {
    id: 121,
    category: 'czas',
    tokens: [
      { hr: 'Vidimo se u šest sati.', pl: 'Widzimy się o szóstej.', blank: true }
    ]
  },
  {
    id: 122,
    category: 'czas',
    tokens: [
      { hr: 'Kasnim deset minuta.', pl: 'Spóźnię się dziesięć minut.', blank: true }
    ]
  },
  {
    id: 123,
    category: 'czas',
    tokens: [
      { hr: 'Nemam vremena danas.', pl: 'Nie mam dzisiaj czasu.', blank: true }
    ]
  },
  {
    id: 124,
    category: 'czas',
    tokens: [
      { hr: 'Koliko dugo ćeš ostati?', pl: 'Jak długo zostaniesz?', blank: true }
    ]
  },
  {
    id: 125,
    category: 'czas',
    tokens: [
      { hr: 'Vidimo se sljedeći tjedan.', pl: 'Widzimy się w przyszłym tygodniu.', blank: true }
    ]
  },

  // --- Rodzina ---
  {
    id: 126,
    category: 'rodzina',
    tokens: [
      { hr: 'Imam mlađeg brata.', pl: 'Mam młodszego brata.', blank: true }
    ]
  },
  {
    id: 127,
    category: 'rodzina',
    tokens: [
      { hr: 'Moja sestra živi u Splitu.', pl: 'Moja siostra mieszka w Splicie.', blank: true }
    ]
  },
  {
    id: 128,
    category: 'rodzina',
    tokens: [
      { hr: 'Moji roditelji dolaze sutra.', pl: 'Moi rodzice przyjeżdżają jutro.', blank: true }
    ]
  },
  {
    id: 129,
    category: 'rodzina',
    tokens: [
      { hr: 'Imam veliku obitelj.', pl: 'Mam dużą rodzinę.', blank: true }
    ]
  },
  {
    id: 130,
    category: 'rodzina',
    tokens: [
      { hr: 'Moja baka živi blizu nas.', pl: 'Moja babcia mieszka blisko nas.', blank: true }
    ]
  },

  // --- Uczucia ---
  {
    id: 131,
    category: 'uczucia',
    tokens: [
      { hr: 'Sretan sam što si ovdje.', pl: 'Cieszę się, że tu jesteś.', blank: true }
    ]
  },
  {
    id: 132,
    category: 'uczucia',
    tokens: [
      { hr: 'Ne osjećam se baš dobro.', pl: 'Nie czuję się najlepiej.', blank: true }
    ]
  },
  {
    id: 133,
    category: 'uczucia',
    tokens: [
      { hr: 'Jako sam umoran danas.', pl: 'Jestem dzisiaj bardzo zmęczony.', blank: true }
    ]
  },
  {
    id: 134,
    category: 'uczucia',
    tokens: [
      { hr: 'Drago mi je zbog tebe.', pl: 'Cieszę się z twojego powodu.', blank: true }
    ]
  },
  {
    id: 135,
    category: 'uczucia',
    tokens: [
      { hr: 'Nemoj se ljutiti.', pl: 'Nie złość się.', blank: true }
    ]
  },

  // --- Pogoda ---
  {
    id: 136,
    category: 'pogoda',
    tokens: [
      { hr: 'Danas je lijepo vrijeme.', pl: 'Dzisiaj jest ładna pogoda.', blank: true }
    ]
  },
  {
    id: 137,
    category: 'pogoda',
    tokens: [
      { hr: 'Pada jaka kiša.', pl: 'Pada ulewny deszcz.', blank: true }
    ]
  },
  {
    id: 138,
    category: 'pogoda',
    tokens: [
      { hr: 'Danas je dosta hladno.', pl: 'Dzisiaj jest dość zimno.', blank: true }
    ]
  },
  {
    id: 139,
    category: 'pogoda',
    tokens: [
      { hr: 'Nadam se da će sutra biti sunčano.', pl: 'Mam nadzieję, że jutro będzie słonecznie.', blank: true }
    ]
  },
  {
    id: 140,
    category: 'pogoda',
    tokens: [
      { hr: 'Puše jak vjetar.', pl: 'Wieje silny wiatr.', blank: true }
    ]
  },

  // --- Podróże ---
  {
    id: 141,
    category: 'podroze',
    tokens: [
      { hr: 'Gdje mogu kupiti kartu?', pl: 'Gdzie mogę kupić bilet?', blank: true }
    ]
  },
  {
    id: 142,
    category: 'podroze',
    tokens: [
      { hr: 'Koliko traje put do Splita?', pl: 'Jak długo trwa podróż do Splitu?', blank: true }
    ]
  },
  {
    id: 143,
    category: 'podroze',
    tokens: [
      { hr: 'Želim posjetiti Dubrovnik.', pl: 'Chcę odwiedzić Dubrownik.', blank: true }
    ]
  },
  {
    id: 144,
    category: 'podroze',
    tokens: [
      { hr: 'Gdje je najbliža autobusna stanica?', pl: 'Gdzie jest najbliższy przystanek autobusowy?', blank: true }
    ]
  },
  {
    id: 145,
    category: 'podroze',
    tokens: [
      { hr: 'Koliko je udaljeno odavde?', pl: 'Jak daleko jest stąd?', blank: true }
    ]
  },

  // --- Praca ---
  {
    id: 146,
    category: 'praca',
    tokens: [
      { hr: 'Danas radim od kuće.', pl: 'Dzisiaj pracuję z domu.', blank: true }
    ]
  },
  {
    id: 147,
    category: 'praca',
    tokens: [
      { hr: 'Moram završiti ovaj posao danas.', pl: 'Muszę skończyć tę pracę dzisiaj.', blank: true }
    ]
  },
  {
    id: 148,
    category: 'praca',
    tokens: [
      { hr: 'Imamo sastanak u deset.', pl: 'Mamy spotkanie o dziesiątej.', blank: true }
    ]
  },
  {
    id: 149,
    category: 'praca',
    tokens: [
      { hr: 'Radim ovdje već tri godine.', pl: 'Pracuję tutaj od trzech lat.', blank: true }
    ]
  },
  {
    id: 150,
    category: 'praca',
    tokens: [
      { hr: 'Možemo razgovarati o tome sutra.', pl: 'Możemy porozmawiać o tym jutro.', blank: true }
    ]
  },
    // --- Dom ---
  {
    id: 151,
    category: 'dom',
    tokens: [
      { hr: 'Gdje su ključevi?', pl: 'Gdzie są klucze?', blank: true }
    ]
  },
  {
    id: 152,
    category: 'dom',
    tokens: [
      { hr: 'Moram pospremiti stan.', pl: 'Muszę posprzątać mieszkanie.', blank: true }
    ]
  },
  {
    id: 153,
    category: 'dom',
    tokens: [
      { hr: 'Kuhinja je odmah desno.', pl: 'Kuchnia jest od razu po prawej.', blank: true }
    ]
  },
  {
    id: 154,
    category: 'dom',
    tokens: [
      { hr: 'Gdje je kupaonica?', pl: 'Gdzie jest łazienka?', blank: true }
    ]
  },
  {
    id: 155,
    category: 'dom',
    tokens: [
      { hr: 'Moram oprati suđe.', pl: 'Muszę umyć naczynia.', blank: true }
    ]
  },
  {
    id: 156,
    category: 'dom',
    tokens: [
      { hr: 'Možeš li zatvoriti prozor?', pl: 'Możesz zamknąć okno?', blank: true }
    ]
  },
  {
    id: 157,
    category: 'dom',
    tokens: [
      { hr: 'U stanu je previše hladno.', pl: 'W mieszkaniu jest za zimno.', blank: true }
    ]
  },
  {
    id: 158,
    category: 'dom',
    tokens: [
      { hr: 'Gdje mogu ostaviti cipele?', pl: 'Gdzie mogę zostawić buty?', blank: true }
    ]
  },
  {
    id: 159,
    category: 'dom',
    tokens: [
      { hr: 'Moramo kupiti novi stol.', pl: 'Musimy kupić nowy stół.', blank: true }
    ]
  },
  {
    id: 160,
    category: 'dom',
    tokens: [
      { hr: 'Idem rano spavati.', pl: 'Idę wcześnie spać.', blank: true }
    ]
  },

  // --- Jedzenie ---
  {
    id: 161,
    category: 'jedzenie',
    tokens: [
      { hr: 'Što ćemo danas kuhati?', pl: 'Co ugotujemy dzisiaj?', blank: true }
    ]
  },
  {
    id: 162,
    category: 'jedzenie',
    tokens: [
      { hr: 'Stvarno sam gladan.', pl: 'Naprawdę jestem głodny.', blank: true }
    ]
  },
  {
    id: 163,
    category: 'jedzenie',
    tokens: [
      { hr: 'Ovo je jako ukusno.', pl: 'To jest bardzo smaczne.', blank: true }
    ]
  },
  {
    id: 164,
    category: 'jedzenie',
    tokens: [
      { hr: 'Hoćeš li još malo?', pl: 'Chcesz jeszcze trochę?', blank: true }
    ]
  },
  {
    id: 165,
    category: 'jedzenie',
    tokens: [
      { hr: 'Ne volim previše slatku hranu.', pl: 'Nie lubię zbyt słodkiego jedzenia.', blank: true }
    ]
  },
  {
    id: 166,
    category: 'jedzenie',
    tokens: [
      { hr: 'Možeš li mi dodati sol?', pl: 'Możesz mi podać sól?', blank: true }
    ]
  },
  {
    id: 167,
    category: 'jedzenie',
    tokens: [
      { hr: 'Imamo li dovoljno kruha?', pl: 'Czy mamy wystarczająco dużo chleba?', blank: true }
    ]
  },
  {
    id: 168,
    category: 'jedzenie',
    tokens: [
      { hr: 'Ovo meso je još sirovo.', pl: 'To mięso jest jeszcze surowe.', blank: true }
    ]
  },
  {
    id: 169,
    category: 'jedzenie',
    tokens: [
      { hr: 'Već sam doručkovao.', pl: 'Już jadłem śniadanie.', blank: true }
    ]
  },
  {
    id: 170,
    category: 'jedzenie',
    tokens: [
      { hr: 'Jesi li već ručao?', pl: 'Jadłeś już obiad?', blank: true }
    ]
  },

  // --- Piće ---
  {
    id: 171,
    category: 'pice',
    tokens: [
      { hr: 'Mogu li dobiti čašu vode?', pl: 'Czy mogę prosić o szklankę wody?', blank: true }
    ]
  },
  {
    id: 172,
    category: 'pice',
    tokens: [
      { hr: 'Želiš li nešto popiti?', pl: 'Chcesz się czegoś napić?', blank: true }
    ]
  },
  {
    id: 173,
    category: 'pice',
    tokens: [
      { hr: 'Ja bih jednu kavu.', pl: 'Poproszę jedną kawę.', blank: true }
    ]
  },
  {
    id: 174,
    category: 'pice',
    tokens: [
      { hr: 'Bez šećera, molim.', pl: 'Bez cukru, proszę.', blank: true }
    ]
  },
  {
    id: 175,
    category: 'pice',
    tokens: [
      { hr: 'Može još jedna čaša?', pl: 'Może jeszcze jedna szklanka?', blank: true }
    ]
  },
  {
    id: 176,
    category: 'pice',
    tokens: [
      { hr: 'Radije bih čaj.', pl: 'Wolałbym herbatę.', blank: true }
    ]
  },
  {
    id: 177,
    category: 'pice',
    tokens: [
      { hr: 'Je li ovo mineralna voda?', pl: 'Czy to jest woda mineralna?', blank: true }
    ]
  },
  {
    id: 178,
    category: 'pice',
    tokens: [
      { hr: 'Popio sam samo jednu čašu.', pl: 'Wypiłem tylko jedną szklankę.', blank: true }
    ]
  },
  {
    id: 179,
    category: 'pice',
    tokens: [
      { hr: 'Donesi mi malo vode, molim te.', pl: 'Przynieś mi trochę wody, proszę.', blank: true }
    ]
  },
  {
    id: 180,
    category: 'pice',
    tokens: [
      { hr: 'Hoćeš kavu ili čaj?', pl: 'Chcesz kawę czy herbatę?', blank: true }
    ]
  },

  // --- Zdrowie ---
  {
    id: 181,
    category: 'zdrowie',
    tokens: [
      { hr: 'Od jučer se ne osjećam dobro.', pl: 'Od wczoraj nie czuję się dobrze.', blank: true }
    ]
  },
  {
    id: 182,
    category: 'zdrowie',
    tokens: [
      { hr: 'Boli me grlo.', pl: 'Boli mnie gardło.', blank: true }
    ]
  },
  {
    id: 183,
    category: 'zdrowie',
    tokens: [
      { hr: 'Imam temperaturu.', pl: 'Mam gorączkę.', blank: true }
    ]
  },
  {
    id: 184,
    category: 'zdrowie',
    tokens: [
      { hr: 'Moram otići liječniku.', pl: 'Muszę iść do lekarza.', blank: true }
    ]
  },
  {
    id: 185,
    category: 'zdrowie',
    tokens: [
      { hr: 'Imate li nešto protiv bolova?', pl: 'Czy mają państwo coś przeciwbólowego?', blank: true }
    ]
  },
  {
    id: 186,
    category: 'zdrowie',
    tokens: [
      { hr: 'Koliko puta dnevno trebam uzeti lijek?', pl: 'Ile razy dziennie mam przyjmować lek?', blank: true }
    ]
  },
  {
    id: 187,
    category: 'zdrowie',
    tokens: [
      { hr: 'Alergičan sam na penicilin.', pl: 'Mam alergię na penicylinę.', blank: true }
    ]
  },
  {
    id: 188,
    category: 'zdrowie',
    tokens: [
      { hr: 'Odavno me boli leđa.', pl: 'Od dawna bolą mnie plecy.', blank: true }
    ]
  },
  {
    id: 189,
    category: 'zdrowie',
    tokens: [
      { hr: 'Trebam se malo odmoriti.', pl: 'Muszę trochę odpocząć.', blank: true }
    ]
  },
  {
    id: 190,
    category: 'zdrowie',
    tokens: [
      { hr: 'Sad se osjećam puno bolje.', pl: 'Teraz czuję się o wiele lepiej.', blank: true }
    ]
  },

  // --- Transport ---
  {
    id: 191,
    category: 'transport',
    tokens: [
      { hr: 'Kada polazi sljedeći autobus?', pl: 'Kiedy odjeżdża następny autobus?', blank: true }
    ]
  },
  {
    id: 192,
    category: 'transport',
    tokens: [
      { hr: 'Gdje mogu kupiti kartu za autobus?', pl: 'Gdzie mogę kupić bilet autobusowy?', blank: true }
    ]
  },
  {
    id: 193,
    category: 'transport',
    tokens: [
      { hr: 'Je li ovaj autobus ide u centar?', pl: 'Czy ten autobus jedzie do centrum?', blank: true }
    ]
  },
  {
    id: 194,
    category: 'transport',
    tokens: [
      { hr: 'Gdje trebam izaći?', pl: 'Gdzie muszę wysiąść?', blank: true }
    ]
  },
  {
    id: 195,
    category: 'transport',
    tokens: [
      { hr: 'Ovaj vlak kasni dvadeset minuta.', pl: 'Ten pociąg ma dwadzieścia minut opóźnienia.', blank: true }
    ]
  },
  {
    id: 196,
    category: 'transport',
    tokens: [
      { hr: 'Je li ovo mjesto slobodno?', pl: 'Czy to miejsce jest wolne?', blank: true }
    ]
  },
  {
    id: 197,
    category: 'transport',
    tokens: [
      { hr: 'Koliko traje vožnja do centra?', pl: 'Ile trwa przejazd do centrum?', blank: true }
    ]
  },
  {
    id: 198,
    category: 'transport',
    tokens: [
      { hr: 'Možete li me ostaviti ovdje?', pl: 'Czy może mnie pan/pani wysadzić tutaj?', blank: true }
    ]
  },
  {
    id: 199,
    category: 'transport',
    tokens: [
      { hr: 'Trebam taksi do zračne luke.', pl: 'Potrzebuję taksówki na lotnisko.', blank: true }
    ]
  },
  {
    id: 200,
    category: 'transport',
    tokens: [
      { hr: 'Koliko košta vožnja do hotela?', pl: 'Ile kosztuje przejazd do hotelu?', blank: true }
    ]
  },

  // --- Hotel ---
  {
    id: 201,
    category: 'hotel',
    tokens: [
      { hr: 'Imam rezervaciju na svoje ime.', pl: 'Mam rezerwację na swoje nazwisko.', blank: true }
    ]
  },
  {
    id: 202,
    category: 'hotel',
    tokens: [
      { hr: 'U koliko sati je doručak?', pl: 'O której jest śniadanie?', blank: true }
    ]
  },
  {
    id: 203,
    category: 'hotel',
    tokens: [
      { hr: 'Kada se moramo odjaviti iz sobe?', pl: 'Kiedy musimy się wymeldować z pokoju?', blank: true }
    ]
  },
  {
    id: 204,
    category: 'hotel',
    tokens: [
      { hr: 'Možemo li ostaviti prtljagu ovdje?', pl: 'Czy możemy zostawić tutaj bagaż?', blank: true }
    ]
  },
  {
    id: 205,
    category: 'hotel',
    tokens: [
      { hr: 'Imate li slobodnu sobu za jednu noć?', pl: 'Czy mają państwo wolny pokój na jedną noc?', blank: true }
    ]
  },
  {
    id: 206,
    category: 'hotel',
    tokens: [
      { hr: 'Ključ od sobe ne radi.', pl: 'Klucz do pokoju nie działa.', blank: true }
    ]
  },
  {
    id: 207,
    category: 'hotel',
    tokens: [
      { hr: 'U sobi nema tople vode.', pl: 'W pokoju nie ma ciepłej wody.', blank: true }
    ]
  },
  {
    id: 208,
    category: 'hotel',
    tokens: [
      { hr: 'Možemo li dobiti još jedan ručnik?', pl: 'Czy możemy prosić o jeszcze jeden ręcznik?', blank: true }
    ]
  },
  {
    id: 209,
    category: 'hotel',
    tokens: [
      { hr: 'Je li Wi-Fi besplatan?', pl: 'Czy Wi-Fi jest bezpłatne?', blank: true }
    ]
  },
  {
    id: 210,
    category: 'hotel',
    tokens: [
      { hr: 'Soba nam je jako bučna.', pl: 'Nasz pokój jest bardzo głośny.', blank: true }
    ]
  },

  // --- Telefon i komunikacja ---
  {
    id: 211,
    category: 'telefon',
    tokens: [
      { hr: 'Nazvat ću te kasnije.', pl: 'Zadzwonię do ciebie później.', blank: true }
    ]
  },
  {
    id: 212,
    category: 'telefon',
    tokens: [
      { hr: 'Možeš li mi poslati poruku?', pl: 'Możesz wysłać mi wiadomość?', blank: true }
    ]
  },
  {
    id: 213,
    category: 'telefon',
    tokens: [
      { hr: 'Ne čujem te dobro.', pl: 'Słabo cię słyszę.', blank: true }
    ]
  },
  {
    id: 214,
    category: 'telefon',
    tokens: [
      { hr: 'Veza je jako loša.', pl: 'Połączenie jest bardzo słabe.', blank: true }
    ]
  },
  {
    id: 215,
    category: 'telefon',
    tokens: [
      { hr: 'Javi mi kad stigneš.', pl: 'Daj mi znać, kiedy dotrzesz.', blank: true }
    ]
  },
  {
    id: 216,
    category: 'telefon',
    tokens: [
      { hr: 'Mobitel mi je skoro prazan.', pl: 'Mój telefon jest prawie rozładowany.', blank: true }
    ]
  },
  {
    id: 217,
    category: 'telefon',
    tokens: [
      { hr: 'Imaš li punjač?', pl: 'Masz ładowarkę?', blank: true }
    ]
  },
  {
    id: 218,
    category: 'telefon',
    tokens: [
      { hr: 'Pošalji mi adresu porukom.', pl: 'Wyślij mi adres w wiadomości.', blank: true }
    ]
  },
  {
    id: 219,
    category: 'telefon',
    tokens: [
      { hr: 'Možeš li me nazvati za deset minuta?', pl: 'Możesz zadzwonić do mnie za dziesięć minut?', blank: true }
    ]
  },
  {
    id: 220,
    category: 'telefon',
    tokens: [
      { hr: 'Čujemo se sutra.', pl: 'Usłyszymy się jutro.', blank: true }
    ]
  },

  // --- Wolny czas ---
  {
    id: 221,
    category: 'slobodno_vrijeme',
    tokens: [
      { hr: 'Što radiš za vikend?', pl: 'Co robisz w weekend?', blank: true }
    ]
  },
  {
    id: 222,
    category: 'slobodno_vrijeme',
    tokens: [
      { hr: 'Idemo večeras u kino.', pl: 'Idziemy dziś wieczorem do kina.', blank: true }
    ]
  },
  {
    id: 223,
    category: 'slobodno_vrijeme',
    tokens: [
      { hr: 'Voliš li gledati filmove?', pl: 'Lubisz oglądać filmy?', blank: true }
    ]
  },
  {
    id: 224,
    category: 'slobodno_vrijeme',
    tokens: [
      { hr: 'Danas bih radije ostao kod kuće.', pl: 'Dzisiaj wolałbym zostać w domu.', blank: true }
    ]
  },
  {
    id: 225,
    category: 'slobodno_vrijeme',
    tokens: [
      { hr: 'Hoćemo li prošetati?', pl: 'Może pójdziemy na spacer?', blank: true }
    ]
  },
  {
    id: 226,
    category: 'slobodno_vrijeme',
    tokens: [
      { hr: 'Volim provoditi vrijeme na otvorenom.', pl: 'Lubię spędzać czas na świeżym powietrzu.', blank: true }
    ]
  },
  {
    id: 227,
    category: 'slobodno_vrijeme',
    tokens: [
      { hr: 'Jučer sam gledao dobar film.', pl: 'Wczoraj oglądałem dobry film.', blank: true }
    ]
  },
  {
    id: 228,
    category: 'slobodno_vrijeme',
    tokens: [
      { hr: 'Idemo na kavu poslije posla.', pl: 'Idziemy na kawę po pracy.', blank: true }
    ]
  },
  {
    id: 229,
    category: 'slobodno_vrijeme',
    tokens: [
      { hr: 'Vikendom često idem u šetnju.', pl: 'W weekendy często chodzę na spacery.', blank: true }
    ]
  },
  {
    id: 230,
    category: 'slobodno_vrijeme',
    tokens: [
      { hr: 'Danas nemam nikakvih planova.', pl: 'Dzisiaj nie mam żadnych planów.', blank: true }
    ]
  },

  // --- Miasto i kierunki ---
  {
    id: 231,
    category: 'miasto',
    tokens: [
      { hr: 'Kako mogu doći do centra?', pl: 'Jak mogę dostać się do centrum?', blank: true }
    ]
  },
  {
    id: 232,
    category: 'miasto',
    tokens: [
      { hr: 'Gdje je najbliži supermarket?', pl: 'Gdzie jest najbliższy supermarket?', blank: true }
    ]
  },
  {
    id: 233,
    category: 'miasto',
    tokens: [
      { hr: 'Je li banka blizu?', pl: 'Czy bank jest blisko?', blank: true }
    ]
  },
  {
    id: 234,
    category: 'miasto',
    tokens: [
      { hr: 'Idite ravno pa skrenite desno.', pl: 'Proszę iść prosto, a potem skręcić w prawo.', blank: true }
    ]
  },
  {
    id: 235,
    category: 'miasto',
    tokens: [
      { hr: 'Trg je odmah iza ugla.', pl: 'Plac jest zaraz za rogiem.', blank: true }
    ]
  },
  {
    id: 236,
    category: 'miasto',
    tokens: [
      { hr: 'Koliko ima do glavnog trga?', pl: 'Jak daleko jest do głównego placu?', blank: true }
    ]
  },
  {
    id: 237,
    category: 'miasto',
    tokens: [
      { hr: 'Možete li mi pokazati na karti?', pl: 'Czy może mi pan/pani pokazać na mapie?', blank: true }
    ]
  },
  {
    id: 238,
    category: 'miasto',
    tokens: [
      { hr: 'Ovdje negdje bi trebala biti pošta.', pl: 'Gdzieś tutaj powinna być poczta.', blank: true }
    ]
  },
  {
    id: 239,
    category: 'miasto',
    tokens: [
      { hr: 'Koliko je udaljena plaža?', pl: 'Jak daleko jest plaża?', blank: true }
    ]
  },
  {
    id: 240,
    category: 'miasto',
    tokens: [
      { hr: 'Ne mogu pronaći ovu ulicu.', pl: 'Nie mogę znaleźć tej ulicy.', blank: true }
    ]
  },

  // --- Problemy i sytuacje codzienne ---
  {
    id: 241,
    category: 'problemy',
    tokens: [
      { hr: 'Ne radi mi internet.', pl: 'Nie działa mi internet.', blank: true }
    ]
  },
  {
    id: 242,
    category: 'problemy',
    tokens: [
      { hr: 'Ne znam što se dogodilo.', pl: 'Nie wiem, co się stało.', blank: true }
    ]
  },
  {
    id: 243,
    category: 'problemy',
    tokens: [
      { hr: 'Možeš li mi pomoći s ovim?', pl: 'Możesz mi z tym pomóc?', blank: true }
    ]
  },
  {
    id: 244,
    category: 'problemy',
    tokens: [
      { hr: 'Mislim da je ovo pogrešno.', pl: 'Myślę, że to jest nieprawidłowe.', blank: true }
    ]
  },
  {
    id: 245,
    category: 'problemy',
    tokens: [
      { hr: 'Ne mogu pronaći svoje ključeve.', pl: 'Nie mogę znaleźć swoich kluczy.', blank: true }
    ]
  },
  {
    id: 246,
    category: 'problemy',
    tokens: [
      { hr: 'Zaboravio sam novčanik kod kuće.', pl: 'Zapomniałem portfela w domu.', blank: true }
    ]
  },
  {
    id: 247,
    category: 'problemy',
    tokens: [
      { hr: 'Čekam već pola sata.', pl: 'Czekam już pół godziny.', blank: true }
    ]
  },
  {
    id: 248,
    category: 'problemy',
    tokens: [
      { hr: 'Ne mogu se sjetiti njegovog imena.', pl: 'Nie mogę sobie przypomnieć jego imienia.', blank: true }
    ]
  },
  {
    id: 249,
    category: 'problemy',
    tokens: [
      { hr: 'Nema dovoljno mjesta.', pl: 'Nie ma wystarczająco dużo miejsca.', blank: true }
    ]
  },
  {
    id: 250,
    category: 'problemy',
    tokens: [
      { hr: 'Sve će biti u redu.', pl: 'Wszystko będzie dobrze.', blank: true }
    ]
  },
]