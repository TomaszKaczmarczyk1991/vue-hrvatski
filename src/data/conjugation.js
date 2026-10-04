// UWAGA: formy czasownikowe wymagają weryfikacji przez native speakera.
// Perfekt/Futur: dla uproszczenia przyjęto rodzaj męski tam, gdzie
// zdanie nie precyzuje rodzaju podmiotu.

export const conjugationExercises = [
  // --- Prezent ---
  { id: 1, tense: 'prezent', infinitive: 'raditi (robić)', pl: 'Ja pracuję codziennie.', before: 'Ja', after: 'svaki dan.', answer: 'radim' },
  { id: 2, tense: 'prezent', infinitive: 'pisati (pisać)', pl: 'Ty piszesz list.', before: 'Ti', after: 'pismo.', answer: 'pišeš' },
  { id: 3, tense: 'prezent', infinitive: 'piti (pić)', pl: 'My pijemy sok.', before: 'Mi', after: 'sok.', answer: 'pijemo' },
  { id: 4, tense: 'prezent', infinitive: 'nositi (nosić)', pl: 'Ona nosi torbu.', before: 'Ona', after: 'torbu.', answer: 'nosi' },
  { id: 5, tense: 'prezent', infinitive: 'voljeti (kochać, lubić)', pl: 'Oni kochają muzykę.', before: 'Oni', after: 'glazbu.', answer: 'vole' },
  { id: 6, tense: 'prezent', infinitive: 'čekati (czekać)', pl: 'Wy czekacie na autobus.', before: 'Vi', after: 'autobus.', answer: 'čekate' },
  { id: 7, tense: 'prezent', infinitive: 'živjeti (mieszkać)', pl: 'On mieszka w Splicie.', before: 'On', after: 'u Splitu.', answer: 'živi' },
  { id: 8, tense: 'prezent', infinitive: 'učiti (uczyć się)', pl: 'Ja uczę się chorwackiego.', before: 'Ja', after: 'hrvatski.', answer: 'učim' },
  { id: 9, tense: 'prezent', infinitive: 'kupovati (kupować)', pl: 'My kupujemy chleb.', before: 'Mi', after: 'kruh.', answer: 'kupujemo' },
  { id: 10, tense: 'prezent', infinitive: 'čuti (słyszeć)', pl: 'Ty mnie słyszysz.', before: 'Ti me', after: '.', answer: 'čuješ' },
  { id: 11, tense: 'prezent', infinitive: 'igrati (grać)', pl: 'Oni grają w piłkę nożną.', before: 'Oni', after: 'nogomet.', answer: 'igraju' },
  { id: 12, tense: 'prezent', infinitive: 'spavati (spać)', pl: 'Dzieci śpią spokojnie.', before: 'Djeca', after: 'mirno.', answer: 'spavaju' },

  // --- Perfekt ---
  { id: 13, tense: 'perfekt', infinitive: 'raditi (robić)', pl: 'Ja wczoraj pracowałem.', before: 'Jučer', after: '.', answer: 'sam radio' },
  { id: 14, tense: 'perfekt', infinitive: 'kupiti (kupić)', pl: 'Ona kupiła chleb.', before: 'Ona', after: 'kruh.', answer: 'je kupila' },
  { id: 15, tense: 'perfekt', infinitive: 'gledati (oglądać)', pl: 'My oglądaliśmy film.', before: 'Mi', after: 'film.', answer: 'smo gledali' },
  { id: 16, tense: 'perfekt', infinitive: 'doći (przyjść)', pl: 'Oni przyszli późno.', before: 'Oni', after: 'kasno.', answer: 'su došli' },
  { id: 17, tense: 'perfekt', infinitive: 'zaboraviti (zapomnieć)', pl: 'Zapomniałem kluczy.', before: '', after: 'ključeve.', answer: 'Zaboravio sam' },
  { id: 18, tense: 'perfekt', infinitive: 'pomoći (pomóc)', pl: 'Wy nam pomogliście.', before: 'Vi', after: 'nama.', answer: 'ste pomogli' },
  { id: 19, tense: 'perfekt', infinitive: 'pročitati (przeczytać)', pl: 'Przeczytałam tę książkę.', before: '', after: 'tu knjigu.', answer: 'Pročitala sam' },
  { id: 20, tense: 'perfekt', infinitive: 'naučiti (nauczyć się)', pl: 'Nauczyłem się dziś dużo.', before: '', after: 'puno danas.', answer: 'Naučio sam' },
  { id: 21, tense: 'perfekt', infinitive: 'kuhati (gotować)', pl: 'My gotowaliśmy kolację.', before: 'Mi', after: 'večeru.', answer: 'smo kuhali' },
  { id: 22, tense: 'perfekt', infinitive: 'izgubiti (zgubić)', pl: 'My zgubiliśmy drogę.', before: 'Mi', after: 'put.', answer: 'smo izgubili' },
  { id: 23, tense: 'perfekt', infinitive: 'stići (dotrzeć)', pl: 'On dotarł na czas.', before: 'On', after: 'na vrijeme.', answer: 'je stigao' },
  { id: 24, tense: 'perfekt', infinitive: 'zaspati (zasnąć)', pl: 'Zasnąłem późno.', before: '', after: 'kasno.', answer: 'Zaspao sam' },

  // --- Futur I ---
  { id: 25, tense: 'futur', infinitive: 'putovati (podróżować)', pl: 'Jutro będę podróżować.', before: 'Sutra', after: '.', answer: 'ću putovati' },
  { id: 26, tense: 'futur', infinitive: 'kuhati (gotować)', pl: 'My będziemy gotować kolację.', before: 'Mi', after: 'večeru.', answer: 'ćemo kuhati' },
  { id: 27, tense: 'futur', infinitive: 'stići (dotrzeć)', pl: 'Oni dotrą późno.', before: 'Oni', after: 'kasno.', answer: 'će stići' },
  { id: 28, tense: 'futur', infinitive: 'naučiti (nauczyć się)', pl: 'Wy nauczycie się szybko.', before: 'Vi', after: 'brzo.', answer: 'ćete naučiti' },
  { id: 29, tense: 'futur', infinitive: 'nazvati (zadzwonić)', pl: 'Ona zadzwoni jutro.', before: 'Ona', after: 'sutra.', answer: 'će nazvati' },
  { id: 30, tense: 'futur', infinitive: 'raditi (pracować)', pl: 'Będziemy pracować razem.', before: '', after: 'zajedno.', answer: 'Radit ćemo' },
  { id: 31, tense: 'futur', infinitive: 'vidjeti (zobaczyć)', pl: 'Zobaczysz różnicę.', before: '', after: 'razliku.', answer: 'Vidjet ćeš' },
  { id: 32, tense: 'futur', infinitive: 'kupiti (kupić)', pl: 'Kupię nowy telefon.', before: '', after: 'novi telefon.', answer: 'Kupit ću' },
  { id: 33, tense: 'futur', infinitive: 'pisati (pisać)', pl: 'Oni będą do nas pisać.', before: 'Oni', after: 'nama.', answer: 'će pisati' },
  { id: 34, tense: 'futur', infinitive: 'razumjeti (zrozumieć)', pl: 'Wy zrozumiecie później.', before: 'Vi', after: 'kasnije.', answer: 'ćete razumjeti' },
  { id: 35, tense: 'futur', infinitive: 'pitati (zapytać)', pl: 'My zapytamy nauczyciela.', before: 'Mi', after: 'učitelja.', answer: 'ćemo pitati' },
  { id: 36, tense: 'futur', infinitive: 'dobiti (dostać)', pl: 'Wy dostaniecie odpowiedź.', before: 'Vi', after: 'odgovor.', answer: 'ćete dobiti' }
]