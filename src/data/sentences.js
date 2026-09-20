export const sentences = [
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
  ]},
  { id: 251, category: 'sport', tokens: [
    { hr: 'Igram', pl: 'Gram', blank: true },
    { hr: 'nogomet', pl: 'w piłkę nożną' },
    { hr: 'svaki vikend.', pl: 'w każdy weekend.' }
  ]},
  { id: 252, category: 'sport', tokens: [
    { hr: 'Jučer smo', pl: 'Wczoraj' },
    { hr: 'pobijedili', pl: 'wygraliśmy', blank: true },
    { hr: 'utakmicu.', pl: 'mecz.' }
  ]},
  { id: 253, category: 'sport', tokens: [
    { hr: 'Ideš li', pl: 'Idziesz' },
    { hr: 'večeras', pl: 'dziś wieczorem', blank: true },
    { hr: 'na trening?', pl: 'na trening?' }
  ]},
  { id: 254, category: 'sport', tokens: [
    { hr: 'On trenira', pl: 'On trenuje' },
    { hr: 'košarku', pl: 'koszykówkę', blank: true },
    { hr: 'već tri godine.', pl: 'już trzy lata.' }
  ]},
  { id: 255, category: 'sport', tokens: [
    { hr: 'Naša momčad', pl: 'Nasza drużyna' },
    { hr: 'je izgubila.', pl: 'przegrała.', blank: true }
  ]},
  { id: 256, category: 'sport', tokens: [
    { hr: 'Volim', pl: 'Lubię', blank: true },
    { hr: 'gledati nogomet', pl: 'oglądać piłkę nożną' },
    { hr: 'na TV-u.', pl: 'w telewizji.' }
  ]},
  { id: 257, category: 'sport', tokens: [
    { hr: 'Trčim', pl: 'Biegam', blank: true },
    { hr: 'svako jutro', pl: 'co rano' },
    { hr: 'pola sata.', pl: 'pół godziny.' }
  ]},
  { id: 258, category: 'sport', tokens: [
    { hr: 'Idemo zajedno', pl: 'Idziemy razem' },
    { hr: 'u teretanu?', pl: 'na siłownię?', blank: true }
  ]},
  { id: 259, category: 'sport', tokens: [
    { hr: 'Ozlijedio sam', pl: 'Zraniłem', blank: true },
    { hr: 'koljeno na treningu.', pl: 'kolano na treningu.' }
  ]},
  { id: 260, category: 'sport', tokens: [
    { hr: 'Finale je', pl: 'Finał jest' },
    { hr: 'sutra navečer.', pl: 'jutro wieczorem.', blank: true }
  ]},
  { id: 261, category: 'muzyka', tokens: [
    { hr: 'Koju glazbu', pl: 'Jakiej muzyki' },
    { hr: 'voliš', pl: 'lubisz', blank: true },
    { hr: 'slušati?', pl: 'słuchać?' }
  ]},
  { id: 262, category: 'muzyka', tokens: [
    { hr: 'Ova mi se', pl: 'Ta' },
    { hr: 'pjesma', pl: 'piosenka' },
    { hr: 'jako sviđa.', pl: 'bardzo mi się podoba.', blank: true }
  ]},
  { id: 263, category: 'muzyka', tokens: [
    { hr: 'Idemo', pl: 'Idziemy' },
    { hr: 'na koncert', pl: 'na koncert', blank: true },
    { hr: 'sljedeći tjedan.', pl: 'w przyszłym tygodniu.' }
  ]},
  { id: 264, category: 'muzyka', tokens: [
    { hr: 'Svira', pl: 'Gra', blank: true },
    { hr: 'gitaru', pl: 'na gitarze' },
    { hr: 'već godinama.', pl: 'od lat.' }
  ]},
  { id: 265, category: 'muzyka', tokens: [
    { hr: 'Ova pjesma', pl: 'Ta piosenka' },
    { hr: 'mi se uvukla', pl: 'wpadła mi', blank: true },
    { hr: 'u uho.', pl: 'w ucho.' }
  ]},
  { id: 266, category: 'muzyka', tokens: [
    { hr: 'Skini mi', pl: 'Ściągnij mi', blank: true },
    { hr: 'ovu pjesmu', pl: 'tę piosenkę' },
    { hr: ',', pl: ',', punct: true },
    { hr: 'molim te.', pl: 'proszę.' }
  ]},
  { id: 267, category: 'muzyka', tokens: [
    { hr: 'Ne volim', pl: 'Nie lubię', blank: true },
    { hr: 'previše glasnu glazbu.', pl: 'zbyt głośnej muzyki.' }
  ]},
  { id: 268, category: 'muzyka', tokens: [
    { hr: 'Pojačaj', pl: 'Podgłośnij', blank: true },
    { hr: 'malo glazbu.', pl: 'trochę muzykę.' }
  ]},
  { id: 269, category: 'muzyka', tokens: [
    { hr: 'Ugasi', pl: 'Wyłącz', blank: true },
    { hr: 'glazbu', pl: 'muzykę' },
    { hr: ',', pl: ',', punct: true },
    { hr: 'molim te.', pl: 'proszę.' }
  ]},
  { id: 270, category: 'muzyka', tokens: [
    { hr: 'Ovaj pjevač', pl: 'Ten piosenkarz' },
    { hr: 'mi je', pl: 'jest' },
    { hr: 'omiljen.', pl: 'moim ulubionym.', blank: true }
  ]},
  { id: 271, category: 'internet_telefon', tokens: [
    { hr: 'Nemam', pl: 'Nie mam', blank: true },
    { hr: 'signala ovdje.', pl: 'tu zasięgu.' }
  ]},
  { id: 272, category: 'internet_telefon', tokens: [
    { hr: 'Baterija mi je', pl: 'Bateria mi się', blank: true },
    { hr: 'na nuli.', pl: 'skończyła.' }
  ]},
  { id: 273, category: 'internet_telefon', tokens: [
    { hr: 'Pošalji mi', pl: 'Wyślij mi', blank: true },
    { hr: 'link', pl: 'link' },
    { hr: ',', pl: ',', punct: true },
    { hr: 'molim te.', pl: 'proszę.' }
  ]},
  { id: 274, category: 'internet_telefon', tokens: [
    { hr: 'Vidio sam', pl: 'Widziałem', blank: true },
    { hr: 'tvoju objavu.', pl: 'twój post.' }
  ]},
  { id: 275, category: 'internet_telefon', tokens: [
    { hr: 'Ne mogu se', pl: 'Nie mogę się' },
    { hr: 'spojiti', pl: 'połączyć', blank: true },
    { hr: 'na wifi.', pl: 'z wifi.' }
  ]},
  { id: 276, category: 'internet_telefon', tokens: [
    { hr: 'Piši mi', pl: 'Napisz mi', blank: true },
    { hr: 'kad stigneš doma.', pl: 'kiedy dotrzesz do domu.' }
  ]},
  { id: 277, category: 'internet_telefon', tokens: [
    { hr: 'Aplikacija mi', pl: 'Aplikacja mi się' },
    { hr: 'stalno pada.', pl: 'ciągle wywala.', blank: true }
  ]},
  { id: 278, category: 'internet_telefon', tokens: [
    { hr: 'Zaboravio sam', pl: 'Zapomniałem', blank: true },
    { hr: 'lozinku.', pl: 'hasła.' }
  ]},
  { id: 279, category: 'internet_telefon', tokens: [
    { hr: 'Skinuo sam', pl: 'Ściągnąłem', blank: true },
    { hr: 'novu aplikaciju.', pl: 'nową aplikację.' }
  ]},
  { id: 280, category: 'internet_telefon', tokens: [
    { hr: 'Mobitel mi je', pl: 'Telefon' },
    { hr: 'pao', pl: 'wpadł mi', blank: true },
    { hr: 'u vodu.', pl: 'do wody.' }
  ]},
  { id: 281, category: 'zwierzeta', tokens: [
    { hr: 'Imam', pl: 'Mam' },
    { hr: 'psa', pl: 'psa', blank: true },
    { hr: 'i mačku.', pl: 'i kota.' }
  ]},
  { id: 282, category: 'zwierzeta', tokens: [
    { hr: 'Moj pas', pl: 'Mój pies' },
    { hr: 'voli', pl: 'lubi', blank: true },
    { hr: 'šetnje.', pl: 'spacery.' }
  ]},
  { id: 283, category: 'zwierzeta', tokens: [
    { hr: 'Mačka', pl: 'Kot' },
    { hr: 'spava', pl: 'śpi', blank: true },
    { hr: 'cijeli dan.', pl: 'cały dzień.' }
  ]},
  { id: 284, category: 'zwierzeta', tokens: [
    { hr: 'Moram', pl: 'Muszę' },
    { hr: 'izvesti', pl: 'wyprowadzić', blank: true },
    { hr: 'psa van.', pl: 'psa.' }
  ]},
  { id: 285, category: 'zwierzeta', tokens: [
    { hr: 'Imaš li', pl: 'Masz' },
    { hr: 'kućnog ljubimca?', pl: 'zwierzaka domowego?', blank: true }
  ]},
  { id: 286, category: 'zwierzeta', tokens: [
    { hr: 'Pas mi je', pl: 'Pies' },
    { hr: 'pobjegao', pl: 'uciekł mi', blank: true },
    { hr: 'iz dvorišta.', pl: 'z podwórka.' }
  ]},
  { id: 287, category: 'zwierzeta', tokens: [
    { hr: 'Moram', pl: 'Muszę' },
    { hr: 'nahraniti', pl: 'nakarmić', blank: true },
    { hr: 'ribice.', pl: 'rybki.' }
  ]},
  { id: 288, category: 'zwierzeta', tokens: [
    { hr: 'Papiga zna', pl: 'Papuga potrafi' },
    { hr: 'izgovoriti', pl: 'wypowiedzieć', blank: true },
    { hr: 'nekoliko riječi.', pl: 'kilka słów.' }
  ]},
  { id: 289, category: 'zwierzeta', tokens: [
    { hr: 'Vodim', pl: 'Zabieram', blank: true },
    { hr: 'psa veterinaru sutra.', pl: 'jutro psa do weterynarza.' }
  ]},
  { id: 290, category: 'zwierzeta', tokens: [
    { hr: 'Mačka je', pl: 'Kot' },
    { hr: 'razbila', pl: 'rozbił', blank: true },
    { hr: 'čašu.', pl: 'szklankę.' }
  ]},
  { id: 291, category: 'szkola', tokens: [
    { hr: 'Imam', pl: 'Mam' },
    { hr: 'ispit', pl: 'egzamin', blank: true },
    { hr: 'sutra ujutro.', pl: 'jutro rano.' }
  ]},
  { id: 292, category: 'szkola', tokens: [
    { hr: 'Moram se', pl: 'Muszę się' },
    { hr: 'učiti', pl: 'uczyć', blank: true },
    { hr: 'za test.', pl: 'do testu.' }
  ]},
  { id: 293, category: 'szkola', tokens: [
    { hr: 'Dobio sam', pl: 'Dostałem', blank: true },
    { hr: 'dobru ocjenu.', pl: 'dobrą ocenę.' }
  ]},
  { id: 294, category: 'szkola', tokens: [
    { hr: 'Zaboravio sam', pl: 'Zapomniałem', blank: true },
    { hr: 'knjigu kod kuće.', pl: 'książki w domu.' }
  ]},
  { id: 295, category: 'szkola', tokens: [
    { hr: 'Predavanje', pl: 'Wykład' },
    { hr: 'počinje', pl: 'zaczyna się', blank: true },
    { hr: 'u devet.', pl: 'o dziewiątej.' }
  ]},
  { id: 296, category: 'szkola', tokens: [
    { hr: 'Imamo', pl: 'Mamy' },
    { hr: 'puno', pl: 'dużo', blank: true },
    { hr: 'domaće zadaće.', pl: 'pracy domowej.' }
  ]},
  { id: 297, category: 'szkola', tokens: [
    { hr: 'Profesor je danas', pl: 'Profesor jest dzisiaj' },
    { hr: 'odsutan.', pl: 'nieobecny.', blank: true }
  ]},
  { id: 298, category: 'szkola', tokens: [
    { hr: 'Pao sam', pl: 'Oblałem', blank: true },
    { hr: 'na ispitu.', pl: 'egzamin.' }
  ]},
  { id: 299, category: 'szkola', tokens: [
    { hr: 'Upisao sam', pl: 'Zapisałem się', blank: true },
    { hr: 'fakultet u Zagrebu.', pl: 'na studia w Zagrzebiu.' }
  ]},
  { id: 300, category: 'szkola', tokens: [
    { hr: 'Idem', pl: 'Idę' },
    { hr: 'na predavanje', pl: 'na wykład', blank: true },
    { hr: 'poslije ručka.', pl: 'po obiedzie.' }
  ]},
  { id: 301, category: 'pieniadze', tokens: [
    { hr: 'Nemam', pl: 'Nie mam', blank: true },
    { hr: 'gotovine kod sebe.', pl: 'przy sobie gotówki.' }
  ]},
  { id: 302, category: 'pieniadze', tokens: [
    { hr: 'Moram', pl: 'Muszę' },
    { hr: 'podignuti', pl: 'wypłacić', blank: true },
    { hr: 'novac s bankomata.', pl: 'pieniądze z bankomatu.' }
  ]},
  { id: 303, category: 'pieniadze', tokens: [
    { hr: 'Ovaj mjesec smo', pl: 'W tym miesiącu' },
    { hr: 'puno', pl: 'dużo', blank: true },
    { hr: 'potrošili.', pl: 'wydaliśmy.' }
  ]},
  { id: 304, category: 'pieniadze', tokens: [
    { hr: 'Štedim', pl: 'Oszczędzam', blank: true },
    { hr: 'za novi auto.', pl: 'na nowy samochód.' }
  ]},
  { id: 305, category: 'pieniadze', tokens: [
    { hr: 'Račun je', pl: 'Rachunek' },
    { hr: 'stigao', pl: 'przyszedł', blank: true },
    { hr: 'ranije.', pl: 'wcześniej.' }
  ]},
  { id: 306, category: 'pieniadze', tokens: [
    { hr: 'Posudi mi', pl: 'Pożycz mi', blank: true },
    { hr: 'malo novca.', pl: 'trochę pieniędzy.' }
  ]},
  { id: 307, category: 'pieniadze', tokens: [
    { hr: 'Vratit ću ti', pl: 'Oddam ci', blank: true },
    { hr: 'sutra.', pl: 'jutro.' }
  ]},
  { id: 308, category: 'pieniadze', tokens: [
    { hr: 'Plaća mi', pl: 'Moja pensja się' },
    { hr: 'kasni', pl: 'spóźnia', blank: true },
    { hr: 'ovaj mjesec.', pl: 'w tym miesiącu.' }
  ]},
  { id: 309, category: 'pieniadze', tokens: [
    { hr: 'Ovo je', pl: 'To jest' },
    { hr: 'preskupo', pl: 'za drogie', blank: true },
    { hr: 'za mene.', pl: 'dla mnie.' }
  ]},
  { id: 310, category: 'pieniadze', tokens: [
    { hr: 'Imamo', pl: 'Mamy' },
    { hr: 'popust', pl: 'zniżkę', blank: true },
    { hr: 'na sve proizvode.', pl: 'na wszystkie produkty.' }
  ]},
  { id: 311, category: 'gotowanie', tokens: [
    { hr: 'Stavi', pl: 'Postaw', blank: true },
    { hr: 'vodu da prokuha.', pl: 'wodę, żeby się zagotowała.' }
  ]},
  { id: 312, category: 'gotowanie', tokens: [
    { hr: 'Nemoj', pl: 'Nie', blank: true },
    { hr: 'presoliti juhu.', pl: 'przesol zupy.' }
  ]},
  { id: 313, category: 'gotowanie', tokens: [
    { hr: 'Ostavi to', pl: 'Zostaw to' },
    { hr: 'na štednjaku', pl: 'na kuchence', blank: true },
    { hr: 'pet minuta.', pl: 'pięć minut.' }
  ]},
  { id: 314, category: 'gotowanie', tokens: [
    { hr: 'Izgorjelo mi je', pl: 'Spaliło mi się', blank: true },
    { hr: 'jelo.', pl: 'jedzenie.' }
  ]},
  { id: 315, category: 'gotowanie', tokens: [
    { hr: 'Nareži', pl: 'Pokrój', blank: true },
    { hr: 'luk na sitno.', pl: 'cebulę drobno.' }
  ]},
  { id: 316, category: 'gotowanie', tokens: [
    { hr: 'Peć je', pl: 'Piekarnik jest' },
    { hr: 'već', pl: 'już' },
    { hr: 'zagrijana.', pl: 'nagrzany.', blank: true }
  ]},
  { id: 317, category: 'gotowanie', tokens: [
    { hr: 'Ovaj recept je', pl: 'Ten przepis jest' },
    { hr: 'vrlo', pl: 'bardzo' },
    { hr: 'jednostavan.', pl: 'prosty.', blank: true }
  ]},
  { id: 318, category: 'gotowanie', tokens: [
    { hr: 'Dodaj', pl: 'Dodaj', blank: true },
    { hr: 'malo papra.', pl: 'trochę pieprzu.' }
  ]},
  { id: 319, category: 'gotowanie', tokens: [
    { hr: 'Nemamo', pl: 'Nie mamy', blank: true },
    { hr: 'dovoljno jaja.', pl: 'wystarczająco jajek.' }
  ]},
  { id: 320, category: 'gotowanie', tokens: [
    { hr: 'Kuham', pl: 'Gotuję', blank: true },
    { hr: 'ručak za obitelj.', pl: 'obiad dla rodziny.' }
  ]},
  { id: 321, category: 'natura', tokens: [
    { hr: 'Šuma je', pl: 'Las jest' },
    { hr: 'puna', pl: 'pełen', blank: true },
    { hr: 'gljiva.', pl: 'grzybów.' }
  ]},
  { id: 322, category: 'natura', tokens: [
    { hr: 'More je danas', pl: 'Morze jest dzisiaj' },
    { hr: 'mirno.', pl: 'spokojne.', blank: true }
  ]},
  { id: 323, category: 'natura', tokens: [
    { hr: 'Sunce je', pl: 'Słońce' },
    { hr: 'već', pl: 'już' },
    { hr: 'zašlo.', pl: 'zaszło.', blank: true }
  ]},
  { id: 324, category: 'natura', tokens: [
    { hr: 'Volim', pl: 'Lubię', blank: true },
    { hr: 'šetati planinom.', pl: 'spacerować po górach.' }
  ]},
  { id: 325, category: 'natura', tokens: [
    { hr: 'Rijeka je', pl: 'Rzeka' },
    { hr: 'nabujala', pl: 'wezbrała', blank: true },
    { hr: 'nakon kiše.', pl: 'po deszczu.' }
  ]},
  { id: 326, category: 'natura', tokens: [
    { hr: 'Zrak je ovdje', pl: 'Powietrze jest tu' },
    { hr: 'jako', pl: 'bardzo' },
    { hr: 'čist.', pl: 'czyste.', blank: true }
  ]},
  { id: 327, category: 'natura', tokens: [
    { hr: 'Cvijeće je', pl: 'Kwiaty' },
    { hr: 'procvjetalo', pl: 'zakwitły', blank: true },
    { hr: 'rano ove godine.', pl: 'wcześnie w tym roku.' }
  ]},
  { id: 328, category: 'natura', tokens: [
    { hr: 'Lišće', pl: 'Liście' },
    { hr: 'počinje', pl: 'zaczynają', blank: true },
    { hr: 'padati.', pl: 'opadać.' }
  ]},
  { id: 329, category: 'natura', tokens: [
    { hr: 'Nebo je večeras', pl: 'Niebo jest dziś wieczorem' },
    { hr: 'puno', pl: 'pełne', blank: true },
    { hr: 'zvijezda.', pl: 'gwiazd.' }
  ]},
  { id: 330, category: 'natura', tokens: [
    { hr: 'Vjetar je', pl: 'Wiatr' },
    { hr: 'jako ohladio', pl: 'mocno ochłodził', blank: true },
    { hr: 'zrak.', pl: 'powietrze.' }
  ]},
  { id: 331, category: 'small_talk', tokens: [
    { hr: 'Ma daj', pl: 'Daj spokój', blank: true },
    { hr: ',', pl: ',', punct: true },
    { hr: 'ne vjerujem!', pl: 'nie wierzę!' }
  ]},
  { id: 332, category: 'small_talk', tokens: [
    { hr: 'Nema šanse', pl: 'Nie ma szans', blank: true },
    { hr: 'da to uspije.', pl: 'żeby to się udało.' }
  ]},
  { id: 333, category: 'small_talk', tokens: [
    { hr: 'Ozbiljno?', pl: 'Serio?' },
    { hr: 'Baš me', pl: 'Naprawdę mnie', blank: true },
    { hr: 'iznenadio.', pl: 'zaskoczył.' }
  ]},
  { id: 334, category: 'small_talk', tokens: [
    { hr: 'To je baš', pl: 'To jest naprawdę' },
    { hr: 'super', pl: 'super', blank: true },
    { hr: 'vijest.', pl: 'wiadomość.' }
  ]},
  { id: 335, category: 'small_talk', tokens: [
    { hr: 'Nemoj se', pl: 'Nie', blank: true },
    { hr: 'šaliti sa mnom.', pl: 'żartuj sobie ze mnie.' }
  ]},
  { id: 336, category: 'small_talk', tokens: [
    { hr: 'Šališ se', pl: 'Żartujesz', blank: true },
    { hr: ',', pl: ',', punct: true },
    { hr: 'zar ne?', pl: 'prawda?' }
  ]},
  { id: 337, category: 'small_talk', tokens: [
    { hr: 'Imaš', pl: 'Masz' },
    { hr: 'potpuno', pl: 'całkowitą', blank: true },
    { hr: 'pravo.', pl: 'rację.' }
  ]},
  { id: 338, category: 'small_talk', tokens: [
    { hr: 'Nije me', pl: 'Nie obchodzi mnie', blank: true },
    { hr: 'briga što misle drugi.', pl: 'co myślą inni.' }
  ]},
  { id: 339, category: 'small_talk', tokens: [
    { hr: 'Šteta', pl: 'Szkoda', blank: true },
    { hr: 'što nisi došao.', pl: 'że nie przyszedłeś.' }
  ]},
  { id: 340, category: 'small_talk', tokens: [
    { hr: 'Baš me', pl: 'Naprawdę mnie', blank: true },
    { hr: 'zanima kako će to završiti.', pl: 'ciekawi, jak to się skończy.' }
  ]},
  { id: 341, category: 'plany', tokens: [
    { hr: 'Što', pl: 'Co', blank: true },
    { hr: 'planiraš za vikend?', pl: 'planujesz na weekend?' }
  ]},
  { id: 342, category: 'plany', tokens: [
    { hr: 'Planiramo', pl: 'Planujemy', blank: true },
    { hr: 'selidbu iduće godine.', pl: 'przeprowadzkę w przyszłym roku.' }
  ]},
  { id: 343, category: 'plany', tokens: [
    { hr: 'Još nemam', pl: 'Jeszcze nie mam', blank: true },
    { hr: 'nikakve planove.', pl: 'żadnych planów.' }
  ]},
  { id: 344, category: 'plany', tokens: [
    { hr: 'Idući mjesec', pl: 'W przyszłym miesiącu' },
    { hr: 'idemo', pl: 'jedziemy', blank: true },
    { hr: 'na more.', pl: 'nad morze.' }
  ]},
  { id: 345, category: 'plany', tokens: [
    { hr: 'Sve', pl: 'Wszystko' },
    { hr: 'ovisi', pl: 'zależy', blank: true },
    { hr: 'o vremenu.', pl: 'od pogody.' }
  ]},
  { id: 346, category: 'plany', tokens: [
    { hr: 'Razmišljam', pl: 'Myślę', blank: true },
    { hr: 'o promjeni posla.', pl: 'o zmianie pracy.' }
  ]},
  { id: 347, category: 'plany', tokens: [
    { hr: 'Nadam se', pl: 'Mam nadzieję', blank: true },
    { hr: 'da će sve biti u redu.', pl: 'że wszystko będzie dobrze.' }
  ]},
  { id: 348, category: 'plany', tokens: [
    { hr: 'Odgodili smo', pl: 'Przełożyliśmy', blank: true },
    { hr: 'put za sljedeći tjedan.', pl: 'wyjazd na przyszły tydzień.' }
  ]},
  { id: 349, category: 'plany', tokens: [
    { hr: 'Konačno smo', pl: 'W końcu' },
    { hr: 'odlučili.', pl: 'zdecydowaliśmy.', blank: true }
  ]},
  { id: 350, category: 'plany', tokens: [
    { hr: 'Vidjet ćemo', pl: 'Zobaczymy', blank: true },
    { hr: 'što će biti.', pl: 'co będzie.' }
  ]},
  { id: 351, category: 'prawda_klamstwo', tokens: [
    { hr: 'Reci mi', pl: 'Powiedz mi', blank: true },
    { hr: 'istinu.', pl: 'prawdę.' }
  ]},
  { id: 352, category: 'prawda_klamstwo', tokens: [
    { hr: 'Ne lažeš mi', pl: 'Chyba mi nie', blank: true },
    { hr: 'valjda?', pl: 'kłamiesz?' }
  ]},
  { id: 353, category: 'prawda_klamstwo', tokens: [
    { hr: 'To uopće', pl: 'To wcale' },
    { hr: 'nije', pl: 'nie jest', blank: true },
    { hr: 'istina.', pl: 'prawda.' }
  ]},
  { id: 354, category: 'prawda_klamstwo', tokens: [
    { hr: 'Vjeruj mi', pl: 'Uwierz mi', blank: true },
    { hr: 'na riječ.', pl: 'na słowo.' }
  ]},
  { id: 355, category: 'prawda_klamstwo', tokens: [
    { hr: 'Nisam te htio', pl: 'Nie chciałem cię', blank: true },
    { hr: 'slagati.', pl: 'okłamać.' }
  ]},
  { id: 356, category: 'prawda_klamstwo', tokens: [
    { hr: 'To zvuči', pl: 'To brzmi', blank: true },
    { hr: 'kao izgovor.', pl: 'jak wymówka.' }
  ]},
  { id: 357, category: 'prawda_klamstwo', tokens: [
    { hr: 'Priznajem', pl: 'Przyznaję', blank: true },
    { hr: ',', pl: ',', punct: true },
    { hr: 'pogriješio sam.', pl: 'pomyliłem się.' }
  ]},
  { id: 358, category: 'prawda_klamstwo', tokens: [
    { hr: 'On uvijek', pl: 'On zawsze' },
    { hr: 'govori', pl: 'mówi', blank: true },
    { hr: 'istinu.', pl: 'prawdę.' }
  ]},
  { id: 359, category: 'prawda_klamstwo', tokens: [
    { hr: 'Sumnjam', pl: 'Wątpię', blank: true },
    { hr: 'da je to točno.', pl: 'że to prawda.' }
  ]},
  { id: 360, category: 'prawda_klamstwo', tokens: [
    { hr: 'Sad mi je sve', pl: 'Teraz wszystko jest dla mnie' },
    { hr: 'jasno.', pl: 'jasne.', blank: true }
  ]},
  { id: 361, category: 'dzieci', tokens: [
    { hr: 'Djeca se', pl: 'Dzieci' },
    { hr: 'igraju', pl: 'bawią się', blank: true },
    { hr: 'u dvorištu.', pl: 'na podwórku.' }
  ]},
  { id: 362, category: 'dzieci', tokens: [
    { hr: 'Sin mi je danas', pl: 'Mój syn' },
    { hr: 'naučio', pl: 'nauczył się', blank: true },
    { hr: 'novu riječ.', pl: 'dziś nowego słowa.' }
  ]},
  { id: 363, category: 'dzieci', tokens: [
    { hr: 'Kćer mi', pl: 'Moja córka' },
    { hr: 'ide', pl: 'chodzi', blank: true },
    { hr: 'u vrtić.', pl: 'do przedszkola.' }
  ]},
  { id: 364, category: 'dzieci', tokens: [
    { hr: 'Djeca su danas jako', pl: 'Dzieci są dzisiaj bardzo' },
    { hr: 'bučna.', pl: 'głośne.', blank: true }
  ]},
  { id: 365, category: 'dzieci', tokens: [
    { hr: 'Vrijeme je za', pl: 'Czas', blank: true },
    { hr: 'spavanje, djeco.', pl: 'spać, dzieci.' }
  ]},
  { id: 366, category: 'dzieci', tokens: [
    { hr: 'Ne diraj', pl: 'Nie dotykaj', blank: true },
    { hr: 'to, opasno je.', pl: 'tego, to niebezpieczne.' }
  ]},
  { id: 367, category: 'dzieci', tokens: [
    { hr: 'Sin mi je', pl: 'Mój syn' },
    { hr: 'pao', pl: 'spadł', blank: true },
    { hr: 's bicikla.', pl: 'z roweru.' }
  ]},
  { id: 368, category: 'dzieci', tokens: [
    { hr: 'Kćer voli', pl: 'Córka lubi' },
    { hr: 'crtati', pl: 'rysować', blank: true },
    { hr: 'životinje.', pl: 'zwierzęta.' }
  ]},
  { id: 369, category: 'dzieci', tokens: [
    { hr: 'Djeca su', pl: 'Dzieci są' },
    { hr: 'gladna', pl: 'głodne', blank: true },
    { hr: ',', pl: ',', punct: true },
    { hr: 'moramo ručati.', pl: 'musimy zjeść obiad.' }
  ]},
  { id: 370, category: 'dzieci', tokens: [
    { hr: 'Pazi', pl: 'Popilnuj', blank: true },
    { hr: 'na malog brata.', pl: 'małego brata.' }
  ]},
  { id: 371, category: 'sasiedzi', tokens: [
    { hr: 'Susjed je', pl: 'Sąsiad' },
    { hr: 'opet', pl: 'znowu' },
    { hr: 'glasan.', pl: 'jest głośny.', blank: true }
  ]},
  { id: 372, category: 'sasiedzi', tokens: [
    { hr: 'Naši susjedi su', pl: 'Nasi sąsiedzi są' },
    { hr: 'jako', pl: 'bardzo' },
    { hr: 'ljubazni.', pl: 'mili.', blank: true }
  ]},
  { id: 373, category: 'sasiedzi', tokens: [
    { hr: 'Posudio sam', pl: 'Pożyczyłem', blank: true },
    { hr: 'alat od susjeda.', pl: 'narzędzie od sąsiada.' }
  ]},
  { id: 374, category: 'sasiedzi', tokens: [
    { hr: 'Susjedov pas', pl: 'Pies sąsiada' },
    { hr: 'non-stop', pl: 'bez przerwy' },
    { hr: 'laje.', pl: 'szczeka.', blank: true }
  ]},
  { id: 375, category: 'sasiedzi', tokens: [
    { hr: 'Preselili su se', pl: 'Wprowadzili się', blank: true },
    { hr: 'novi susjedi.', pl: 'nowi sąsiedzi.' }
  ]},
  { id: 376, category: 'sasiedzi', tokens: [
    { hr: 'Moramo se', pl: 'Musimy się' },
    { hr: 'predstaviti', pl: 'przedstawić', blank: true },
    { hr: 'novim susjedima.', pl: 'nowym sąsiadom.' }
  ]},
  { id: 377, category: 'sasiedzi', tokens: [
    { hr: 'Susjeda je', pl: 'Sąsiadka' },
    { hr: 'pokucala', pl: 'zapukała', blank: true },
    { hr: 'na vrata.', pl: 'do drzwi.' }
  ]},
  { id: 378, category: 'sasiedzi', tokens: [
    { hr: 'Zajedno', pl: 'Razem' },
    { hr: 'čistimo', pl: 'sprzątamy', blank: true },
    { hr: 'dvorište.', pl: 'podwórko.' }
  ]},
  { id: 379, category: 'sasiedzi', tokens: [
    { hr: 'Susjedi', pl: 'Sąsiedzi' },
    { hr: 'organiziraju', pl: 'organizują', blank: true },
    { hr: 'zabavu sutra.', pl: 'imprezę jutro.' }
  ]},
  { id: 380, category: 'sasiedzi', tokens: [
    { hr: 'Živimo ovdje', pl: 'Mieszkamy tu' },
    { hr: 'već', pl: 'już', blank: true },
    { hr: 'deset godina.', pl: 'dziesięć lat.' }
  ]},
  { id: 381, category: 'impreza', tokens: [
    { hr: 'Organiziramo', pl: 'Organizujemy', blank: true },
    { hr: 'zabavu za rođendan.', pl: 'imprezę na urodziny.' }
  ]},
  { id: 382, category: 'impreza', tokens: [
    { hr: 'Tko sve', pl: 'Kto', blank: true },
    { hr: 'dolazi večeras?', pl: 'dzisiaj przychodzi wieczorem?' }
  ]},
  { id: 383, category: 'impreza', tokens: [
    { hr: 'Donesi', pl: 'Przynieś', blank: true },
    { hr: 'nešto za piće.', pl: 'coś do picia.' }
  ]},
  { id: 384, category: 'impreza', tokens: [
    { hr: 'Zabava je bila', pl: 'Impreza była' },
    { hr: 'odlična.', pl: 'świetna.', blank: true }
  ]},
  { id: 385, category: 'impreza', tokens: [
    { hr: 'Glazba je bila', pl: 'Muzyka była' },
    { hr: 'preglasna.', pl: 'za głośna.', blank: true }
  ]},
  { id: 386, category: 'impreza', tokens: [
    { hr: 'Ostajemo', pl: 'Zostajemy', blank: true },
    { hr: 'do kasno.', pl: 'do późna.' }
  ]},
  { id: 387, category: 'impreza', tokens: [
    { hr: 'Svi su se', pl: 'Wszyscy się' },
    { hr: 'dobro', pl: 'dobrze' },
    { hr: 'zabavili.', pl: 'bawili.', blank: true }
  ]},
  { id: 388, category: 'impreza', tokens: [
    { hr: 'Moramo', pl: 'Musimy', blank: true },
    { hr: 'sve pospremiti poslije.', pl: 'potem wszystko posprzątać.' }
  ]},
  { id: 389, category: 'impreza', tokens: [
    { hr: 'Iznenadili smo je', pl: 'Zaskoczyliśmy ją', blank: true },
    { hr: 'tortom.', pl: 'tortem.' }
  ]},
  { id: 390, category: 'impreza', tokens: [
    { hr: 'Zabava', pl: 'Impreza' },
    { hr: 'počinje', pl: 'zaczyna się', blank: true },
    { hr: 'u osam.', pl: 'o ósmej.' }
  ]},
  { id: 391, category: 'wakacje', tokens: [
    { hr: 'Idemo', pl: 'Jedziemy' },
    { hr: 'na godišnji odmor', pl: 'na urlop', blank: true },
    { hr: 'u srpnju.', pl: 'w lipcu.' }
  ]},
  { id: 392, category: 'wakacje', tokens: [
    { hr: 'Rezervirali smo', pl: 'Zarezerwowaliśmy', blank: true },
    { hr: 'hotel na moru.', pl: 'hotel nad morzem.' }
  ]},
  { id: 393, category: 'wakacje', tokens: [
    { hr: 'Kamo', pl: 'Dokąd', blank: true },
    { hr: 'idete ove godine?', pl: 'jedziecie w tym roku?' }
  ]},
  { id: 394, category: 'wakacje', tokens: [
    { hr: 'Trebam se', pl: 'Muszę się' },
    { hr: 'spakirati', pl: 'spakować', blank: true },
    { hr: 'za put.', pl: 'na wyjazd.' }
  ]},
  { id: 395, category: 'wakacje', tokens: [
    { hr: 'Ne mogu', pl: 'Nie mogę się', blank: true },
    { hr: 'čekati odmor.', pl: 'doczekać wakacji.' }
  ]},
  { id: 396, category: 'wakacje', tokens: [
    { hr: 'Plaža je danas', pl: 'Plaża jest dzisiaj' },
    { hr: 'prepuna.', pl: 'przepełniona.', blank: true }
  ]},
  { id: 397, category: 'wakacje', tokens: [
    { hr: 'Vratili smo se', pl: 'Wróciliśmy', blank: true },
    { hr: 's odmora jučer.', pl: 'z wakacji wczoraj.' }
  ]},
  { id: 398, category: 'wakacje', tokens: [
    { hr: 'Kupili smo', pl: 'Kupiliśmy', blank: true },
    { hr: 'suvenire za obitelj.', pl: 'pamiątki dla rodziny.' }
  ]},
  { id: 399, category: 'wakacje', tokens: [
    { hr: 'Ovo ljeto je bilo', pl: 'To lato było' },
    { hr: 'nezaboravno.', pl: 'niezapomniane.', blank: true }
  ]},
  { id: 400, category: 'wakacje', tokens: [
    { hr: 'Sljedeće godine', pl: 'W przyszłym roku' },
    { hr: 'idemo', pl: 'jedziemy', blank: true },
    { hr: 'negdje drugdje.', pl: 'gdzieś indziej.' }
  ]},
  { id: 401, category: 'samochod', tokens: [
    { hr: 'Auto mi se', pl: 'Samochód mi się' },
    { hr: 'pokvario', pl: 'zepsuł', blank: true },
    { hr: 'na cesti.', pl: 'na drodze.' }
  ]},
  { id: 402, category: 'samochod', tokens: [
    { hr: 'Moram', pl: 'Muszę', blank: true },
    { hr: 'napuniti gorivo.', pl: 'zatankować.' }
  ]},
  { id: 403, category: 'samochod', tokens: [
    { hr: 'Guma mi je', pl: 'Pękła mi' },
    { hr: 'pukla.', pl: 'opona.', blank: true }
  ]},
  { id: 404, category: 'samochod', tokens: [
    { hr: 'Parkirao sam', pl: 'Zaparkowałem', blank: true },
    { hr: 'ispred zgrade.', pl: 'przed budynkiem.' }
  ]},
  { id: 405, category: 'samochod', tokens: [
    { hr: 'Nema', pl: 'Nie ma', blank: true },
    { hr: 'mjesta za parkiranje.', pl: 'miejsca do parkowania.' }
  ]},
  { id: 406, category: 'samochod', tokens: [
    { hr: 'Vozi', pl: 'Jedź', blank: true },
    { hr: 'oprezno, cesta je skliska.', pl: 'ostrożnie, droga jest śliska.' }
  ]},
  { id: 407, category: 'samochod', tokens: [
    { hr: 'Auto mi treba', pl: 'Samochód potrzebuje', blank: true },
    { hr: 'servis.', pl: 'przeglądu.' }
  ]},
  { id: 408, category: 'samochod', tokens: [
    { hr: 'Zaboravio sam', pl: 'Zapomniałem', blank: true },
    { hr: 'ključeve u autu.', pl: 'kluczyków w samochodzie.' }
  ]},
  { id: 409, category: 'samochod', tokens: [
    { hr: 'Kupujem', pl: 'Kupuję', blank: true },
    { hr: 'novi auto sljedeći mjesec.', pl: 'nowy samochód w przyszłym miesiącu.' }
  ]},
  { id: 410, category: 'samochod', tokens: [
    { hr: 'U prometnoj smo', pl: 'Utknęliśmy', blank: true },
    { hr: 'gužvi.', pl: 'w korku.' }
  ]},
  { id: 411, category: 'randki', tokens: [
    { hr: 'Idem', pl: 'Idę' },
    { hr: 'na spoj', pl: 'na randkę', blank: true },
    { hr: 'večeras.', pl: 'dziś wieczorem.' }
  ]},
  { id: 412, category: 'randki', tokens: [
    { hr: 'Baš mi se', pl: 'Naprawdę mi się', blank: true },
    { hr: 'sviđaš.', pl: 'podobasz.' }
  ]},
  { id: 413, category: 'randki', tokens: [
    { hr: 'Hoćeš li', pl: 'Chcesz się' },
    { hr: 'izaći', pl: 'spotkać', blank: true },
    { hr: 'sa mnom?', pl: 'ze mną?' }
  ]},
  { id: 414, category: 'randki', tokens: [
    { hr: 'Prvi spoj je bio', pl: 'Pierwsza randka była' },
    { hr: 'pomalo', pl: 'trochę', blank: true },
    { hr: 'neugodan.', pl: 'niezręczna.' }
  ]},
  { id: 415, category: 'randki', tokens: [
    { hr: 'Zajedno smo', pl: 'Jesteśmy razem' },
    { hr: 'već', pl: 'już', blank: true },
    { hr: 'dvije godine.', pl: 'dwa lata.' }
  ]},
  { id: 416, category: 'randki', tokens: [
    { hr: 'Prekinuli smo', pl: 'Rozstaliśmy się', blank: true },
    { hr: 'prošli mjesec.', pl: 'w zeszłym miesiącu.' }
  ]},
  { id: 417, category: 'randki', tokens: [
    { hr: 'On mi je', pl: 'On jest mi' },
    { hr: 'zapravo jako', pl: 'naprawdę' },
    { hr: 'drag.', pl: 'bliski.', blank: true }
  ]},
  { id: 418, category: 'randki', tokens: [
    { hr: 'Upoznali smo se', pl: 'Poznaliśmy się', blank: true },
    { hr: 'preko prijatelja.', pl: 'przez znajomych.' }
  ]},
  { id: 419, category: 'randki', tokens: [
    { hr: 'Dogovorili smo se', pl: 'Umówiliśmy się', blank: true },
    { hr: 'za kavu.', pl: 'na kawę.' }
  ]},
  { id: 420, category: 'randki', tokens: [
    { hr: 'Nemoj mi', pl: 'Nie', blank: true },
    { hr: 'slomiti srce.', pl: 'złam mi serca.' }
  ]},
  { id: 421, category: 'ubrania', tokens: [
    { hr: 'Ova majica mi je', pl: 'Ta koszulka jest na mnie' },
    { hr: 'premala.', pl: 'za mała.', blank: true }
  ]},
  { id: 422, category: 'ubrania', tokens: [
    { hr: 'Trebam', pl: 'Potrzebuję', blank: true },
    { hr: 'nove cipele za zimu.', pl: 'nowych butów na zimę.' }
  ]},
  { id: 423, category: 'ubrania', tokens: [
    { hr: 'Obuci', pl: 'Ubierz', blank: true },
    { hr: 'nešto toplije.', pl: 'coś cieplejszego.' }
  ]},
  { id: 424, category: 'ubrania', tokens: [
    { hr: 'Ova boja ti', pl: 'Ten kolor' },
    { hr: 'baš', pl: 'bardzo' },
    { hr: 'pristaje.', pl: 'ci pasuje.', blank: true }
  ]},
  { id: 425, category: 'ubrania', tokens: [
    { hr: 'Skinuo sam', pl: 'Zdjąłem', blank: true },
    { hr: 'jaknu, prevruće mi je.', pl: 'kurtkę, jest mi za gorąco.' }
  ]},
  { id: 426, category: 'ubrania', tokens: [
    { hr: 'Poderao sam', pl: 'Podarłem', blank: true },
    { hr: 'hlače.', pl: 'spodnie.' }
  ]},
  { id: 427, category: 'ubrania', tokens: [
    { hr: 'Peremo', pl: 'Pierzemy', blank: true },
    { hr: 'veš danas poslijepodne.', pl: 'pranie dziś po południu.' }
  ]},
  { id: 428, category: 'ubrania', tokens: [
    { hr: 'Ova jakna je', pl: 'Ta kurtka jest' },
    { hr: 'iz prošle sezone.', pl: 'z zeszłego sezonu.', blank: true }
  ]},
  { id: 429, category: 'ubrania', tokens: [
    { hr: 'Kupila sam', pl: 'Kupiłam', blank: true },
    { hr: 'novu haljinu za zabavu.', pl: 'nową sukienkę na imprezę.' }
  ]},
  { id: 430, category: 'ubrania', tokens: [
    { hr: 'Nemam se', pl: 'Nie mam się', blank: true },
    { hr: 'što obući.', pl: 'w co ubrać.' }
  ]},
  { id: 431, category: 'ksiazki', tokens: [
    { hr: 'Čitam', pl: 'Czytam', blank: true },
    { hr: 'novu knjigu ovaj tjedan.', pl: 'nową książkę w tym tygodniu.' }
  ]},
  { id: 432, category: 'ksiazki', tokens: [
    { hr: 'Ova knjiga je', pl: 'Ta książka jest' },
    { hr: 'stvarno', pl: 'naprawdę' },
    { hr: 'napeta.', pl: 'wciągająca.', blank: true }
  ]},
  { id: 433, category: 'ksiazki', tokens: [
    { hr: 'Još nisam', pl: 'Jeszcze nie', blank: true },
    { hr: 'pročitao kraj.', pl: 'przeczytałem zakończenia.' }
  ]},
  { id: 434, category: 'ksiazki', tokens: [
    { hr: 'Posudi mi', pl: 'Pożycz mi', blank: true },
    { hr: 'tu knjigu kad završiš.', pl: 'tę książkę, jak skończysz.' }
  ]},
  { id: 435, category: 'ksiazki', tokens: [
    { hr: 'Ne volim', pl: 'Nie lubię', blank: true },
    { hr: 'knjige bez sretnog kraja.', pl: 'książek bez szczęśliwego zakończenia.' }
  ]},
  { id: 436, category: 'ksiazki', tokens: [
    { hr: 'Vratio sam', pl: 'Oddałem', blank: true },
    { hr: 'knjigu u knjižnicu.', pl: 'książkę do biblioteki.' }
  ]},
  { id: 437, category: 'ksiazki', tokens: [
    { hr: 'Ova priča me', pl: 'Ta historia' },
    { hr: 'rasplakala.', pl: 'doprowadziła mnie do łez.', blank: true }
  ]},
  { id: 438, category: 'ksiazki', tokens: [
    { hr: 'Preporučuješ li mi', pl: 'Polecasz mi', blank: true },
    { hr: 'ovu knjigu?', pl: 'tę książkę?' }
  ]},
  { id: 439, category: 'ksiazki', tokens: [
    { hr: 'Volim', pl: 'Lubię', blank: true },
    { hr: 'čitati prije spavanja.', pl: 'czytać przed snem.' }
  ]},
  { id: 440, category: 'ksiazki', tokens: [
    { hr: 'Kupila sam', pl: 'Kupiłam', blank: true },
    { hr: 'tri nove knjige.', pl: 'trzy nowe książki.' }
  ]},
  { id: 441, category: 'gry', tokens: [
    { hr: 'Igram', pl: 'Gram', blank: true },
    { hr: 'tu igru svaki dan.', pl: 'w tę grę codziennie.' }
  ]},
  { id: 442, category: 'gry', tokens: [
    { hr: 'Nemoj', pl: 'Nie', blank: true },
    { hr: 'varati u igri.', pl: 'oszukuj w grze.' }
  ]},
  { id: 443, category: 'gry', tokens: [
    { hr: 'Zapeo sam', pl: 'Utknąłem', blank: true },
    { hr: 'na ovoj razini.', pl: 'na tym poziomie.' }
  ]},
  { id: 444, category: 'gry', tokens: [
    { hr: 'Konzola mi se', pl: 'Konsola mi się' },
    { hr: 'zamrznula.', pl: 'zawiesiła.', blank: true }
  ]},
  { id: 445, category: 'gry', tokens: [
    { hr: 'Igramo', pl: 'Gramy', blank: true },
    { hr: 'online zajedno.', pl: 'razem online.' }
  ]},
  { id: 446, category: 'gry', tokens: [
    { hr: 'Ova igra ima', pl: 'Ta gra ma' },
    { hr: 'odličnu', pl: 'świetną', blank: true },
    { hr: 'grafiku.', pl: 'grafikę.' }
  ]},
  { id: 447, category: 'gry', tokens: [
    { hr: 'Pobijedio sam', pl: 'Wygrałem', blank: true },
    { hr: 'na kraju.', pl: 'na koniec.' }
  ]},
  { id: 448, category: 'gry', tokens: [
    { hr: 'Igra', pl: 'Gra' },
    { hr: 'izlazi', pl: 'wychodzi', blank: true },
    { hr: 'iduće godine.', pl: 'w przyszłym roku.' }
  ]},
  { id: 449, category: 'gry', tokens: [
    { hr: 'Preuzeo sam', pl: 'Ściągnąłem', blank: true },
    { hr: 'novu igru.', pl: 'nową grę.' }
  ]},
  { id: 450, category: 'gry', tokens: [
    { hr: 'Igraš li', pl: 'Grasz' },
    { hr: 'konzolu', pl: 'na konsoli', blank: true },
    { hr: 'ili računalo?', pl: 'czy na komputerze?' }
  ]},
  { id: 451, category: 'kariera', tokens: [
    { hr: 'Tražim', pl: 'Szukam', blank: true },
    { hr: 'posao već mjesecima.', pl: 'pracy od miesięcy.' }
  ]},
  { id: 452, category: 'kariera', tokens: [
    { hr: 'Poslao sam', pl: 'Wysłałem', blank: true },
    { hr: 'prijavu jučer.', pl: 'zgłoszenie wczoraj.' }
  ]},
  { id: 453, category: 'kariera', tokens: [
    { hr: 'Imam', pl: 'Mam' },
    { hr: 'razgovor za posao', pl: 'rozmowę o pracę', blank: true },
    { hr: 'sutra.', pl: 'jutro.' }
  ]},
  { id: 454, category: 'kariera', tokens: [
    { hr: 'Dobio sam', pl: 'Dostałem', blank: true },
    { hr: 'otkaz prošli tjedan.', pl: 'wypowiedzenie w zeszłym tygodniu.' }
  ]},
  { id: 455, category: 'kariera', tokens: [
    { hr: 'Napredovao sam', pl: 'Awansowałem', blank: true },
    { hr: 'na poslu.', pl: 'w pracy.' }
  ]},
  { id: 456, category: 'kariera', tokens: [
    { hr: 'Radim', pl: 'Pracuję', blank: true },
    { hr: 'prekovremeno ovaj tjedan.', pl: 'w nadgodzinach w tym tygodniu.' }
  ]},
  { id: 457, category: 'kariera', tokens: [
    { hr: 'Šef me', pl: 'Szef mnie' },
    { hr: 'pohvalio', pl: 'pochwalił', blank: true },
    { hr: 'danas.', pl: 'dzisiaj.' }
  ]},
  { id: 458, category: 'kariera', tokens: [
    { hr: 'Dajem', pl: 'Składam', blank: true },
    { hr: 'otkaz sljedeći mjesec.', pl: 'wypowiedzenie w przyszłym miesiącu.' }
  ]},
  { id: 459, category: 'kariera', tokens: [
    { hr: 'Volim', pl: 'Lubię', blank: true },
    { hr: 'svoj posao.', pl: 'swoją pracę.' }
  ]},
  { id: 460, category: 'kariera', tokens: [
    { hr: 'Kolega mi je dao', pl: 'Kolega dał mi', blank: true },
    { hr: 'dobar savjet.', pl: 'dobrą radę.' }
  ]},
  { id: 461, category: 'lotnisko', tokens: [
    { hr: 'Let nam', pl: 'Nasz lot' },
    { hr: 'kasni', pl: 'ma', blank: true },
    { hr: 'sat vremena.', pl: 'godzinę opóźnienia.' }
  ]},
  { id: 462, category: 'lotnisko', tokens: [
    { hr: 'Moramo se', pl: 'Musimy się' },
    { hr: 'prijaviti', pl: 'zameldować', blank: true },
    { hr: 'na let.', pl: 'na lot.' }
  ]},
  { id: 463, category: 'lotnisko', tokens: [
    { hr: 'Gdje je', pl: 'Gdzie jest' },
    { hr: 'izlaz za ukrcaj?', pl: 'wyjście do odprawy?', blank: true }
  ]},
  { id: 464, category: 'lotnisko', tokens: [
    { hr: 'Prtljaga mi je', pl: 'Mój bagaż' },
    { hr: 'izgubljena.', pl: 'zaginął.', blank: true }
  ]},
  { id: 465, category: 'lotnisko', tokens: [
    { hr: 'Imam', pl: 'Mam' },
    { hr: 'samo', pl: 'tylko', blank: true },
    { hr: 'ručnu prtljagu.', pl: 'bagaż podręczny.' }
  ]},
  { id: 466, category: 'lotnisko', tokens: [
    { hr: 'Sigurnosna provjera', pl: 'Kontrola bezpieczeństwa' },
    { hr: 'traje', pl: 'trwa', blank: true },
    { hr: 'dugo.', pl: 'długo.' }
  ]},
  { id: 467, category: 'lotnisko', tokens: [
    { hr: 'Ukrcaj', pl: 'Boarding' },
    { hr: 'počinje', pl: 'zaczyna się', blank: true },
    { hr: 'za deset minuta.', pl: 'za dziesięć minut.' }
  ]},
  { id: 468, category: 'lotnisko', tokens: [
    { hr: 'Zaboravio sam', pl: 'Zapomniałem', blank: true },
    { hr: 'iskaznicu kod kuće.', pl: 'dowodu w domu.' }
  ]},
  { id: 469, category: 'lotnisko', tokens: [
    { hr: 'Slijećemo', pl: 'Lądujemy', blank: true },
    { hr: 'za pola sata.', pl: 'za pół godziny.' }
  ]},
  { id: 470, category: 'lotnisko', tokens: [
    { hr: 'Ovo je moj prvi', pl: 'To mój pierwszy' },
    { hr: 'let', pl: 'lot', blank: true },
    { hr: 'ikad.', pl: 'w życiu.' }
  ]},
  { id: 471, category: 'komplementy', tokens: [
    { hr: 'Baš dobro', pl: 'Naprawdę dobrze', blank: true },
    { hr: 'izgledaš danas.', pl: 'dziś wyglądasz.' }
  ]},
  { id: 472, category: 'komplementy', tokens: [
    { hr: 'Sviđa mi se', pl: 'Podoba mi się', blank: true },
    { hr: 'tvoja frizura.', pl: 'twoja fryzura.' }
  ]},
  { id: 473, category: 'komplementy', tokens: [
    { hr: 'Ti si stvarno', pl: 'Jesteś naprawdę' },
    { hr: 'pametna', pl: 'mądrą', blank: true },
    { hr: 'osoba.', pl: 'osobą.' }
  ]},
  { id: 474, category: 'komplementy', tokens: [
    { hr: 'Odlično si', pl: 'Świetnie', blank: true },
    { hr: 'to obavio.', pl: 'to zrobiłeś.' }
  ]},
  { id: 475, category: 'komplementy', tokens: [
    { hr: 'Baš imaš', pl: 'Masz naprawdę' },
    { hr: 'lijep', pl: 'piękny', blank: true },
    { hr: 'osmijeh.', pl: 'uśmiech.' }
  ]},
  { id: 476, category: 'komplementy', tokens: [
    { hr: 'Jako si mi', pl: 'Bardzo mi' },
    { hr: 'pomogao.', pl: 'pomogłeś.', blank: true }
  ]},
  { id: 477, category: 'komplementy', tokens: [
    { hr: 'Ponosim se', pl: 'Jestem z ciebie', blank: true },
    { hr: 'tobom.', pl: 'dumny.' }
  ]},
  { id: 478, category: 'komplementy', tokens: [
    { hr: 'Ti si', pl: 'Jesteś' },
    { hr: 'najbolji', pl: 'najlepszym', blank: true },
    { hr: 'prijatelj.', pl: 'przyjacielem.' }
  ]},
  { id: 479, category: 'komplementy', tokens: [
    { hr: 'Stvarno imaš', pl: 'Naprawdę masz', blank: true },
    { hr: 'talent za to.', pl: 'do tego talent.' }
  ]},
  { id: 480, category: 'komplementy', tokens: [
    { hr: 'Hvala ti', pl: 'Dziękuję', blank: true },
    { hr: 'što si takav kakav jesi.', pl: 'że jesteś taki, jaki jesteś.' }
  ]},
  { id: 481, category: 'stres', tokens: [
    { hr: 'Malo sam', pl: 'Jestem trochę', blank: true },
    { hr: 'pod stresom zadnjih dana.', pl: 'zestresowany ostatnimi dniami.' }
  ]},
  { id: 482, category: 'stres', tokens: [
    { hr: 'Trebam', pl: 'Potrzebuję', blank: true },
    { hr: 'predah od svega.', pl: 'odpoczynku od wszystkiego.' }
  ]},
  { id: 483, category: 'stres', tokens: [
    { hr: 'Previše toga', pl: 'Zbyt wiele' },
    { hr: 'imam', pl: 'mam', blank: true },
    { hr: 'na glavi.', pl: 'na głowie.' }
  ]},
  { id: 484, category: 'stres', tokens: [
    { hr: 'Duboko', pl: 'Weź głęboki', blank: true },
    { hr: 'udahni i smiri se.', pl: 'oddech i się uspokój.' }
  ]},
  { id: 485, category: 'stres', tokens: [
    { hr: 'Ne stignem', pl: 'Nie zdążę', blank: true },
    { hr: 'sve obaviti.', pl: 'wszystkiego zrobić.' }
  ]},
  { id: 486, category: 'stres', tokens: [
    { hr: 'Trebam', pl: 'Potrzebuję', blank: true },
    { hr: 'malo vremena za sebe.', pl: 'trochę czasu dla siebie.' }
  ]},
  { id: 487, category: 'stres', tokens: [
    { hr: 'Osjećam se', pl: 'Czuję się', blank: true },
    { hr: 'preopterećeno poslom.', pl: 'przytłoczony pracą.' }
  ]},
  { id: 488, category: 'stres', tokens: [
    { hr: 'Moram', pl: 'Muszę', blank: true },
    { hr: 'usporiti malo.', pl: 'trochę zwolnić.' }
  ]},
  { id: 489, category: 'stres', tokens: [
    { hr: 'Sve će biti', pl: 'Jutro wszystko będzie', blank: true },
    { hr: 'lakše sutra.', pl: 'łatwiejsze.' }
  ]},
  { id: 490, category: 'stres', tokens: [
    { hr: 'Ne brini se', pl: 'Nie martw się', blank: true },
    { hr: 'toliko.', pl: 'tak bardzo.' }
  ]},
  { id: 491, category: 'hobby', tokens: [
    { hr: 'Slikam', pl: 'Maluję', blank: true },
    { hr: 'u slobodno vrijeme.', pl: 'w wolnym czasie.' }
  ]},
  { id: 492, category: 'hobby', tokens: [
    { hr: 'Volim', pl: 'Lubię', blank: true },
    { hr: 'vrtlariti vikendom.', pl: 'uprawiać ogród w weekendy.' }
  ]},
  { id: 493, category: 'hobby', tokens: [
    { hr: 'Pletem', pl: 'Robię na drutach', blank: true },
    { hr: 'šalove zimi.', pl: 'szaliki zimą.' }
  ]},
  { id: 494, category: 'hobby', tokens: [
    { hr: 'Fotografiram', pl: 'Fotografuję', blank: true },
    { hr: 'prirodu.', pl: 'przyrodę.' }
  ]},
  { id: 495, category: 'hobby', tokens: [
    { hr: 'Skupljam', pl: 'Zbieram', blank: true },
    { hr: 'stare razglednice.', pl: 'stare pocztówki.' }
  ]},
  { id: 496, category: 'hobby', tokens: [
    { hr: 'Pecam', pl: 'Łowię', blank: true },
    { hr: 'ribu svake subote.', pl: 'ryby w każdą sobotę.' }
  ]},
  { id: 497, category: 'hobby', tokens: [
    { hr: 'Peče', pl: 'Piecze', blank: true },
    { hr: 'kruh svaki tjedan.', pl: 'chleb co tydzień.' }
  ]},
  { id: 498, category: 'hobby', tokens: [
    { hr: 'Sviram', pl: 'Gram', blank: true },
    { hr: 'klavir već pet godina.', pl: 'na pianinie już pięć lat.' }
  ]},
  { id: 499, category: 'hobby', tokens: [
    { hr: 'Volim', pl: 'Lubię', blank: true },
    { hr: 'rješavati križaljke.', pl: 'rozwiązywać krzyżówki.' }
  ]},
  { id: 500, category: 'hobby', tokens: [
    { hr: 'Ovaj hobi me', pl: 'To hobby' },
    { hr: 'stvarno', pl: 'naprawdę' },
    { hr: 'opušta.', pl: 'mnie relaksuje.', blank: true }
  ]}
]