// UWAGA: formy czasownikowe wymagają weryfikacji przez native speakera.
// Perfekt: domyślnie forma męska dla "Ja/Ti/On", żeńska dla "Ona",
// wspólna (-li) dla liczby mnogiej. W formach zwrotnych 3. os. l.poj.
// ("se vratila") pominięto "je" przed "se" — to standardowa zasada
// w chorwackim, nie błąd.

export const conjugationExercises = [
  // ===== PREZENT =====

  // raditi (pracować)
  { id: 1, tense: 'prezent', infinitive: 'raditi (pracować)', pl: 'Pracuję codziennie.', before: 'Ja', after: 'svaki dan.', answer: 'radim' },
  { id: 2, tense: 'prezent', infinitive: 'raditi (pracować)', pl: 'Pracujesz codziennie.', before: 'Ti', after: 'svaki dan.', answer: 'radiš' },
  { id: 3, tense: 'prezent', infinitive: 'raditi (pracować)', pl: 'On pracuje codziennie.', before: 'On', after: 'svaki dan.', answer: 'radi' },
  { id: 4, tense: 'prezent', infinitive: 'raditi (pracować)', pl: 'Pracujemy codziennie.', before: 'Mi', after: 'svaki dan.', answer: 'radimo' },
  { id: 5, tense: 'prezent', infinitive: 'raditi (pracować)', pl: 'Pracujecie codziennie.', before: 'Vi', after: 'svaki dan.', answer: 'radite' },
  { id: 6, tense: 'prezent', infinitive: 'raditi (pracować)', pl: 'Oni pracują codziennie.', before: 'Oni', after: 'svaki dan.', answer: 'rade' },

  // pisati (pisać)
  { id: 7, tense: 'prezent', infinitive: 'pisati (pisać)', pl: 'Piszę list.', before: 'Ja', after: 'pismo.', answer: 'pišem' },
  { id: 8, tense: 'prezent', infinitive: 'pisati (pisać)', pl: 'Piszesz list.', before: 'Ti', after: 'pismo.', answer: 'pišeš' },
  { id: 9, tense: 'prezent', infinitive: 'pisati (pisać)', pl: 'Ona pisze list.', before: 'Ona', after: 'pismo.', answer: 'piše' },
  { id: 10, tense: 'prezent', infinitive: 'pisati (pisać)', pl: 'Piszemy list.', before: 'Mi', after: 'pismo.', answer: 'pišemo' },
  { id: 11, tense: 'prezent', infinitive: 'pisati (pisać)', pl: 'Piszecie list.', before: 'Vi', after: 'pismo.', answer: 'pišete' },
  { id: 12, tense: 'prezent', infinitive: 'pisati (pisać)', pl: 'Oni piszą list.', before: 'Oni', after: 'pismo.', answer: 'pišu' },

  // piti (pić)
  { id: 13, tense: 'prezent', infinitive: 'piti (pić)', pl: 'Piję wodę.', before: 'Ja', after: 'vodu.', answer: 'pijem' },
  { id: 14, tense: 'prezent', infinitive: 'piti (pić)', pl: 'Pijesz wodę.', before: 'Ti', after: 'vodu.', answer: 'piješ' },
  { id: 15, tense: 'prezent', infinitive: 'piti (pić)', pl: 'On pije wodę.', before: 'On', after: 'vodu.', answer: 'pije' },
  { id: 16, tense: 'prezent', infinitive: 'piti (pić)', pl: 'Pijemy wodę.', before: 'Mi', after: 'vodu.', answer: 'pijemo' },
  { id: 17, tense: 'prezent', infinitive: 'piti (pić)', pl: 'Pijecie wodę.', before: 'Vi', after: 'vodu.', answer: 'pijete' },
  { id: 18, tense: 'prezent', infinitive: 'piti (pić)', pl: 'Oni piją wodę.', before: 'Oni', after: 'vodu.', answer: 'piju' },

  // nositi (nosić)
  { id: 19, tense: 'prezent', infinitive: 'nositi (nosić)', pl: 'Noszę torbę.', before: 'Ja', after: 'torbu.', answer: 'nosim' },
  { id: 20, tense: 'prezent', infinitive: 'nositi (nosić)', pl: 'Nosisz torbę.', before: 'Ti', after: 'torbu.', answer: 'nosiš' },
  { id: 21, tense: 'prezent', infinitive: 'nositi (nosić)', pl: 'Ona nosi torbę.', before: 'Ona', after: 'torbu.', answer: 'nosi' },
  { id: 22, tense: 'prezent', infinitive: 'nositi (nosić)', pl: 'Nosimy torbę.', before: 'Mi', after: 'torbu.', answer: 'nosimo' },
  { id: 23, tense: 'prezent', infinitive: 'nositi (nosić)', pl: 'Nosicie torbę.', before: 'Vi', after: 'torbu.', answer: 'nosite' },
  { id: 24, tense: 'prezent', infinitive: 'nositi (nosić)', pl: 'Oni noszą torbę.', before: 'Oni', after: 'torbu.', answer: 'nose' },

  // voljeti (kochać / lubić)
  { id: 25, tense: 'prezent', infinitive: 'voljeti (kochać)', pl: 'Kocham morze.', before: 'Ja', after: 'more.', answer: 'volim' },
  { id: 26, tense: 'prezent', infinitive: 'voljeti (kochać)', pl: 'Kochasz morze.', before: 'Ti', after: 'more.', answer: 'voliš' },
  { id: 27, tense: 'prezent', infinitive: 'voljeti (kochać)', pl: 'On kocha morze.', before: 'On', after: 'more.', answer: 'voli' },
  { id: 28, tense: 'prezent', infinitive: 'voljeti (kochać)', pl: 'Kochamy morze.', before: 'Mi', after: 'more.', answer: 'volimo' },
  { id: 29, tense: 'prezent', infinitive: 'voljeti (kochać)', pl: 'Kochacie morze.', before: 'Vi', after: 'more.', answer: 'volite' },
  { id: 30, tense: 'prezent', infinitive: 'voljeti (kochać)', pl: 'Oni kochają morze.', before: 'Oni', after: 'more.', answer: 'vole' },

  // čekati (czekać)
  { id: 31, tense: 'prezent', infinitive: 'čekati (czekać)', pl: 'Czekam na autobus.', before: 'Ja', after: 'autobus.', answer: 'čekam' },
  { id: 32, tense: 'prezent', infinitive: 'čekati (czekać)', pl: 'Czekasz na autobus.', before: 'Ti', after: 'autobus.', answer: 'čekaš' },
  { id: 33, tense: 'prezent', infinitive: 'čekati (czekać)', pl: 'Ona czeka na autobus.', before: 'Ona', after: 'autobus.', answer: 'čeka' },
  { id: 34, tense: 'prezent', infinitive: 'čekati (czekać)', pl: 'Czekamy na autobus.', before: 'Mi', after: 'autobus.', answer: 'čekamo' },
  { id: 35, tense: 'prezent', infinitive: 'čekati (czekać)', pl: 'Czekacie na autobus.', before: 'Vi', after: 'autobus.', answer: 'čekate' },
  { id: 36, tense: 'prezent', infinitive: 'čekati (czekać)', pl: 'Oni czekają na autobus.', before: 'Oni', after: 'autobus.', answer: 'čekaju' },

  // živjeti (mieszkać)
  { id: 37, tense: 'prezent', infinitive: 'živjeti (mieszkać)', pl: 'Mieszkam w Zagrzebiu.', before: 'Ja', after: 'u Zagrebu.', answer: 'živim' },
  { id: 38, tense: 'prezent', infinitive: 'živjeti (mieszkać)', pl: 'Mieszkasz w Zagrzebiu.', before: 'Ti', after: 'u Zagrebu.', answer: 'živiš' },
  { id: 39, tense: 'prezent', infinitive: 'živjeti (mieszkać)', pl: 'On mieszka w Zagrzebiu.', before: 'On', after: 'u Zagrebu.', answer: 'živi' },
  { id: 40, tense: 'prezent', infinitive: 'živjeti (mieszkać)', pl: 'Mieszkamy w Zagrzebiu.', before: 'Mi', after: 'u Zagrebu.', answer: 'živimo' },
  { id: 41, tense: 'prezent', infinitive: 'živjeti (mieszkać)', pl: 'Mieszkacie w Zagrzebiu.', before: 'Vi', after: 'u Zagrebu.', answer: 'živite' },
  { id: 42, tense: 'prezent', infinitive: 'živjeti (mieszkać)', pl: 'Oni mieszkają w Zagrzebiu.', before: 'Oni', after: 'u Zagrebu.', answer: 'žive' },

  // učiti (uczyć się)
  { id: 43, tense: 'prezent', infinitive: 'učiti (uczyć się)', pl: 'Uczę się chorwackiego.', before: 'Ja', after: 'hrvatski.', answer: 'učim' },
  { id: 44, tense: 'prezent', infinitive: 'učiti (uczyć się)', pl: 'Uczysz się chorwackiego.', before: 'Ti', after: 'hrvatski.', answer: 'učiš' },
  { id: 45, tense: 'prezent', infinitive: 'učiti (uczyć się)', pl: 'Ona uczy się chorwackiego.', before: 'Ona', after: 'hrvatski.', answer: 'uči' },
  { id: 46, tense: 'prezent', infinitive: 'učiti (uczyć się)', pl: 'Uczymy się chorwackiego.', before: 'Mi', after: 'hrvatski.', answer: 'učimo' },
  { id: 47, tense: 'prezent', infinitive: 'učiti (uczyć się)', pl: 'Uczycie się chorwackiego.', before: 'Vi', after: 'hrvatski.', answer: 'učite' },
  { id: 48, tense: 'prezent', infinitive: 'učiti (uczyć się)', pl: 'Oni uczą się chorwackiego.', before: 'Oni', after: 'hrvatski.', answer: 'uče' },

  // kupovati (kupować)
  { id: 49, tense: 'prezent', infinitive: 'kupovati (kupować)', pl: 'Kupuję chleb.', before: 'Ja', after: 'kruh.', answer: 'kupujem' },
  { id: 50, tense: 'prezent', infinitive: 'kupovati (kupować)', pl: 'Kupujesz chleb.', before: 'Ti', after: 'kruh.', answer: 'kupuješ' },
  { id: 51, tense: 'prezent', infinitive: 'kupovati (kupować)', pl: 'On kupuje chleb.', before: 'On', after: 'kruh.', answer: 'kupuje' },
  { id: 52, tense: 'prezent', infinitive: 'kupovati (kupować)', pl: 'Kupujemy chleb.', before: 'Mi', after: 'kruh.', answer: 'kupujemo' },
  { id: 53, tense: 'prezent', infinitive: 'kupovati (kupować)', pl: 'Kupujecie chleb.', before: 'Vi', after: 'kruh.', answer: 'kupujete' },
  { id: 54, tense: 'prezent', infinitive: 'kupovati (kupować)', pl: 'Oni kupują chleb.', before: 'Oni', after: 'kruh.', answer: 'kupuju' },

  // igrati (grać)
  { id: 55, tense: 'prezent', infinitive: 'igrati (grać)', pl: 'Gram w piłkę nożną.', before: 'Ja', after: 'nogomet.', answer: 'igram' },
  { id: 56, tense: 'prezent', infinitive: 'igrati (grać)', pl: 'Grasz w piłkę nożną.', before: 'Ti', after: 'nogomet.', answer: 'igraš' },
  { id: 57, tense: 'prezent', infinitive: 'igrati (grać)', pl: 'On gra w piłkę nożną.', before: 'On', after: 'nogomet.', answer: 'igra' },
  { id: 58, tense: 'prezent', infinitive: 'igrati (grać)', pl: 'Gramy w piłkę nożną.', before: 'Mi', after: 'nogomet.', answer: 'igramo' },
  { id: 59, tense: 'prezent', infinitive: 'igrati (grać)', pl: 'Gracie w piłkę nożną.', before: 'Vi', after: 'nogomet.', answer: 'igrate' },
  { id: 60, tense: 'prezent', infinitive: 'igrati (grać)', pl: 'Oni grają w piłkę nożną.', before: 'Oni', after: 'nogomet.', answer: 'igraju' },

  // spavati (spać)
  { id: 61, tense: 'prezent', infinitive: 'spavati (spać)', pl: 'Śpię dobrze.', before: 'Ja', after: 'dobro.', answer: 'spavam' },
  { id: 62, tense: 'prezent', infinitive: 'spavati (spać)', pl: 'Śpisz dobrze.', before: 'Ti', after: 'dobro.', answer: 'spavaš' },
  { id: 63, tense: 'prezent', infinitive: 'spavati (spać)', pl: 'Ona śpi dobrze.', before: 'Ona', after: 'dobro.', answer: 'spava' },
  { id: 64, tense: 'prezent', infinitive: 'spavati (spać)', pl: 'Śpimy dobrze.', before: 'Mi', after: 'dobro.', answer: 'spavamo' },
  { id: 65, tense: 'prezent', infinitive: 'spavati (spać)', pl: 'Śpicie dobrze.', before: 'Vi', after: 'dobro.', answer: 'spavate' },
  { id: 66, tense: 'prezent', infinitive: 'spavati (spać)', pl: 'Oni śpią dobrze.', before: 'Oni', after: 'dobro.', answer: 'spavaju' },

  // gledati (oglądać)
  { id: 67, tense: 'prezent', infinitive: 'gledati (oglądać)', pl: 'Oglądam film.', before: 'Ja', after: 'film.', answer: 'gledam' },
  { id: 68, tense: 'prezent', infinitive: 'gledati (oglądać)', pl: 'Oglądasz film.', before: 'Ti', after: 'film.', answer: 'gledaš' },
  { id: 69, tense: 'prezent', infinitive: 'gledati (oglądać)', pl: 'On ogląda film.', before: 'On', after: 'film.', answer: 'gleda' },
  { id: 70, tense: 'prezent', infinitive: 'gledati (oglądać)', pl: 'Oglądamy film.', before: 'Mi', after: 'film.', answer: 'gledamo' },
  { id: 71, tense: 'prezent', infinitive: 'gledati (oglądać)', pl: 'Oglądacie film.', before: 'Vi', after: 'film.', answer: 'gledate' },
  { id: 72, tense: 'prezent', infinitive: 'gledati (oglądać)', pl: 'Oni oglądają film.', before: 'Oni', after: 'film.', answer: 'gledaju' },

  // govoriti (mówić)
  { id: 73, tense: 'prezent', infinitive: 'govoriti (mówić)', pl: 'Mówię po angielsku.', before: 'Ja', after: 'engleski.', answer: 'govorim' },
  { id: 74, tense: 'prezent', infinitive: 'govoriti (mówić)', pl: 'Mówisz po angielsku.', before: 'Ti', after: 'engleski.', answer: 'govoriš' },
  { id: 75, tense: 'prezent', infinitive: 'govoriti (mówić)', pl: 'Ona mówi po angielsku.', before: 'Ona', after: 'engleski.', answer: 'govori' },
  { id: 76, tense: 'prezent', infinitive: 'govoriti (mówić)', pl: 'Mówimy po angielsku.', before: 'Mi', after: 'engleski.', answer: 'govorimo' },
  { id: 77, tense: 'prezent', infinitive: 'govoriti (mówić)', pl: 'Mówicie po angielsku.', before: 'Vi', after: 'engleski.', answer: 'govorite' },
  { id: 78, tense: 'prezent', infinitive: 'govoriti (mówić)', pl: 'Oni mówią po angielsku.', before: 'Oni', after: 'engleski.', answer: 'govore' },

  // jesti (jeść)
  { id: 79, tense: 'prezent', infinitive: 'jesti (jeść)', pl: 'Jem owoce.', before: 'Ja', after: 'voće.', answer: 'jedem' },
  { id: 80, tense: 'prezent', infinitive: 'jesti (jeść)', pl: 'Jesz owoce.', before: 'Ti', after: 'voće.', answer: 'jedeš' },
  { id: 81, tense: 'prezent', infinitive: 'jesti (jeść)', pl: 'On je owoce.', before: 'On', after: 'voće.', answer: 'jede' },
  { id: 82, tense: 'prezent', infinitive: 'jesti (jeść)', pl: 'Jemy owoce.', before: 'Mi', after: 'voće.', answer: 'jedemo' },
  { id: 83, tense: 'prezent', infinitive: 'jesti (jeść)', pl: 'Jecie owoce.', before: 'Vi', after: 'voće.', answer: 'jedete' },
  { id: 84, tense: 'prezent', infinitive: 'jesti (jeść)', pl: 'Oni jedzą owoce.', before: 'Oni', after: 'voće.', answer: 'jedu' },

  // ići (iść)
  { id: 85, tense: 'prezent', infinitive: 'ići (iść)', pl: 'Idę do domu.', before: 'Ja', after: 'kući.', answer: 'idem' },
  { id: 86, tense: 'prezent', infinitive: 'ići (iść)', pl: 'Idziesz do domu.', before: 'Ti', after: 'kući.', answer: 'ideš' },
  { id: 87, tense: 'prezent', infinitive: 'ići (iść)', pl: 'On idzie do domu.', before: 'On', after: 'kući.', answer: 'ide' },
  { id: 88, tense: 'prezent', infinitive: 'ići (iść)', pl: 'Idziemy do domu.', before: 'Mi', after: 'kući.', answer: 'idemo' },
  { id: 89, tense: 'prezent', infinitive: 'ići (iść)', pl: 'Idziecie do domu.', before: 'Vi', after: 'kući.', answer: 'idete' },
  { id: 90, tense: 'prezent', infinitive: 'ići (iść)', pl: 'Oni idą do domu.', before: 'Oni', after: 'kući.', answer: 'idu' },

  // željeti (chcieć)
  { id: 211, tense: 'prezent', infinitive: 'željeti (chcieć)', pl: 'Chcę kawę.', before: 'Ja', after: 'kavu.', answer: 'želim' },
  { id: 212, tense: 'prezent', infinitive: 'željeti (chcieć)', pl: 'Chcesz kawę.', before: 'Ti', after: 'kavu.', answer: 'želiš' },
  { id: 213, tense: 'prezent', infinitive: 'željeti (chcieć)', pl: 'Ona chce kawę.', before: 'Ona', after: 'kavu.', answer: 'želi' },
  { id: 214, tense: 'prezent', infinitive: 'željeti (chcieć)', pl: 'Chcemy kawę.', before: 'Mi', after: 'kavu.', answer: 'želimo' },
  { id: 215, tense: 'prezent', infinitive: 'željeti (chcieć)', pl: 'Chcecie kawę.', before: 'Vi', after: 'kavu.', answer: 'želite' },
  { id: 216, tense: 'prezent', infinitive: 'željeti (chcieć)', pl: 'Oni chcą kawę.', before: 'Oni', after: 'kavu.', answer: 'žele' },

  // moći (móc)
  { id: 217, tense: 'prezent', infinitive: 'moći (móc)', pl: 'Mogę pomóc.', before: 'Ja', after: 'pomoći.', answer: 'mogu' },
  { id: 218, tense: 'prezent', infinitive: 'moći (móc)', pl: 'Możesz pomóc.', before: 'Ti', after: 'pomoći.', answer: 'možeš' },
  { id: 219, tense: 'prezent', infinitive: 'moći (móc)', pl: 'On może pomóc.', before: 'On', after: 'pomoći.', answer: 'može' },
  { id: 220, tense: 'prezent', infinitive: 'moći (móc)', pl: 'Możemy pomóc.', before: 'Mi', after: 'pomoći.', answer: 'možemo' },
  { id: 221, tense: 'prezent', infinitive: 'moći (móc)', pl: 'Możecie pomóc.', before: 'Vi', after: 'pomoći.', answer: 'možete' },
  { id: 222, tense: 'prezent', infinitive: 'moći (móc)', pl: 'Oni mogą pomóc.', before: 'Oni', after: 'pomoći.', answer: 'mogu' },

  // znati (znać / wiedzieć)
  { id: 223, tense: 'prezent', infinitive: 'znati (wiedzieć)', pl: 'Znam odpowiedź.', before: 'Ja', after: 'odgovor.', answer: 'znam' },
  { id: 224, tense: 'prezent', infinitive: 'znati (wiedzieć)', pl: 'Znasz odpowiedź.', before: 'Ti', after: 'odgovor.', answer: 'znaš' },
  { id: 225, tense: 'prezent', infinitive: 'znati (wiedzieć)', pl: 'Ona zna odpowiedź.', before: 'Ona', after: 'odgovor.', answer: 'zna' },
  { id: 226, tense: 'prezent', infinitive: 'znati (wiedzieć)', pl: 'Znamy odpowiedź.', before: 'Mi', after: 'odgovor.', answer: 'znamo' },
  { id: 227, tense: 'prezent', infinitive: 'znati (wiedzieć)', pl: 'Znacie odpowiedź.', before: 'Vi', after: 'odgovor.', answer: 'znate' },
  { id: 228, tense: 'prezent', infinitive: 'znati (wiedzieć)', pl: 'Oni znają odpowiedź.', before: 'Oni', after: 'odgovor.', answer: 'znaju' },

  // misliti (myśleć)
  { id: 229, tense: 'prezent', infinitive: 'misliti (myśleć)', pl: 'Myślę o tym.', before: 'Ja', after: 'o tome.', answer: 'mislim' },
  { id: 230, tense: 'prezent', infinitive: 'misliti (myśleć)', pl: 'Myślisz o tym.', before: 'Ti', after: 'o tome.', answer: 'misliš' },
  { id: 231, tense: 'prezent', infinitive: 'misliti (myśleć)', pl: 'Ona myśli o tym.', before: 'Ona', after: 'o tome.', answer: 'misli' },
  { id: 232, tense: 'prezent', infinitive: 'misliti (myśleć)', pl: 'Myślimy o tym.', before: 'Mi', after: 'o tome.', answer: 'mislimo' },
  { id: 233, tense: 'prezent', infinitive: 'misliti (myśleć)', pl: 'Myślicie o tym.', before: 'Vi', after: 'o tome.', answer: 'mislite' },
  { id: 234, tense: 'prezent', infinitive: 'misliti (myśleć)', pl: 'Oni myślą o tym.', before: 'Oni', after: 'o tome.', answer: 'misle' },

  // trebati (potrzebować)
  { id: 235, tense: 'prezent', infinitive: 'trebati (potrzebować)', pl: 'Potrzebuję pomocy.', before: 'Ja', after: 'pomoć.', answer: 'trebam' },
  { id: 236, tense: 'prezent', infinitive: 'trebati (potrzebować)', pl: 'Potrzebujesz pomocy.', before: 'Ti', after: 'pomoć.', answer: 'trebaš' },
  { id: 237, tense: 'prezent', infinitive: 'trebati (potrzebować)', pl: 'On potrzebuje pomocy.', before: 'On', after: 'pomoć.', answer: 'treba' },
  { id: 238, tense: 'prezent', infinitive: 'trebati (potrzebować)', pl: 'Potrzebujemy pomocy.', before: 'Mi', after: 'pomoć.', answer: 'trebamo' },
  { id: 239, tense: 'prezent', infinitive: 'trebati (potrzebować)', pl: 'Potrzebujecie pomocy.', before: 'Vi', after: 'pomoć.', answer: 'trebate' },
  { id: 240, tense: 'prezent', infinitive: 'trebati (potrzebować)', pl: 'Oni potrzebują pomocy.', before: 'Oni', after: 'pomoć.', answer: 'trebaju' },

  // slušati (słuchać)
  { id: 241, tense: 'prezent', infinitive: 'slušati (słuchać)', pl: 'Słucham muzyki.', before: 'Ja', after: 'glazbu.', answer: 'slušam' },
  { id: 242, tense: 'prezent', infinitive: 'slušati (słuchać)', pl: 'Słuchasz muzyki.', before: 'Ti', after: 'glazbu.', answer: 'slušaš' },
  { id: 243, tense: 'prezent', infinitive: 'slušati (słuchać)', pl: 'Ona słucha muzyki.', before: 'Ona', after: 'glazbu.', answer: 'sluša' },
  { id: 244, tense: 'prezent', infinitive: 'slušati (słuchać)', pl: 'Słuchamy muzyki.', before: 'Mi', after: 'glazbu.', answer: 'slušamo' },
  { id: 245, tense: 'prezent', infinitive: 'slušati (słuchać)', pl: 'Słuchacie muzyki.', before: 'Vi', after: 'glazbu.', answer: 'slušate' },
  { id: 246, tense: 'prezent', infinitive: 'slušati (słuchać)', pl: 'Oni słuchają muzyki.', before: 'Oni', after: 'glazbu.', answer: 'slušaju' },

  // vidjeti (widzieć)
  { id: 247, tense: 'prezent', infinitive: 'vidjeti (widzieć)', pl: 'Widzę dom.', before: 'Ja', after: 'kuću.', answer: 'vidim' },
  { id: 248, tense: 'prezent', infinitive: 'vidjeti (widzieć)', pl: 'Widzisz dom.', before: 'Ti', after: 'kuću.', answer: 'vidiš' },
  { id: 249, tense: 'prezent', infinitive: 'vidjeti (widzieć)', pl: 'On widzi dom.', before: 'On', after: 'kuću.', answer: 'vidi' },
  { id: 250, tense: 'prezent', infinitive: 'vidjeti (widzieć)', pl: 'Widzimy dom.', before: 'Mi', after: 'kuću.', answer: 'vidimo' },
  { id: 251, tense: 'prezent', infinitive: 'vidjeti (widzieć)', pl: 'Widzicie dom.', before: 'Vi', after: 'kuću.', answer: 'vidite' },
  { id: 252, tense: 'prezent', infinitive: 'vidjeti (widzieć)', pl: 'Oni widzą dom.', before: 'Oni', after: 'kuću.', answer: 'vide' },

  // trčati (biegać)
  { id: 253, tense: 'prezent', infinitive: 'trčati (biegać)', pl: 'Biegam rano.', before: 'Ja', after: 'ujutro.', answer: 'trčim' },
  { id: 254, tense: 'prezent', infinitive: 'trčati (biegać)', pl: 'Biegasz rano.', before: 'Ti', after: 'ujutro.', answer: 'trčiš' },
  { id: 255, tense: 'prezent', infinitive: 'trčati (biegać)', pl: 'Ona biega rano.', before: 'Ona', after: 'ujutro.', answer: 'trči' },
  { id: 256, tense: 'prezent', infinitive: 'trčati (biegać)', pl: 'Biegamy rano.', before: 'Mi', after: 'ujutro.', answer: 'trčimo' },
  { id: 257, tense: 'prezent', infinitive: 'trčati (biegać)', pl: 'Biegacie rano.', before: 'Vi', after: 'ujutro.', answer: 'trčite' },
  { id: 258, tense: 'prezent', infinitive: 'trčati (biegać)', pl: 'Oni biegają rano.', before: 'Oni', after: 'ujutro.', answer: 'trče' },

  // voziti (prowadzić / jechać)
  { id: 259, tense: 'prezent', infinitive: 'voziti (prowadzić)', pl: 'Prowadzę samochód.', before: 'Ja', after: 'auto.', answer: 'vozim' },
  { id: 260, tense: 'prezent', infinitive: 'voziti (prowadzić)', pl: 'Prowadzisz samochód.', before: 'Ti', after: 'auto.', answer: 'voziš' },
  { id: 261, tense: 'prezent', infinitive: 'voziti (prowadzić)', pl: 'On prowadzi samochód.', before: 'On', after: 'auto.', answer: 'vozi' },
  { id: 262, tense: 'prezent', infinitive: 'voziti (prowadzić)', pl: 'Prowadzimy samochód.', before: 'Mi', after: 'auto.', answer: 'vozimo' },
  { id: 263, tense: 'prezent', infinitive: 'voziti (prowadzić)', pl: 'Prowadzicie samochód.', before: 'Vi', after: 'auto.', answer: 'vozite' },
  { id: 264, tense: 'prezent', infinitive: 'voziti (prowadzić)', pl: 'Oni prowadzą samochód.', before: 'Oni', after: 'auto.', answer: 'voze' },

  // plivati (pływać)
  { id: 265, tense: 'prezent', infinitive: 'plivati (pływać)', pl: 'Pływam w morzu.', before: 'Ja', after: 'u moru.', answer: 'plivam' },
  { id: 266, tense: 'prezent', infinitive: 'plivati (pływać)', pl: 'Pływasz w morzu.', before: 'Ti', after: 'u moru.', answer: 'plivaš' },
  { id: 267, tense: 'prezent', infinitive: 'plivati (pływać)', pl: 'Ona pływa w morzu.', before: 'Ona', after: 'u moru.', answer: 'pliva' },
  { id: 268, tense: 'prezent', infinitive: 'plivati (pływać)', pl: 'Pływamy w morzu.', before: 'Mi', after: 'u moru.', answer: 'plivamo' },
  { id: 269, tense: 'prezent', infinitive: 'plivati (pływać)', pl: 'Pływacie w morzu.', before: 'Vi', after: 'u moru.', answer: 'plivate' },
  { id: 270, tense: 'prezent', infinitive: 'plivati (pływać)', pl: 'Oni pływają w morzu.', before: 'Oni', after: 'u moru.', answer: 'plivaju' },

  // pjevati (śpiewać)
  { id: 271, tense: 'prezent', infinitive: 'pjevati (śpiewać)', pl: 'Śpiewam piosenkę.', before: 'Ja', after: 'pjesmu.', answer: 'pjevam' },
  { id: 272, tense: 'prezent', infinitive: 'pjevati (śpiewać)', pl: 'Śpiewasz piosenkę.', before: 'Ti', after: 'pjesmu.', answer: 'pjevaš' },
  { id: 273, tense: 'prezent', infinitive: 'pjevati (śpiewać)', pl: 'On śpiewa piosenkę.', before: 'On', after: 'pjesmu.', answer: 'pjeva' },
  { id: 274, tense: 'prezent', infinitive: 'pjevati (śpiewać)', pl: 'Śpiewamy piosenkę.', before: 'Mi', after: 'pjesmu.', answer: 'pjevamo' },
  { id: 275, tense: 'prezent', infinitive: 'pjevati (śpiewać)', pl: 'Śpiewacie piosenkę.', before: 'Vi', after: 'pjesmu.', answer: 'pjevate' },
  { id: 276, tense: 'prezent', infinitive: 'pjevati (śpiewać)', pl: 'Oni śpiewają piosenkę.', before: 'Oni', after: 'pjesmu.', answer: 'pjevaju' },

  // slati (wysyłać)
  { id: 277, tense: 'prezent', infinitive: 'slati (wysyłać)', pl: 'Wysyłam wiadomość.', before: 'Ja', after: 'poruku.', answer: 'šaljem' },
  { id: 278, tense: 'prezent', infinitive: 'slati (wysyłać)', pl: 'Wysyłasz wiadomość.', before: 'Ti', after: 'poruku.', answer: 'šalješ' },
  { id: 279, tense: 'prezent', infinitive: 'slati (wysyłać)', pl: 'Ona wysyła wiadomość.', before: 'Ona', after: 'poruku.', answer: 'šalje' },
  { id: 280, tense: 'prezent', infinitive: 'slati (wysyłać)', pl: 'Wysyłamy wiadomość.', before: 'Mi', after: 'poruku.', answer: 'šaljemo' },
  { id: 281, tense: 'prezent', infinitive: 'slati (wysyłać)', pl: 'Wysyłacie wiadomość.', before: 'Vi', after: 'poruku.', answer: 'šaljete' },
  { id: 282, tense: 'prezent', infinitive: 'slati (wysyłać)', pl: 'Oni wysyłają wiadomość.', before: 'Oni', after: 'poruku.', answer: 'šalju' },

  // čuti (słyszeć)
  { id: 283, tense: 'prezent', infinitive: 'čuti (słyszeć)', pl: 'Słyszę cię.', before: 'Ja te', after: '.', answer: 'čujem' },
  { id: 284, tense: 'prezent', infinitive: 'čuti (słyszeć)', pl: 'Słyszysz mnie.', before: 'Ti me', after: '.', answer: 'čuješ' },
  { id: 285, tense: 'prezent', infinitive: 'čuti (słyszeć)', pl: 'On słyszy nas.', before: 'On nas', after: '.', answer: 'čuje' },
  { id: 286, tense: 'prezent', infinitive: 'čuti (słyszeć)', pl: 'Słyszymy ich.', before: 'Mi ih', after: '.', answer: 'čujemo' },
  { id: 287, tense: 'prezent', infinitive: 'čuti (słyszeć)', pl: 'Słyszycie go.', before: 'Vi ga', after: '.', answer: 'čujete' },
  { id: 288, tense: 'prezent', infinitive: 'čuti (słyszeć)', pl: 'Oni słyszą ją.', before: 'Oni ju', after: '.', answer: 'čuju' },

  // smijati se (śmiać się)
  { id: 289, tense: 'prezent', infinitive: 'smijati se (śmiać się)', pl: 'Śmieję się głośno.', before: 'Ja se', after: 'glasno.', answer: 'smijem' },
  { id: 290, tense: 'prezent', infinitive: 'smijati se (śmiać się)', pl: 'Śmiejesz się głośno.', before: 'Ti se', after: 'glasno.', answer: 'smiješ' },
  { id: 291, tense: 'prezent', infinitive: 'smijati se (śmiać się)', pl: 'Ona śmieje się głośno.', before: 'Ona se', after: 'glasno.', answer: 'smije' },
  { id: 292, tense: 'prezent', infinitive: 'smijati se (śmiać się)', pl: 'Śmiejemy się głośno.', before: 'Mi se', after: 'glasno.', answer: 'smijemo' },
  { id: 293, tense: 'prezent', infinitive: 'smijati se (śmiać się)', pl: 'Śmiejecie się głośno.', before: 'Vi se', after: 'glasno.', answer: 'smijete' },
  { id: 294, tense: 'prezent', infinitive: 'smijati se (śmiać się)', pl: 'Oni śmieją się głośno.', before: 'Oni se', after: 'glasno.', answer: 'smiju' },

  // osjećati se (czuć się)
  { id: 295, tense: 'prezent', infinitive: 'osjećati se (czuć się)', pl: 'Czuję się dobrze.', before: 'Ja se', after: 'dobro.', answer: 'osjećam' },
  { id: 296, tense: 'prezent', infinitive: 'osjećati se (czuć się)', pl: 'Czujesz się dobrze.', before: 'Ti se', after: 'dobro.', answer: 'osjećaš' },
  { id: 297, tense: 'prezent', infinitive: 'osjećati se (czuć się)', pl: 'Ona czuje się dobrze.', before: 'Ona se', after: 'dobro.', answer: 'osjeća' },
  { id: 298, tense: 'prezent', infinitive: 'osjećati se (czuć się)', pl: 'Czujemy się dobrze.', before: 'Mi se', after: 'dobro.', answer: 'osjećamo' },
  { id: 299, tense: 'prezent', infinitive: 'osjećati se (czuć się)', pl: 'Czujecie się dobrze.', before: 'Vi se', after: 'dobro.', answer: 'osjećate' },
  { id: 300, tense: 'prezent', infinitive: 'osjećati se (czuć się)', pl: 'Oni czują się dobrze.', before: 'Oni se', after: 'dobro.', answer: 'osjećaju' },

  // ===== PERFEKT =====

  // raditi (pracować)
  { id: 91, tense: 'perfekt', infinitive: 'raditi (pracować)', pl: 'Pracowałem cały dzień.', before: 'Ja', after: 'cijeli dan.', answer: 'sam radio' },
  { id: 92, tense: 'perfekt', infinitive: 'raditi (pracować)', pl: 'Pracowałeś cały dzień.', before: 'Ti', after: 'cijeli dan.', answer: 'si radio' },
  { id: 93, tense: 'perfekt', infinitive: 'raditi (pracować)', pl: 'On pracował cały dzień.', before: 'On', after: 'cijeli dan.', answer: 'je radio' },
  { id: 94, tense: 'perfekt', infinitive: 'raditi (pracować)', pl: 'Pracowaliśmy cały dzień.', before: 'Mi', after: 'cijeli dan.', answer: 'smo radili' },
  { id: 95, tense: 'perfekt', infinitive: 'raditi (pracować)', pl: 'Pracowaliście cały dzień.', before: 'Vi', after: 'cijeli dan.', answer: 'ste radili' },
  { id: 96, tense: 'perfekt', infinitive: 'raditi (pracować)', pl: 'Oni pracowali cały dzień.', before: 'Oni', after: 'cijeli dan.', answer: 'su radili' },

  // kupiti (kupić)
  { id: 97, tense: 'perfekt', infinitive: 'kupiti (kupić)', pl: 'Kupiłem chleb.', before: 'Ja', after: 'kruh.', answer: 'sam kupio' },
  { id: 98, tense: 'perfekt', infinitive: 'kupiti (kupić)', pl: 'Kupiłeś chleb.', before: 'Ti', after: 'kruh.', answer: 'si kupio' },
  { id: 99, tense: 'perfekt', infinitive: 'kupiti (kupić)', pl: 'Ona kupiła chleb.', before: 'Ona', after: 'kruh.', answer: 'je kupila' },
  { id: 100, tense: 'perfekt', infinitive: 'kupiti (kupić)', pl: 'Kupiliśmy chleb.', before: 'Mi', after: 'kruh.', answer: 'smo kupili' },
  { id: 101, tense: 'perfekt', infinitive: 'kupiti (kupić)', pl: 'Kupiliście chleb.', before: 'Vi', after: 'kruh.', answer: 'ste kupili' },
  { id: 102, tense: 'perfekt', infinitive: 'kupiti (kupić)', pl: 'Oni kupili chleb.', before: 'Oni', after: 'kruh.', answer: 'su kupili' },

  // gledati (oglądać)
  { id: 103, tense: 'perfekt', infinitive: 'gledati (oglądać)', pl: 'Oglądałem film.', before: 'Ja', after: 'film.', answer: 'sam gledao' },
  { id: 104, tense: 'perfekt', infinitive: 'gledati (oglądać)', pl: 'Oglądałeś film.', before: 'Ti', after: 'film.', answer: 'si gledao' },
  { id: 105, tense: 'perfekt', infinitive: 'gledati (oglądać)', pl: 'Ona oglądała film.', before: 'Ona', after: 'film.', answer: 'je gledala' },
  { id: 106, tense: 'perfekt', infinitive: 'gledati (oglądać)', pl: 'Oglądaliśmy film.', before: 'Mi', after: 'film.', answer: 'smo gledali' },
  { id: 107, tense: 'perfekt', infinitive: 'gledati (oglądać)', pl: 'Oglądaliście film.', before: 'Vi', after: 'film.', answer: 'ste gledali' },
  { id: 108, tense: 'perfekt', infinitive: 'gledati (oglądać)', pl: 'Oni oglądali film.', before: 'Oni', after: 'film.', answer: 'su gledali' },

  // doći (przyjść)
  { id: 109, tense: 'perfekt', infinitive: 'doći (przyjść)', pl: 'Przyszedłem późno.', before: 'Ja', after: 'kasno.', answer: 'sam došao' },
  { id: 110, tense: 'perfekt', infinitive: 'doći (przyjść)', pl: 'Przyszedłeś późno.', before: 'Ti', after: 'kasno.', answer: 'si došao' },
  { id: 111, tense: 'perfekt', infinitive: 'doći (przyjść)', pl: 'Ona przyszła późno.', before: 'Ona', after: 'kasno.', answer: 'je došla' },
  { id: 112, tense: 'perfekt', infinitive: 'doći (przyjść)', pl: 'Przyszliśmy późno.', before: 'Mi', after: 'kasno.', answer: 'smo došli' },
  { id: 113, tense: 'perfekt', infinitive: 'doći (przyjść)', pl: 'Przyszliście późno.', before: 'Vi', after: 'kasno.', answer: 'ste došli' },
  { id: 114, tense: 'perfekt', infinitive: 'doći (przyjść)', pl: 'Oni przyszli późno.', before: 'Oni', after: 'kasno.', answer: 'su došli' },

  // pomoći (pomóc)
  { id: 115, tense: 'perfekt', infinitive: 'pomoći (pomóc)', pl: 'Pomogłem bratu.', before: 'Ja', after: 'bratu.', answer: 'sam pomogao' },
  { id: 116, tense: 'perfekt', infinitive: 'pomoći (pomóc)', pl: 'Pomogłeś bratu.', before: 'Ti', after: 'bratu.', answer: 'si pomogao' },
  { id: 117, tense: 'perfekt', infinitive: 'pomoći (pomóc)', pl: 'Ona pomogła bratu.', before: 'Ona', after: 'bratu.', answer: 'je pomogla' },
  { id: 118, tense: 'perfekt', infinitive: 'pomoći (pomóc)', pl: 'Pomogliśmy bratu.', before: 'Mi', after: 'bratu.', answer: 'smo pomogli' },
  { id: 119, tense: 'perfekt', infinitive: 'pomoći (pomóc)', pl: 'Pomogliście bratu.', before: 'Vi', after: 'bratu.', answer: 'ste pomogli' },
  { id: 120, tense: 'perfekt', infinitive: 'pomoći (pomóc)', pl: 'Oni pomogli bratu.', before: 'Oni', after: 'bratu.', answer: 'su pomogli' },

  // pročitati (przeczytać)
  { id: 121, tense: 'perfekt', infinitive: 'pročitati (przeczytać)', pl: 'Przeczytałem książkę.', before: 'Ja', after: 'knjigu.', answer: 'sam pročitao' },
  { id: 122, tense: 'perfekt', infinitive: 'pročitati (przeczytać)', pl: 'Przeczytałeś książkę.', before: 'Ti', after: 'knjigu.', answer: 'si pročitao' },
  { id: 123, tense: 'perfekt', infinitive: 'pročitati (przeczytać)', pl: 'Ona przeczytała książkę.', before: 'Ona', after: 'knjigu.', answer: 'je pročitala' },
  { id: 124, tense: 'perfekt', infinitive: 'pročitati (przeczytać)', pl: 'Przeczytaliśmy książkę.', before: 'Mi', after: 'knjigu.', answer: 'smo pročitali' },
  { id: 125, tense: 'perfekt', infinitive: 'pročitati (przeczytać)', pl: 'Przeczytaliście książkę.', before: 'Vi', after: 'knjigu.', answer: 'ste pročitali' },
  { id: 126, tense: 'perfekt', infinitive: 'pročitati (przeczytać)', pl: 'Oni przeczytali książkę.', before: 'Oni', after: 'knjigu.', answer: 'su pročitali' },

  // naučiti (nauczyć się)
  { id: 127, tense: 'perfekt', infinitive: 'naučiti (nauczyć się)', pl: 'Nauczyłem się dużo.', before: 'Ja', after: 'puno.', answer: 'sam naučio' },
  { id: 128, tense: 'perfekt', infinitive: 'naučiti (nauczyć się)', pl: 'Nauczyłeś się dużo.', before: 'Ti', after: 'puno.', answer: 'si naučio' },
  { id: 129, tense: 'perfekt', infinitive: 'naučiti (nauczyć się)', pl: 'Ona nauczyła się dużo.', before: 'Ona', after: 'puno.', answer: 'je naučila' },
  { id: 130, tense: 'perfekt', infinitive: 'naučiti (nauczyć się)', pl: 'Nauczyliśmy się dużo.', before: 'Mi', after: 'puno.', answer: 'smo naučili' },
  { id: 131, tense: 'perfekt', infinitive: 'naučiti (nauczyć się)', pl: 'Nauczyliście się dużo.', before: 'Vi', after: 'puno.', answer: 'ste naučili' },
  { id: 132, tense: 'perfekt', infinitive: 'naučiti (nauczyć się)', pl: 'Oni nauczyli się dużo.', before: 'Oni', after: 'puno.', answer: 'su naučili' },

  // kuhati (gotować)
  { id: 133, tense: 'perfekt', infinitive: 'kuhati (gotować)', pl: 'Gotowałem kolację.', before: 'Ja', after: 'večeru.', answer: 'sam kuhao' },
  { id: 134, tense: 'perfekt', infinitive: 'kuhati (gotować)', pl: 'Gotowałeś kolację.', before: 'Ti', after: 'večeru.', answer: 'si kuhao' },
  { id: 135, tense: 'perfekt', infinitive: 'kuhati (gotować)', pl: 'Ona gotowała kolację.', before: 'Ona', after: 'večeru.', answer: 'je kuhala' },
  { id: 136, tense: 'perfekt', infinitive: 'kuhati (gotować)', pl: 'Gotowaliśmy kolację.', before: 'Mi', after: 'večeru.', answer: 'smo kuhali' },
  { id: 137, tense: 'perfekt', infinitive: 'kuhati (gotować)', pl: 'Gotowaliście kolację.', before: 'Vi', after: 'večeru.', answer: 'ste kuhali' },
  { id: 138, tense: 'perfekt', infinitive: 'kuhati (gotować)', pl: 'Oni gotowali kolację.', before: 'Oni', after: 'večeru.', answer: 'su kuhali' },

  // izgubiti (zgubić)
  { id: 139, tense: 'perfekt', infinitive: 'izgubiti (zgubić)', pl: 'Zgubiłem drogę.', before: 'Ja', after: 'put.', answer: 'sam izgubio' },
  { id: 140, tense: 'perfekt', infinitive: 'izgubiti (zgubić)', pl: 'Zgubiłeś drogę.', before: 'Ti', after: 'put.', answer: 'si izgubio' },
  { id: 141, tense: 'perfekt', infinitive: 'izgubiti (zgubić)', pl: 'Ona zgubiła drogę.', before: 'Ona', after: 'put.', answer: 'je izgubila' },
  { id: 142, tense: 'perfekt', infinitive: 'izgubiti (zgubić)', pl: 'Zgubiliśmy drogę.', before: 'Mi', after: 'put.', answer: 'smo izgubili' },
  { id: 143, tense: 'perfekt', infinitive: 'izgubiti (zgubić)', pl: 'Zgubiliście drogę.', before: 'Vi', after: 'put.', answer: 'ste izgubili' },
  { id: 144, tense: 'perfekt', infinitive: 'izgubiti (zgubić)', pl: 'Oni zgubili drogę.', before: 'Oni', after: 'put.', answer: 'su izgubili' },

  // vidjeti (zobaczyć)
  { id: 145, tense: 'perfekt', infinitive: 'vidjeti (zobaczyć)', pl: 'Widziałem przyjaciela.', before: 'Ja', after: 'prijatelja.', answer: 'sam vidio' },
  { id: 146, tense: 'perfekt', infinitive: 'vidjeti (zobaczyć)', pl: 'Widziałeś przyjaciela.', before: 'Ti', after: 'prijatelja.', answer: 'si vidio' },
  { id: 147, tense: 'perfekt', infinitive: 'vidjeti (zobaczyć)', pl: 'Ona widziała przyjaciela.', before: 'Ona', after: 'prijatelja.', answer: 'je vidjela' },
  { id: 148, tense: 'perfekt', infinitive: 'vidjeti (zobaczyć)', pl: 'Widzieliśmy przyjaciela.', before: 'Mi', after: 'prijatelja.', answer: 'smo vidjeli' },
  { id: 149, tense: 'perfekt', infinitive: 'vidjeti (zobaczyć)', pl: 'Widzieliście przyjaciela.', before: 'Vi', after: 'prijatelja.', answer: 'ste vidjeli' },
  { id: 150, tense: 'perfekt', infinitive: 'vidjeti (zobaczyć)', pl: 'Oni widzieli przyjaciela.', before: 'Oni', after: 'prijatelja.', answer: 'su vidjeli' },

  // zaboraviti (zapomnieć)
  { id: 301, tense: 'perfekt', infinitive: 'zaboraviti (zapomnieć)', pl: 'Zapomniałem o spotkaniu.', before: 'Ja', after: 'o sastanku.', answer: 'sam zaboravio' },
  { id: 302, tense: 'perfekt', infinitive: 'zaboraviti (zapomnieć)', pl: 'Zapomniałeś o spotkaniu.', before: 'Ti', after: 'o sastanku.', answer: 'si zaboravio' },
  { id: 303, tense: 'perfekt', infinitive: 'zaboraviti (zapomnieć)', pl: 'Ona zapomniała o spotkaniu.', before: 'Ona', after: 'o sastanku.', answer: 'je zaboravila' },
  { id: 304, tense: 'perfekt', infinitive: 'zaboraviti (zapomnieć)', pl: 'Zapomnieliśmy o spotkaniu.', before: 'Mi', after: 'o sastanku.', answer: 'smo zaboravili' },
  { id: 305, tense: 'perfekt', infinitive: 'zaboraviti (zapomnieć)', pl: 'Zapomnieliście o spotkaniu.', before: 'Vi', after: 'o sastanku.', answer: 'ste zaboravili' },
  { id: 306, tense: 'perfekt', infinitive: 'zaboraviti (zapomnieć)', pl: 'Oni zapomnieli o spotkaniu.', before: 'Oni', after: 'o sastanku.', answer: 'su zaboravili' },

  // otvoriti (otworzyć)
  { id: 307, tense: 'perfekt', infinitive: 'otvoriti (otworzyć)', pl: 'Otworzyłem okno.', before: 'Ja', after: 'prozor.', answer: 'sam otvorio' },
  { id: 308, tense: 'perfekt', infinitive: 'otvoriti (otworzyć)', pl: 'Otworzyłeś okno.', before: 'Ti', after: 'prozor.', answer: 'si otvorio' },
  { id: 309, tense: 'perfekt', infinitive: 'otvoriti (otworzyć)', pl: 'Ona otworzyła okno.', before: 'Ona', after: 'prozor.', answer: 'je otvorila' },
  { id: 310, tense: 'perfekt', infinitive: 'otvoriti (otworzyć)', pl: 'Otworzyliśmy okno.', before: 'Mi', after: 'prozor.', answer: 'smo otvorili' },
  { id: 311, tense: 'perfekt', infinitive: 'otvoriti (otworzyć)', pl: 'Otworzyliście okno.', before: 'Vi', after: 'prozor.', answer: 'ste otvorili' },
  { id: 312, tense: 'perfekt', infinitive: 'otvoriti (otworzyć)', pl: 'Oni otworzyli okno.', before: 'Oni', after: 'prozor.', answer: 'su otvorili' },

  // zatvoriti (zamknąć)
  { id: 313, tense: 'perfekt', infinitive: 'zatvoriti (zamknąć)', pl: 'Zamknąłem drzwi.', before: 'Ja', after: 'vrata.', answer: 'sam zatvorio' },
  { id: 314, tense: 'perfekt', infinitive: 'zatvoriti (zamknąć)', pl: 'Zamknąłeś drzwi.', before: 'Ti', after: 'vrata.', answer: 'si zatvorio' },
  { id: 315, tense: 'perfekt', infinitive: 'zatvoriti (zamknąć)', pl: 'Ona zamknęła drzwi.', before: 'Ona', after: 'vrata.', answer: 'je zatvorila' },
  { id: 316, tense: 'perfekt', infinitive: 'zatvoriti (zamknąć)', pl: 'Zamknęliśmy drzwi.', before: 'Mi', after: 'vrata.', answer: 'smo zatvorili' },
  { id: 317, tense: 'perfekt', infinitive: 'zatvoriti (zamknąć)', pl: 'Zamknęliście drzwi.', before: 'Vi', after: 'vrata.', answer: 'ste zatvorili' },
  { id: 318, tense: 'perfekt', infinitive: 'zatvoriti (zamknąć)', pl: 'Oni zamknęli drzwi.', before: 'Oni', after: 'vrata.', answer: 'su zatvorili' },

  // poslati (wysłać)
  { id: 319, tense: 'perfekt', infinitive: 'poslati (wysłać)', pl: 'Wysłałem paczkę.', before: 'Ja', after: 'paket.', answer: 'sam poslao' },
  { id: 320, tense: 'perfekt', infinitive: 'poslati (wysłać)', pl: 'Wysłałeś paczkę.', before: 'Ti', after: 'paket.', answer: 'si poslao' },
  { id: 321, tense: 'perfekt', infinitive: 'poslati (wysłać)', pl: 'Ona wysłała paczkę.', before: 'Ona', after: 'paket.', answer: 'je poslala' },
  { id: 322, tense: 'perfekt', infinitive: 'poslati (wysłać)', pl: 'Wysłaliśmy paczkę.', before: 'Mi', after: 'paket.', answer: 'smo poslali' },
  { id: 323, tense: 'perfekt', infinitive: 'poslati (wysłać)', pl: 'Wysłaliście paczkę.', before: 'Vi', after: 'paket.', answer: 'ste poslali' },
  { id: 324, tense: 'perfekt', infinitive: 'poslati (wysłać)', pl: 'Oni wysłali paczkę.', before: 'Oni', after: 'paket.', answer: 'su poslali' },

  // reći (powiedzieć)
  { id: 325, tense: 'perfekt', infinitive: 'reći (powiedzieć)', pl: 'Powiedziałem prawdę.', before: 'Ja', after: 'istinu.', answer: 'sam rekao' },
  { id: 326, tense: 'perfekt', infinitive: 'reći (powiedzieć)', pl: 'Powiedziałeś prawdę.', before: 'Ti', after: 'istinu.', answer: 'si rekao' },
  { id: 327, tense: 'perfekt', infinitive: 'reći (powiedzieć)', pl: 'Ona powiedziała prawdę.', before: 'Ona', after: 'istinu.', answer: 'je rekla' },
  { id: 328, tense: 'perfekt', infinitive: 'reći (powiedzieć)', pl: 'Powiedzieliśmy prawdę.', before: 'Mi', after: 'istinu.', answer: 'smo rekli' },
  { id: 329, tense: 'perfekt', infinitive: 'reći (powiedzieć)', pl: 'Powiedzieliście prawdę.', before: 'Vi', after: 'istinu.', answer: 'ste rekli' },
  { id: 330, tense: 'perfekt', infinitive: 'reći (powiedzieć)', pl: 'Oni powiedzieli prawdę.', before: 'Oni', after: 'istinu.', answer: 'su rekli' },

  // popiti (wypić)
  { id: 331, tense: 'perfekt', infinitive: 'popiti (wypić)', pl: 'Wypiłem kawę.', before: 'Ja', after: 'kavu.', answer: 'sam popio' },
  { id: 332, tense: 'perfekt', infinitive: 'popiti (wypić)', pl: 'Wypiłeś kawę.', before: 'Ti', after: 'kavu.', answer: 'si popio' },
  { id: 333, tense: 'perfekt', infinitive: 'popiti (wypić)', pl: 'Ona wypiła kawę.', before: 'Ona', after: 'kavu.', answer: 'je popila' },
  { id: 334, tense: 'perfekt', infinitive: 'popiti (wypić)', pl: 'Wypiliśmy kawę.', before: 'Mi', after: 'kavu.', answer: 'smo popili' },
  { id: 335, tense: 'perfekt', infinitive: 'popiti (wypić)', pl: 'Wypiliście kawę.', before: 'Vi', after: 'kavu.', answer: 'ste popili' },
  { id: 336, tense: 'perfekt', infinitive: 'popiti (wypić)', pl: 'Oni wypili kawę.', before: 'Oni', after: 'kavu.', answer: 'su popili' },

  // pojesti (zjeść)
  { id: 337, tense: 'perfekt', infinitive: 'pojesti (zjeść)', pl: 'Zjadłem śniadanie.', before: 'Ja', after: 'doručak.', answer: 'sam pojeo' },
  { id: 338, tense: 'perfekt', infinitive: 'pojesti (zjeść)', pl: 'Zjadłeś śniadanie.', before: 'Ti', after: 'doručak.', answer: 'si pojeo' },
  { id: 339, tense: 'perfekt', infinitive: 'pojesti (zjeść)', pl: 'Ona zjadła śniadanie.', before: 'Ona', after: 'doručak.', answer: 'je pojela' },
  { id: 340, tense: 'perfekt', infinitive: 'pojesti (zjeść)', pl: 'Zjedliśmy śniadanie.', before: 'Mi', after: 'doručak.', answer: 'smo pojeli' },
  { id: 341, tense: 'perfekt', infinitive: 'pojesti (zjeść)', pl: 'Zjedliście śniadanie.', before: 'Vi', after: 'doručak.', answer: 'ste pojeli' },
  { id: 342, tense: 'perfekt', infinitive: 'pojesti (zjeść)', pl: 'Oni zjedli śniadanie.', before: 'Oni', after: 'doručak.', answer: 'su pojeli' },

  // platiti (zapłacić)
  { id: 343, tense: 'perfekt', infinitive: 'platiti (zapłacić)', pl: 'Zapłaciłem rachunek.', before: 'Ja', after: 'račun.', answer: 'sam platio' },
  { id: 344, tense: 'perfekt', infinitive: 'platiti (zapłacić)', pl: 'Zapłaciłeś rachunek.', before: 'Ti', after: 'račun.', answer: 'si platio' },
  { id: 345, tense: 'perfekt', infinitive: 'platiti (zapłacić)', pl: 'Ona zapłaciła rachunek.', before: 'Ona', after: 'račun.', answer: 'je platila' },
  { id: 346, tense: 'perfekt', infinitive: 'platiti (zapłacić)', pl: 'Zapłaciliśmy rachunek.', before: 'Mi', after: 'račun.', answer: 'smo platili' },
  { id: 347, tense: 'perfekt', infinitive: 'platiti (zapłacić)', pl: 'Zapłaciliście rachunek.', before: 'Vi', after: 'račun.', answer: 'ste platili' },
  { id: 348, tense: 'perfekt', infinitive: 'platiti (zapłacić)', pl: 'Oni zapłacili rachunek.', before: 'Oni', after: 'račun.', answer: 'su platili' },

  // sjesti (usiąść)
  { id: 349, tense: 'perfekt', infinitive: 'sjesti (usiąść)', pl: 'Usiadłem za stołem.', before: 'Ja', after: 'za stol.', answer: 'sam sjeo' },
  { id: 350, tense: 'perfekt', infinitive: 'sjesti (usiąść)', pl: 'Usiadłeś za stołem.', before: 'Ti', after: 'za stol.', answer: 'si sjeo' },
  { id: 351, tense: 'perfekt', infinitive: 'sjesti (usiąść)', pl: 'Ona usiadła za stołem.', before: 'Ona', after: 'za stol.', answer: 'je sjela' },
  { id: 352, tense: 'perfekt', infinitive: 'sjesti (usiąść)', pl: 'Usiedliśmy za stołem.', before: 'Mi', after: 'za stol.', answer: 'smo sjeli' },
  { id: 353, tense: 'perfekt', infinitive: 'sjesti (usiąść)', pl: 'Usiedliście za stołem.', before: 'Vi', after: 'za stol.', answer: 'ste sjeli' },
  { id: 354, tense: 'perfekt', infinitive: 'sjesti (usiąść)', pl: 'Oni usiedli za stołem.', before: 'Oni', after: 'za stol.', answer: 'su sjeli' },

  // vratiti se (wrócić)
  { id: 355, tense: 'perfekt', infinitive: 'vratiti se (wrócić)', pl: 'Wróciłem do domu.', before: 'Ja', after: 'kući.', answer: 'sam se vratio' },
  { id: 356, tense: 'perfekt', infinitive: 'vratiti se (wrócić)', pl: 'Wróciłeś do domu.', before: 'Ti', after: 'kući.', answer: 'si se vratio' },
  { id: 357, tense: 'perfekt', infinitive: 'vratiti se (wrócić)', pl: 'Ona wróciła do domu.', before: 'Ona', after: 'kući.', answer: 'se vratila' },
  { id: 358, tense: 'perfekt', infinitive: 'vratiti se (wrócić)', pl: 'Wróciliśmy do domu.', before: 'Mi', after: 'kući.', answer: 'smo se vratili' },
  { id: 359, tense: 'perfekt', infinitive: 'vratiti se (wrócić)', pl: 'Wróciliście do domu.', before: 'Vi', after: 'kući.', answer: 'ste se vratili' },
  { id: 360, tense: 'perfekt', infinitive: 'vratiti se (wrócić)', pl: 'Oni wrócili do domu.', before: 'Oni', after: 'kući.', answer: 'su se vratili' },

  // ===== FUTUR I =====

  // putovati (podróżować)
  { id: 151, tense: 'futur', infinitive: 'putovati (podróżować)', pl: 'Będę podróżować do Zagrzebia.', before: 'Ja', after: 'u Zagreb.', answer: 'ću putovati' },
  { id: 152, tense: 'futur', infinitive: 'putovati (podróżować)', pl: 'Będziesz podróżować do Zagrzebia.', before: 'Ti', after: 'u Zagreb.', answer: 'ćeš putovati' },
  { id: 153, tense: 'futur', infinitive: 'putovati (podróżować)', pl: 'On będzie podróżować do Zagrzebia.', before: 'On', after: 'u Zagreb.', answer: 'će putovati' },
  { id: 154, tense: 'futur', infinitive: 'putovati (podróżować)', pl: 'Będziemy podróżować do Zagrzebia.', before: 'Mi', after: 'u Zagreb.', answer: 'ćemo putovati' },
  { id: 155, tense: 'futur', infinitive: 'putovati (podróżować)', pl: 'Będziecie podróżować do Zagrzebia.', before: 'Vi', after: 'u Zagreb.', answer: 'ćete putovati' },
  { id: 156, tense: 'futur', infinitive: 'putovati (podróżować)', pl: 'Oni będą podróżować do Zagrzebia.', before: 'Oni', after: 'u Zagreb.', answer: 'će putovati' },

  // kuhati (gotować)
  { id: 157, tense: 'futur', infinitive: 'kuhati (gotować)', pl: 'Będę gotować kolację.', before: 'Ja', after: 'večeru.', answer: 'ću kuhati' },
  { id: 158, tense: 'futur', infinitive: 'kuhati (gotować)', pl: 'Będziesz gotować kolację.', before: 'Ti', after: 'večeru.', answer: 'ćeš kuhati' },
  { id: 159, tense: 'futur', infinitive: 'kuhati (gotować)', pl: 'Ona będzie gotować kolację.', before: 'Ona', after: 'večeru.', answer: 'će kuhati' },
  { id: 160, tense: 'futur', infinitive: 'kuhati (gotować)', pl: 'Będziemy gotować kolację.', before: 'Mi', after: 'večeru.', answer: 'ćemo kuhati' },
  { id: 161, tense: 'futur', infinitive: 'kuhati (gotować)', pl: 'Będziecie gotować kolację.', before: 'Vi', after: 'večeru.', answer: 'ćete kuhati' },
  { id: 162, tense: 'futur', infinitive: 'kuhati (gotować)', pl: 'Oni będą gotować kolację.', before: 'Oni', after: 'večeru.', answer: 'će kuhati' },

  // stići (dotrzeć)
  { id: 163, tense: 'futur', infinitive: 'stići (dotrzeć)', pl: 'Dotrę na czas.', before: 'Ja', after: 'na vrijeme.', answer: 'ću stići' },
  { id: 164, tense: 'futur', infinitive: 'stići (dotrzeć)', pl: 'Dotrzesz na czas.', before: 'Ti', after: 'na vrijeme.', answer: 'ćeš stići' },
  { id: 165, tense: 'futur', infinitive: 'stići (dotrzeć)', pl: 'On dotrze na czas.', before: 'On', after: 'na vrijeme.', answer: 'će stići' },
  { id: 166, tense: 'futur', infinitive: 'stići (dotrzeć)', pl: 'Dotrzemy na czas.', before: 'Mi', after: 'na vrijeme.', answer: 'ćemo stići' },
  { id: 167, tense: 'futur', infinitive: 'stići (dotrzeć)', pl: 'Dotrzecie na czas.', before: 'Vi', after: 'na vrijeme.', answer: 'ćete stići' },
  { id: 168, tense: 'futur', infinitive: 'stići (dotrzeć)', pl: 'Oni dotrą na czas.', before: 'Oni', after: 'na vrijeme.', answer: 'će stići' },

  // naučiti (nauczyć się)
  { id: 169, tense: 'futur', infinitive: 'naučiti (nauczyć się)', pl: 'Nauczę się szybko.', before: 'Ja', after: 'brzo.', answer: 'ću naučiti' },
  { id: 170, tense: 'futur', infinitive: 'naučiti (nauczyć się)', pl: 'Nauczysz się szybko.', before: 'Ti', after: 'brzo.', answer: 'ćeš naučiti' },
  { id: 171, tense: 'futur', infinitive: 'naučiti (nauczyć się)', pl: 'Ona nauczy się szybko.', before: 'Ona', after: 'brzo.', answer: 'će naučiti' },
  { id: 172, tense: 'futur', infinitive: 'naučiti (nauczyć się)', pl: 'Nauczymy się szybko.', before: 'Mi', after: 'brzo.', answer: 'ćemo naučiti' },
  { id: 173, tense: 'futur', infinitive: 'naučiti (nauczyć się)', pl: 'Nauczycie się szybko.', before: 'Vi', after: 'brzo.', answer: 'ćete naučiti' },
  { id: 174, tense: 'futur', infinitive: 'naučiti (nauczyć się)', pl: 'Oni nauczą się szybko.', before: 'Oni', after: 'brzo.', answer: 'će naučiti' },

  // nazvati (zadzwonić)
  { id: 175, tense: 'futur', infinitive: 'nazvati (zadzwonić)', pl: 'Zadzwonię jutro.', before: 'Ja', after: 'sutra.', answer: 'ću nazvati' },
  { id: 176, tense: 'futur', infinitive: 'nazvati (zadzwonić)', pl: 'Zadzwonisz jutro.', before: 'Ti', after: 'sutra.', answer: 'ćeš nazvati' },
  { id: 177, tense: 'futur', infinitive: 'nazvati (zadzwonić)', pl: 'On zadzwoni jutro.', before: 'On', after: 'sutra.', answer: 'će nazvati' },
  { id: 178, tense: 'futur', infinitive: 'nazvati (zadzwonić)', pl: 'Zadzwonimy jutro.', before: 'Mi', after: 'sutra.', answer: 'ćemo nazvati' },
  { id: 179, tense: 'futur', infinitive: 'nazvati (zadzwonić)', pl: 'Zadzwonicie jutro.', before: 'Vi', after: 'sutra.', answer: 'ćete nazvati' },
  { id: 180, tense: 'futur', infinitive: 'nazvati (zadzwonić)', pl: 'Oni zadzwonią jutro.', before: 'Oni', after: 'sutra.', answer: 'će nazvati' },

  // raditi (pracować)
  { id: 181, tense: 'futur', infinitive: 'raditi (pracować)', pl: 'Będę pracować razem.', before: 'Ja', after: 'zajedno.', answer: 'ću raditi' },
  { id: 182, tense: 'futur', infinitive: 'raditi (pracować)', pl: 'Będziesz pracować razem.', before: 'Ti', after: 'zajedno.', answer: 'ćeš raditi' },
  { id: 183, tense: 'futur', infinitive: 'raditi (pracować)', pl: 'Ona będzie pracować razem.', before: 'Ona', after: 'zajedno.', answer: 'će raditi' },
  { id: 184, tense: 'futur', infinitive: 'raditi (pracować)', pl: 'Będziemy pracować razem.', before: 'Mi', after: 'zajedno.', answer: 'ćemo raditi' },
  { id: 185, tense: 'futur', infinitive: 'raditi (pracować)', pl: 'Będziecie pracować razem.', before: 'Vi', after: 'zajedno.', answer: 'ćete raditi' },
  { id: 186, tense: 'futur', infinitive: 'raditi (pracować)', pl: 'Oni będą pracować razem.', before: 'Oni', after: 'zajedno.', answer: 'će raditi' },

  // vidjeti (zobaczyć)
  { id: 187, tense: 'futur', infinitive: 'vidjeti (zobaczyć)', pl: 'Zobaczę różnicę.', before: 'Ja', after: 'razliku.', answer: 'ću vidjeti' },
  { id: 188, tense: 'futur', infinitive: 'vidjeti (zobaczyć)', pl: 'Zobaczysz różnicę.', before: 'Ti', after: 'razliku.', answer: 'ćeš vidjeti' },
  { id: 189, tense: 'futur', infinitive: 'vidjeti (zobaczyć)', pl: 'On zobaczy różnicę.', before: 'On', after: 'razliku.', answer: 'će vidjeti' },
  { id: 190, tense: 'futur', infinitive: 'vidjeti (zobaczyć)', pl: 'Zobaczymy różnicę.', before: 'Mi', after: 'razliku.', answer: 'ćemo vidjeti' },
  { id: 191, tense: 'futur', infinitive: 'vidjeti (zobaczyć)', pl: 'Zobaczycie różnicę.', before: 'Vi', after: 'razliku.', answer: 'ćete vidjeti' },
  { id: 192, tense: 'futur', infinitive: 'vidjeti (zobaczyć)', pl: 'Oni zobaczą różnicę.', before: 'Oni', after: 'razliku.', answer: 'će vidjeti' },

  // kupiti (kupić)
  { id: 193, tense: 'futur', infinitive: 'kupiti (kupić)', pl: 'Kupię nowy telefon.', before: 'Ja', after: 'novi telefon.', answer: 'ću kupiti' },
  { id: 194, tense: 'futur', infinitive: 'kupiti (kupić)', pl: 'Kupisz nowy telefon.', before: 'Ti', after: 'novi telefon.', answer: 'ćeš kupiti' },
  { id: 195, tense: 'futur', infinitive: 'kupiti (kupić)', pl: 'Ona kupi nowy telefon.', before: 'Ona', after: 'novi telefon.', answer: 'će kupiti' },
  { id: 196, tense: 'futur', infinitive: 'kupiti (kupić)', pl: 'Kupimy nowy telefon.', before: 'Mi', after: 'novi telefon.', answer: 'ćemo kupiti' },
  { id: 197, tense: 'futur', infinitive: 'kupiti (kupić)', pl: 'Kupicie nowy telefon.', before: 'Vi', after: 'novi telefon.', answer: 'ćete kupiti' },
  { id: 198, tense: 'futur', infinitive: 'kupiti (kupić)', pl: 'Oni kupią nowy telefon.', before: 'Oni', after: 'novi telefon.', answer: 'će kupiti' },

  // pisati (pisać)
  { id: 199, tense: 'futur', infinitive: 'pisati (pisać)', pl: 'Będę pisać list.', before: 'Ja', after: 'pismo.', answer: 'ću pisati' },
  { id: 200, tense: 'futur', infinitive: 'pisati (pisać)', pl: 'Będziesz pisać list.', before: 'Ti', after: 'pismo.', answer: 'ćeš pisati' },
  { id: 201, tense: 'futur', infinitive: 'pisati (pisać)', pl: 'On będzie pisać list.', before: 'On', after: 'pismo.', answer: 'će pisati' },
  { id: 202, tense: 'futur', infinitive: 'pisati (pisać)', pl: 'Będziemy pisać list.', before: 'Mi', after: 'pismo.', answer: 'ćemo pisati' },
  { id: 203, tense: 'futur', infinitive: 'pisati (pisać)', pl: 'Będziecie pisać list.', before: 'Vi', after: 'pismo.', answer: 'ćete pisati' },
  { id: 204, tense: 'futur', infinitive: 'pisati (pisać)', pl: 'Oni będą pisać list.', before: 'Oni', after: 'pismo.', answer: 'će pisati' },

  // pitati (zapytać)
  { id: 205, tense: 'futur', infinitive: 'pitati (zapytać)', pl: 'Zapytam nauczyciela.', before: 'Ja', after: 'učitelja.', answer: 'ću pitati' },
  { id: 206, tense: 'futur', infinitive: 'pitati (zapytać)', pl: 'Zapytasz nauczyciela.', before: 'Ti', after: 'učitelja.', answer: 'ćeš pitati' },
  { id: 207, tense: 'futur', infinitive: 'pitati (zapytać)', pl: 'Ona zapyta nauczyciela.', before: 'Ona', after: 'učitelja.', answer: 'će pitati' },
  { id: 208, tense: 'futur', infinitive: 'pitati (zapytać)', pl: 'Zapytamy nauczyciela.', before: 'Mi', after: 'učitelja.', answer: 'ćemo pitati' },
  { id: 209, tense: 'futur', infinitive: 'pitati (zapytać)', pl: 'Zapytacie nauczyciela.', before: 'Vi', after: 'učitelja.', answer: 'ćete pitati' },
  { id: 210, tense: 'futur', infinitive: 'pitati (zapytać)', pl: 'Oni zapytają nauczyciela.', before: 'Oni', after: 'učitelja.', answer: 'će pitati' },

  // otvoriti (otworzyć)
  { id: 361, tense: 'futur', infinitive: 'otvoriti (otworzyć)', pl: 'Otworzę okno.', before: 'Ja', after: 'prozor.', answer: 'ću otvoriti' },
  { id: 362, tense: 'futur', infinitive: 'otvoriti (otworzyć)', pl: 'Otworzysz okno.', before: 'Ti', after: 'prozor.', answer: 'ćeš otvoriti' },
  { id: 363, tense: 'futur', infinitive: 'otvoriti (otworzyć)', pl: 'Ona otworzy okno.', before: 'Ona', after: 'prozor.', answer: 'će otvoriti' },
  { id: 364, tense: 'futur', infinitive: 'otvoriti (otworzyć)', pl: 'Otworzymy okno.', before: 'Mi', after: 'prozor.', answer: 'ćemo otvoriti' },
  { id: 365, tense: 'futur', infinitive: 'otvoriti (otworzyć)', pl: 'Otworzycie okno.', before: 'Vi', after: 'prozor.', answer: 'ćete otvoriti' },
  { id: 366, tense: 'futur', infinitive: 'otvoriti (otworzyć)', pl: 'Oni otworzą okno.', before: 'Oni', after: 'prozor.', answer: 'će otvoriti' },

  // zatvoriti (zamknąć)
  { id: 367, tense: 'futur', infinitive: 'zatvoriti (zamknąć)', pl: 'Zamknę drzwi.', before: 'Ja', after: 'vrata.', answer: 'ću zatvoriti' },
  { id: 368, tense: 'futur', infinitive: 'zatvoriti (zamknąć)', pl: 'Zamkniesz drzwi.', before: 'Ti', after: 'vrata.', answer: 'ćeš zatvoriti' },
  { id: 369, tense: 'futur', infinitive: 'zatvoriti (zamknąć)', pl: 'Ona zamknie drzwi.', before: 'Ona', after: 'vrata.', answer: 'će zatvoriti' },
  { id: 370, tense: 'futur', infinitive: 'zatvoriti (zamknąć)', pl: 'Zamkniemy drzwi.', before: 'Mi', after: 'vrata.', answer: 'ćemo zatvoriti' },
  { id: 371, tense: 'futur', infinitive: 'zatvoriti (zamknąć)', pl: 'Zamkniecie drzwi.', before: 'Vi', after: 'vrata.', answer: 'ćete zatvoriti' },
  { id: 372, tense: 'futur', infinitive: 'zatvoriti (zamknąć)', pl: 'Oni zamkną drzwi.', before: 'Oni', after: 'vrata.', answer: 'će zatvoriti' },

  // poslati (wysłać)
  { id: 373, tense: 'futur', infinitive: 'poslati (wysłać)', pl: 'Wyślę paczkę.', before: 'Ja', after: 'paket.', answer: 'ću poslati' },
  { id: 374, tense: 'futur', infinitive: 'poslati (wysłać)', pl: 'Wyślesz paczkę.', before: 'Ti', after: 'paket.', answer: 'ćeš poslati' },
  { id: 375, tense: 'futur', infinitive: 'poslati (wysłać)', pl: 'Ona wyśle paczkę.', before: 'Ona', after: 'paket.', answer: 'će poslati' },
  { id: 376, tense: 'futur', infinitive: 'poslati (wysłać)', pl: 'Wyślemy paczkę.', before: 'Mi', after: 'paket.', answer: 'ćemo poslati' },
  { id: 377, tense: 'futur', infinitive: 'poslati (wysłać)', pl: 'Wyślecie paczkę.', before: 'Vi', after: 'paket.', answer: 'ćete poslati' },
  { id: 378, tense: 'futur', infinitive: 'poslati (wysłać)', pl: 'Oni wyślą paczkę.', before: 'Oni', after: 'paket.', answer: 'će poslati' },

  // reći (powiedzieć)
  { id: 379, tense: 'futur', infinitive: 'reći (powiedzieć)', pl: 'Powiem prawdę.', before: 'Ja', after: 'istinu.', answer: 'ću reći' },
  { id: 380, tense: 'futur', infinitive: 'reći (powiedzieć)', pl: 'Powiesz prawdę.', before: 'Ti', after: 'istinu.', answer: 'ćeš reći' },
  { id: 381, tense: 'futur', infinitive: 'reći (powiedzieć)', pl: 'Ona powie prawdę.', before: 'Ona', after: 'istinu.', answer: 'će reći' },
  { id: 382, tense: 'futur', infinitive: 'reći (powiedzieć)', pl: 'Powiemy prawdę.', before: 'Mi', after: 'istinu.', answer: 'ćemo reći' },
  { id: 383, tense: 'futur', infinitive: 'reći (powiedzieć)', pl: 'Powiecie prawdę.', before: 'Vi', after: 'istinu.', answer: 'ćete reći' },
  { id: 384, tense: 'futur', infinitive: 'reći (powiedzieć)', pl: 'Oni powiedzą prawdę.', before: 'Oni', after: 'istinu.', answer: 'će reći' },

  // popiti (wypić)
  { id: 385, tense: 'futur', infinitive: 'popiti (wypić)', pl: 'Wypiję kawę.', before: 'Ja', after: 'kavu.', answer: 'ću popiti' },
  { id: 386, tense: 'futur', infinitive: 'popiti (wypić)', pl: 'Wypijesz kawę.', before: 'Ti', after: 'kavu.', answer: 'ćeš popiti' },
  { id: 387, tense: 'futur', infinitive: 'popiti (wypić)', pl: 'Ona wypije kawę.', before: 'Ona', after: 'kavu.', answer: 'će popiti' },
  { id: 388, tense: 'futur', infinitive: 'popiti (wypić)', pl: 'Wypijemy kawę.', before: 'Mi', after: 'kavu.', answer: 'ćemo popiti' },
  { id: 389, tense: 'futur', infinitive: 'popiti (wypić)', pl: 'Wypijecie kawę.', before: 'Vi', after: 'kavu.', answer: 'ćete popiti' },
  { id: 390, tense: 'futur', infinitive: 'popiti (wypić)', pl: 'Oni wypiją kawę.', before: 'Oni', after: 'kavu.', answer: 'će popiti' },

  // pojesti (zjeść)
  { id: 391, tense: 'futur', infinitive: 'pojesti (zjeść)', pl: 'Zjem śniadanie.', before: 'Ja', after: 'doručak.', answer: 'ću pojesti' },
  { id: 392, tense: 'futur', infinitive: 'pojesti (zjeść)', pl: 'Zjesz śniadanie.', before: 'Ti', after: 'doručak.', answer: 'ćeš pojesti' },
  { id: 393, tense: 'futur', infinitive: 'pojesti (zjeść)', pl: 'Ona zje śniadanie.', before: 'Ona', after: 'doručak.', answer: 'će pojesti' },
  { id: 394, tense: 'futur', infinitive: 'pojesti (zjeść)', pl: 'Zjemy śniadanie.', before: 'Mi', after: 'doručak.', answer: 'ćemo pojesti' },
  { id: 395, tense: 'futur', infinitive: 'pojesti (zjeść)', pl: 'Zjecie śniadanie.', before: 'Vi', after: 'doručak.', answer: 'ćete pojesti' },
  { id: 396, tense: 'futur', infinitive: 'pojesti (zjeść)', pl: 'Oni zjedzą śniadanie.', before: 'Oni', after: 'doručak.', answer: 'će pojesti' },

  // platiti (zapłacić)
  { id: 397, tense: 'futur', infinitive: 'platiti (zapłacić)', pl: 'Zapłacę rachunek.', before: 'Ja', after: 'račun.', answer: 'ću platiti' },
  { id: 398, tense: 'futur', infinitive: 'platiti (zapłacić)', pl: 'Zapłacisz rachunek.', before: 'Ti', after: 'račun.', answer: 'ćeš platiti' },
  { id: 399, tense: 'futur', infinitive: 'platiti (zapłacić)', pl: 'Ona zapłaci rachunek.', before: 'Ona', after: 'račun.', answer: 'će platiti' },
  { id: 400, tense: 'futur', infinitive: 'platiti (zapłacić)', pl: 'Zapłacimy rachunek.', before: 'Mi', after: 'račun.', answer: 'ćemo platiti' },
  { id: 401, tense: 'futur', infinitive: 'platiti (zapłacić)', pl: 'Zapłacicie rachunek.', before: 'Vi', after: 'račun.', answer: 'ćete platiti' },
  { id: 402, tense: 'futur', infinitive: 'platiti (zapłacić)', pl: 'Oni zapłacą rachunek.', before: 'Oni', after: 'račun.', answer: 'će platiti' },

  // vratiti se (wrócić)
  { id: 403, tense: 'futur', infinitive: 'vratiti se (wrócić)', pl: 'Wrócę do domu.', before: 'Ja', after: 'kući.', answer: 'ću se vratiti' },
  { id: 404, tense: 'futur', infinitive: 'vratiti se (wrócić)', pl: 'Wrócisz do domu.', before: 'Ti', after: 'kući.', answer: 'ćeš se vratiti' },
  { id: 405, tense: 'futur', infinitive: 'vratiti se (wrócić)', pl: 'Ona wróci do domu.', before: 'Ona', after: 'kući.', answer: 'će se vratiti' },
  { id: 406, tense: 'futur', infinitive: 'vratiti se (wrócić)', pl: 'Wrócimy do domu.', before: 'Mi', after: 'kući.', answer: 'ćemo se vratiti' },
  { id: 407, tense: 'futur', infinitive: 'vratiti se (wrócić)', pl: 'Wrócicie do domu.', before: 'Vi', after: 'kući.', answer: 'ćete se vratiti' },
  { id: 408, tense: 'futur', infinitive: 'vratiti se (wrócić)', pl: 'Oni wrócą do domu.', before: 'Oni', after: 'kući.', answer: 'će se vratiti' },

  // probati (spróbować)
  { id: 409, tense: 'futur', infinitive: 'probati (spróbować)', pl: 'Spróbuję tego dania.', before: 'Ja', after: 'ovo jelo.', answer: 'ću probati' },
  { id: 410, tense: 'futur', infinitive: 'probati (spróbować)', pl: 'Spróbujesz tego dania.', before: 'Ti', after: 'ovo jelo.', answer: 'ćeš probati' },
  { id: 411, tense: 'futur', infinitive: 'probati (spróbować)', pl: 'Ona spróbuje tego dania.', before: 'Ona', after: 'ovo jelo.', answer: 'će probati' },
  { id: 412, tense: 'futur', infinitive: 'probati (spróbować)', pl: 'Spróbujemy tego dania.', before: 'Mi', after: 'ovo jelo.', answer: 'ćemo probati' },
  { id: 413, tense: 'futur', infinitive: 'probati (spróbować)', pl: 'Spróbujecie tego dania.', before: 'Vi', after: 'ovo jelo.', answer: 'ćete probati' },
  { id: 414, tense: 'futur', infinitive: 'probati (spróbować)', pl: 'Oni spróbują tego dania.', before: 'Oni', after: 'ovo jelo.', answer: 'će probati' },

  // završiti (skończyć)
  { id: 415, tense: 'futur', infinitive: 'završiti (skończyć)', pl: 'Skończę pracę.', before: 'Ja', after: 'posao.', answer: 'ću završiti' },
  { id: 416, tense: 'futur', infinitive: 'završiti (skończyć)', pl: 'Skończysz pracę.', before: 'Ti', after: 'posao.', answer: 'ćeš završiti' },
  { id: 417, tense: 'futur', infinitive: 'završiti (skończyć)', pl: 'Ona skończy pracę.', before: 'Ona', after: 'posao.', answer: 'će završiti' },
  { id: 418, tense: 'futur', infinitive: 'završiti (skończyć)', pl: 'Skończymy pracę.', before: 'Mi', after: 'posao.', answer: 'ćemo završiti' },
  { id: 419, tense: 'futur', infinitive: 'završiti (skończyć)', pl: 'Skończycie pracę.', before: 'Vi', after: 'posao.', answer: 'ćete završiti' },
  { id: 420, tense: 'futur', infinitive: 'završiti (skończyć)', pl: 'Oni skończą pracę.', before: 'Oni', after: 'posao.', answer: 'će završiti' }
]