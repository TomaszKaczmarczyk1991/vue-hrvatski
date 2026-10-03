export const grammarSections = [
  {
    id: 'czasy',
    title: 'Czasy',
    topics: [
      {
        id: 'prezent',
        title: 'Prezent',
        blocks: [
          {
            type: 'text',
            text: 'Prezent to czas teraźniejszy — najprostszy w budowie. Tworzy się go od tematu czasownika z końcówką -am, -em, -im lub -jem.'
          },
          {
            type: 'table',
            headers: ['Czasownik', 'Odmiana'],
            rows: [
              ['raditi (robić)', 'radim, radiš, radi, radimo, radite, rade'],
              ['čitati (czytać)', 'čitam, čitaš, čita, čitamo, čitate, čitaju'],
              ['piti (pić)', 'pijem, piješ, pije, pijemo, pijete, piju']
            ]
          },
          {
            type: 'warning',
            text: 'Prezent czasowników dokonanych często wyraża przyszłość (tzw. futurski prezent) — np. "Sutra putujem u Zagreb" = "Jutro jadę do Zagrzebia", mimo że forma jest teraźniejsza.'
          },
          {
            type: 'examples',
            items: [
              { hr: 'Radim svaki dan.', pl: 'Pracuję codziennie.' },
              { hr: 'Čitaš li knjigu?', pl: 'Czytasz książkę?' },
              { hr: 'Pijemo kavu ujutro.', pl: 'Pijemy kawę rano.' },
              { hr: 'On živi u Splitu.', pl: 'On mieszka w Splicie.' },
              { hr: 'Mi putujemo sutra.', pl: 'My podróżujemy jutro.' },
              { hr: 'Vi govorite hrvatski.', pl: 'Wy mówicie po chorwacku.' },
              { hr: 'Oni rade u gradu.', pl: 'Oni pracują w mieście.' },
              { hr: 'Ja ne razumijem.', pl: 'Ja nie rozumiem.' },
              { hr: 'Ona peče kruh.', pl: 'Ona piecze chleb.' },
              { hr: 'Djeca se igraju vani.', pl: 'Dzieci bawią się na dworze.' }
            ]
          }
        ]
      },
      {
        id: 'perfekt',
        title: 'Perfekt',
        blocks: [
          {
            type: 'text',
            text: 'Perfekt to podstawowy, najczęściej używany czas przeszły. Tworzy się go z nieakcentowanego prezentu czasownika posiłkowego "biti" oraz imiesłowu czynnego przeszłego.'
          },
          {
            type: 'text',
            text: 'Wzór: imiesłów (-o/-la/-li) + sam / si / je / smo / ste / su'
          },
          {
            type: 'table',
            headers: ['Osoba', 'Liczba pojedyncza', 'Liczba mnoga'],
            rows: [
              ['1.', 'pjevao/pjevala sam', 'pjevali/pjevale smo'],
              ['2.', 'pjevao/pjevala si', 'pjevali/pjevale ste'],
              ['3.', 'pjevao/pjevala je', 'pjevali/pjevale su']
            ]
          },
          {
            type: 'warning',
            text: 'W mowie potocznej "je" w 3. osobie bywa pomijane (tzw. krnji perfekt) — często w nagłówkach, np. "Učenici posjetili zoo" zamiast "su posjetili".'
          },
          {
            type: 'examples',
            items: [
              { hr: 'Jučer sam radio.', pl: 'Wczoraj pracowałem.' },
              { hr: 'Bio sam u Zagrebu.', pl: 'Byłem w Zagrzebiu.' },
              { hr: 'Ona je kupila kruh.', pl: 'Ona kupiła chleb.' },
              { hr: 'Mi smo gledali film.', pl: 'My oglądaliśmy film.' },
              { hr: 'Jesi li spavao dobro?', pl: 'Spałeś dobrze?' },
              { hr: 'Oni su došli kasno.', pl: 'Oni przyszli późno.' },
              { hr: 'Nisam znao odgovor.', pl: 'Nie znałem odpowiedzi.' },
              { hr: 'Vi ste nam pomogli.', pl: 'Wy nam pomogliście.' },
              { hr: 'Pročitala sam tu knjigu.', pl: 'Przeczytałam tę książkę.' },
              { hr: 'Zaboravio sam ključeve.', pl: 'Zapomniałem kluczy.' }
            ]
          }
        ]
      },
      {
        id: 'futur',
        title: 'Futur I',
        blocks: [
          {
            type: 'text',
            text: 'Futur I to czas przyszły, tworzony z bezokolicznika oraz nieakcentowanego prezentu czasownika posiłkowego "htjeti" (ću, ćeš, će, ćemo, ćete, će).'
          },
          {
            type: 'text',
            text: 'Przykład: Gledat ću film, ti ćeš slušati glazbu. — Będę oglądał film, ty będziesz słuchać muzyki.'
          },
          {
            type: 'warning',
            text: 'Pułapka pisowniowa: gdy bezokolicznik kończy się na -ti, "ti" znika i reszta łączy się z końcówką w jedno słowo: gledati + ću → gledat ću, raditi + ću → radit ću.'
          },
          {
            type: 'examples',
            items: [
              { hr: 'Sutra ću putovati.', pl: 'Jutro będę podróżować.' },
              { hr: 'Hoćeš li doći?', pl: 'Przyjdziesz?' },
              { hr: 'Mi ćemo kuhati večeru.', pl: 'My będziemy gotować kolację.' },
              { hr: 'Oni će stići kasno.', pl: 'Oni dotrą późno.' },
              { hr: 'Ja neću zaboraviti.', pl: 'Ja nie zapomnę.' },
              { hr: 'Vi ćete naučiti brzo.', pl: 'Wy nauczycie się szybko.' },
              { hr: 'Ona će nazvati sutra.', pl: 'Ona zadzwoni jutro.' },
              { hr: 'Radit ćemo zajedno.', pl: 'Będziemy pracować razem.' },
              { hr: 'Hoće li padati kiša?', pl: 'Czy będzie padać deszcz?' },
              { hr: 'Vidjet ćeš razliku.', pl: 'Zobaczysz różnicę.' }
            ]
          }
        ]
      },
      {
        id: 'inne-czasy',
        title: 'Czasy rzadsze',
        blocks: [
          {
            type: 'text',
            text: 'Te czasy istnieją w gramatyce, ale w codziennej mowie są rzadkie — warto je znać z nazwy, nie trzeba ich aktywnie używać na start.'
          },
          {
            type: 'list',
            items: [
              'Pluskvamperfekt — czas zaprzeszły (bio sam radio), używany głównie w piśmie.',
              'Aorist i imperfekt — archaiczne czasy przeszłe, dziś praktycznie nieużywane w standardowym języku, spotykane w literaturze.',
              'Futur II — czynność przyszła dokonana przed inną czynnością przyszłą, np. "Kad budem imao vremena..." (Gdy będę miał czas...).'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'przypadki',
    title: 'Przypadki',
    topics: [
      {
        id: 'siedem-przypadkow',
        title: 'Siedem przypadków',
        blocks: [
          {
            type: 'text',
            text: 'To najważniejszy temat w całej gramatyce chorwackiej — bez niego nie da się poprawnie budować zdań. Dobra wiadomość: chorwacki ma dokładnie te same 7 przypadków co polski, w niemal tej samej roli. To nie jest obca koncepcja — to głównie kwestia nauczenia się nowych końcówek.'
          },
          {
            type: 'table',
            headers: ['Przypadek', 'Pytanie', 'Funkcja', 'Przykład'],
            rows: [
              ['Nominativ', 'tko? što?', 'podmiot zdania', 'Mačka spava.'],
              ['Genitiv', 'koga? čega?', 'przynależność, przeczenie, liczby', 'Nema mačke.'],
              ['Dativ', 'komu? čemu?', 'adresat czynności', 'Dajem hranu mački.'],
              ['Akuzativ', 'koga? što?', 'dopełnienie bliższe, kierunek', 'Vidim mačku.'],
              ['Vokativ', '— (zwrot)', 'zwracanie się do kogoś', 'Mačko, dođi!'],
              ['Lokativ', 'o kome? o čemu? gdje?', 'miejsce, temat rozmowy', 'Pričam o mački.'],
              ['Instrumental', 's kim? s čim? kako?', 'towarzystwo, narzędzie, sposób', 'Idem s mačkom.']
            ]
          },
          {
            type: 'warning',
            text: 'Dobry sposób na zapamiętanie kolejności: N-G-D-A-V-L-I. Tak uczy się tego w chorwackich szkołach.'
          },
          {
            type: 'examples',
            items: [
              { hr: 'Pas trči.', pl: 'Pies biegnie. (nominativ)' },
              { hr: 'Nema kruha.', pl: 'Nie ma chleba. (genitiv)' },
              { hr: 'Dajem knjigu bratu.', pl: 'Daję książkę bratu. (dativ)' },
              { hr: 'Vidim grad.', pl: 'Widzę miasto. (akuzativ)' },
              { hr: 'Ivane, dođi ovamo!', pl: 'Iwan, chodź tutaj! (vokativ)' },
              { hr: 'Mislim o tebi.', pl: 'Myślę o tobie. (lokativ)' },
              { hr: 'Pišem olovkom.', pl: 'Piszę ołówkiem. (instrumental)' },
              { hr: 'Idem s prijateljem.', pl: 'Idę z przyjacielem. (instrumental)' },
              { hr: 'To je kuća moje sestre.', pl: 'To dom mojej siostry. (genitiv)' },
              { hr: 'Čekam na autobus.', pl: 'Czekam na autobus. (akuzativ)' }
            ]
          }
        ]
      },
      {
        id: 'deklinacja',
        title: 'Odmiana przykładowa',
        blocks: [
          {
            type: 'text',
            text: 'Zobaczmy odmianę na konkretnym rzeczowniku rodzaju męskiego — "grad" (miasto).'
          },
          {
            type: 'table',
            headers: ['Przypadek', 'Liczba pojedyncza', 'Liczba mnoga'],
            rows: [
              ['Nominativ', 'grad', 'gradovi'],
              ['Genitiv', 'grada', 'gradova'],
              ['Dativ', 'gradu', 'gradovima'],
              ['Akuzativ', 'grad', 'gradove'],
              ['Vokativ', 'grade', 'gradovi'],
              ['Lokativ', 'gradu', 'gradovima'],
              ['Instrumental', 'gradom', 'gradovima']
            ]
          },
          {
            type: 'text',
            text: 'A teraz rodzaj żeński — "knjiga" (książka).'
          },
          {
            type: 'table',
            headers: ['Przypadek', 'Liczba pojedyncza', 'Liczba mnoga'],
            rows: [
              ['Nominativ', 'knjiga', 'knjige'],
              ['Genitiv', 'knjige', 'knjiga'],
              ['Dativ', 'knjizi', 'knjigama'],
              ['Akuzativ', 'knjigu', 'knjige'],
              ['Vokativ', 'knjigo', 'knjige'],
              ['Lokativ', 'knjizi', 'knjigama'],
              ['Instrumental', 'knjigom', 'knjigama']
            ]
          },
          {
            type: 'warning',
            text: 'Zauważ: w rodzaju żeńskim genitiv liczby mnogiej ("knjiga") wygląda identycznie jak nominativ liczby pojedynczej ("knjiga") — to częsta pułapka, rozróżnia je tylko kontekst zdania.'
          }
        ]
      }
    ]
  },
  {
    id: 'skladnia',
    title: 'Szyk i pytania',
    topics: [
      {
        id: 'enklityki',
        title: 'Enklityki',
        blocks: [
          {
            type: 'text',
            text: 'Enklityki to krótkie, nieakcentowane słówka: sam/si/je/smo/ste/su (perfekt), ću/ćeš/će (futur), oraz se, mu, ga, ju, mi, ti itp. Mają one niemal sztywną regułę pozycji: stoją na drugim miejscu w zdaniu — zaraz po pierwszym akcentowanym słowie lub frazie — niezależnie od tego, gdzie "logicznie" powinny stać.'
          },
          {
            type: 'warning',
            text: 'To jest coś, czego nie ma w polskim, i to właśnie zdradza nie-native speakera najszybciej. Poprawnie: "Ja sam mu to dao." Niepoprawnie: "Ja mu to dao sam."'
          },
          {
            type: 'examples',
            items: [
              { hr: 'Marko je došao kasno.', pl: 'Marko przyszedł późno.' },
              { hr: 'Ja sam joj to rekao.', pl: 'Ja jej to powiedziałem.' },
              { hr: 'Ona mu se javila.', pl: 'Ona się do niego odezwała.' },
              { hr: 'Mi smo im pomogli.', pl: 'My im pomogliśmy.' },
              { hr: 'Danas ću ti donijeti knjigu.', pl: 'Dzisiaj przyniosę ci książkę.' },
              { hr: 'Vidio sam ga jučer.', pl: 'Widziałem go wczoraj.' },
              { hr: 'Oni su se vratili kući.', pl: 'Oni wrócili do domu.' },
              { hr: 'Brzo ću se vratiti.', pl: 'Szybko wrócę.' },
              { hr: 'Ti si mi najbolji prijatelj.', pl: 'Ty jesteś moim najlepszym przyjacielem.' },
              { hr: 'Sutra ćemo mu reći.', pl: 'Jutro mu powiemy.' }
            ]
          }
        ]
      },
      {
        id: 'przeczenie',
        title: 'Przeczenie i dopełniacz',
        blocks: [
          {
            type: 'text',
            text: 'Chorwacki ma ciekawą zależność między przeczeniem a przypadkiem: po zaprzeczonym "imati" (nemati) oraz w konstrukcjach typu "nema" (nie ma), dopełnienie stoi w dopełniaczu (genitiv), a nie w bierniku jak w zdaniu twierdzącym.'
          },
          {
            type: 'text',
            text: 'Porównaj: "Imam vremena" (mam czas → genitiv, bo "ilość") vs "Nemam vremena" (nie mam czasu → genitiv przy przeczeniu).'
          },
          {
            type: 'examples',
            items: [
              { hr: 'Nemam vremena.', pl: 'Nie mam czasu.' },
              { hr: 'Nema kruha u kući.', pl: 'Nie ma chleba w domu.' },
              { hr: 'Nemam novca.', pl: 'Nie mam pieniędzy.' },
              { hr: 'Nema nikoga doma.', pl: 'Nie ma nikogo w domu.' },
              { hr: 'Ne volim kavu.', pl: 'Nie lubię kawy.' },
              { hr: 'Nemam pojma.', pl: 'Nie mam pojęcia.' },
              { hr: 'Nema sumnje.', pl: 'Nie ma wątpliwości.' },
              { hr: 'Nemam vremena za to.', pl: 'Nie mam na to czasu.' },
              { hr: 'Nema problema.', pl: 'Nie ma problemu.' },
              { hr: 'Ne znam odgovora.', pl: 'Nie znam odpowiedzi.' }
            ]
          }
        ]
      },
      {
        id: 'pytania-li',
        title: 'Pytania z "li"',
        blocks: [
          {
            type: 'text',
            text: 'Pytania typu tak/nie tworzy się najczęściej przez dodanie cząstki "li" zaraz po czasowniku (a nie np. samą intonacją, jak czasem bywa w polskim).'
          },
          {
            type: 'text',
            text: 'Wzór: Czasownik + li + reszta zdania?'
          },
          {
            type: 'examples',
            items: [
              { hr: 'Govoriš li engleski?', pl: 'Mówisz po angielsku?' },
              { hr: 'Jesi li gladan?', pl: 'Jesteś głodny?' },
              { hr: 'Možeš li mi pomoći?', pl: 'Możesz mi pomóc?' },
              { hr: 'Dolaziš li sutra?', pl: 'Przychodzisz jutro?' },
              { hr: 'Imaš li vremena?', pl: 'Masz czas?' },
              { hr: 'Voliš li kavu?', pl: 'Lubisz kawę?' },
              { hr: 'Razumiješ li me?', pl: 'Rozumiesz mnie?' },
              { hr: 'Hoćeš li doći?', pl: 'Przyjdziesz?' },
              { hr: 'Znaš li gdje je to?', pl: 'Wiesz, gdzie to jest?' },
              { hr: 'Sviđa li ti se?', pl: 'Podoba ci się?' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'liczebniki',
    title: 'Liczebniki',
    topics: [
      {
        id: 'liczebniki-przypadki',
        title: 'Liczebniki i przypadki',
        blocks: [
          {
            type: 'text',
            text: 'Liczebniki wpływają na przypadek rzeczownika — i mechanizm jest niemal identyczny jak w polskim ("dwa psy" vs "pięciu psów"), więc Polakom powinno być to intuicyjne.'
          },
          {
            type: 'table',
            headers: ['Liczba', 'Forma rzeczownika', 'Przykład'],
            rows: [
              ['1', 'mianownik l. poj.', 'jedan grad'],
              ['2, 3, 4', 'dopełniacz l. poj.', 'dva grada, tri grada, četiri grada'],
              ['5 i więcej', 'dopełniacz l. mn.', 'pet gradova, sto gradova']
            ]
          },
          {
            type: 'warning',
            text: 'Ta sama zasada dotyczy osób: "dva čovjeka" (dwóch ludzi), ale "pet ljudi" (pięciu ludzi) — z nieregularną liczbą mnogą "ljudi".'
          },
          {
            type: 'examples',
            items: [
              { hr: 'Imam jedan auto.', pl: 'Mam jeden samochód.' },
              { hr: 'Imam dva brata.', pl: 'Mam dwóch braci.' },
              { hr: 'Kupio sam tri knjige.', pl: 'Kupiłem trzy książki.' },
              { hr: 'Čekamo četiri sata.', pl: 'Czekamy cztery godziny.' },
              { hr: 'Ima pet stolova.', pl: 'Jest pięć stołów.' },
              { hr: 'Bilo je deset ljudi.', pl: 'Było dziesięciu ludzi.' },
              { hr: 'Trebam dvije minute.', pl: 'Potrzebuję dwóch minut.' },
              { hr: 'Imamo sto eura.', pl: 'Mamy sto euro.' },
              { hr: 'Vidio sam dva psa.', pl: 'Widziałem dwa psy.' },
              { hr: 'Čeka nas šest sati puta.', pl: 'Czeka nas sześć godzin drogi.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'idiomy',
    title: 'Idiomy i powiedzenia',
    topics: [
      {
        id: 'idiomy',
        title: 'Idiomy',
        blocks: [
          {
            type: 'pairs',
            items: [
              { hr: 'Bijela vrana', pl: 'biały kruk', desc: 'ktoś/coś niezwykle rzadkiego' },
              { hr: 'Crna ovca', pl: 'czarna owca', desc: 'ktoś odstający od otoczenia, zwykle negatywnie' },
              { hr: 'Na sedmom nebu', pl: 'na siódmym niebie', desc: 'ktoś u szczytu szczęścia' },
              { hr: 'Buljiti kao tele u šarena vrata', pl: 'gapić się jak cielę na kolorowe drzwi', desc: 'patrzeć w osłupieniu, nic nie rozumiejąc' },
              { hr: 'Lupa k\'o Maksim po diviziji', pl: 'wali jak karabin po dywizji', desc: 'gadać od rzeczy, pleść bzdury' },
              { hr: 'Pijan k\'o majka', pl: 'pijany jak matka', desc: 'kompletnie pijany' },
              { hr: '(Gas) do daske', pl: 'gaz do deski', desc: 'robić coś na full, do końca' },
              { hr: 'Slijepi putnik', pl: 'ślepy pasażer', desc: 'ktoś jadący na gapę' }
            ]
          }
        ]
      },
      {
        id: 'przyslowia',
        title: 'Przysłowia',
        blocks: [
          {
            type: 'pairs',
            items: [
              { hr: 'Bolje ikad nego nikad', pl: 'Lepiej późno niż wcale' },
              { hr: 'Bolje spriječiti nego liječiti', pl: 'Lepiej zapobiegać niż leczyć' },
              { hr: 'Bolje vrabac u ruci, nego golub na grani', pl: 'Lepszy wróbel w garści niż gołąb na dachu' },
              { hr: 'Jabuka ne pada daleko od stabla', pl: 'Niedaleko pada jabłko od jabłoni' },
              { hr: 'Daleko od očiju, daleko od srca', pl: 'Co z oczu, to z serca' },
              { hr: 'Ne možeš imati i ovce i novce', pl: 'Nie można mieć ciastka i zjeść ciastka' },
              { hr: 'Nije zlato sve što sja', pl: 'Nie wszystko złoto, co się świeci' },
              { hr: 'Gdje ima dima ima i vatre', pl: 'Nie ma dymu bez ognia' },
              { hr: 'Kakav otac, takav sin', pl: 'Jaki ojciec, taki syn' },
              { hr: 'Po jutru se dan poznaje', pl: 'Po sobie poznać dzień' }
            ]
          }
        ]
      }
    ]
  }
]