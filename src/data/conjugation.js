// UWAGA: formy czasownikowe wymagają weryfikacji przez native speakera.
// Perfekt: domyślnie forma męska dla "Ja/Ti/On", żeńska dla "Ona",
// wspólna (-li) dla liczby mnogiej.

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
  { id: 210, tense: 'futur', infinitive: 'pitati (zapytać)', pl: 'Oni zapytają nauczyciela.', before: 'Oni', after: 'učitelja.', answer: 'će pitati' }
]