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
            type: 'list',
            items: [
              'Przykład: Jučer sam radio. — Wczoraj pracowałem.',
              'Czasownik "biti": Bio sam u Zagrebu. — Byłem w Zagrzebiu.'
            ]
          },
          {
            type: 'warning',
            text: 'W mowie potocznej "je" w 3. osobie bywa pomijane (tzw. krnji perfekt) — często w nagłówkach, np. "Učenici posjetili zoo" zamiast "su posjetili".'
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
    id: 'przymiotniki',
    title: 'Przymiotniki',
    topics: [
      {
        id: 'stopniowanie',
        title: 'Stopniowanie',
        blocks: [
          {
            type: 'text',
            text: 'Chorwacki ma trzy stopnie przymiotnika: pozitiv (podstawowy), komparativ (wyższy) i superlativ (najwyższy).'
          },
          {
            type: 'table',
            headers: ['Pozitiv', 'Komparativ', 'Zasada'],
            rows: [
              ['zanimljiv (ciekawy)', 'zanimljiviji', 'najczęstsza końcówka -iji'],
              ['jak (silny)', 'jači', 'k + j → č (jotacja)'],
              ['lijep (ładny)', 'ljepši', 'nieregularna końcówka -ši']
            ]
          },
          {
            type: 'text',
            text: 'Jotacja przy tworzeniu komparatywu: t+j=ć, d+j=đ, z+j=ž, k+j=č, g+j=ž, n+j=nj. Przykład: mlad → mlađi (młodszy), brz → brži (szybszy).'
          },
          {
            type: 'warning',
            text: 'Superlativ tworzy się przez dodanie przedrostka "naj-" do komparatywu: zanimljiviji → najzanimljiviji. Jeśli komparativ zaczyna się na "j", w superlatywie piszemy podwójne "j": jači → najjači.'
          },
          {
            type: 'text',
            text: 'Cztery przymiotniki są całkowicie nieregularne — identyczny mechanizm jak w polskim (dobry–lepszy–najlepszy):'
          },
          {
            type: 'table',
            headers: ['Pozitiv', 'Komparativ', 'Superlativ'],
            rows: [
              ['dobar (dobry)', 'bolji', 'najbolji'],
              ['malen (mały)', 'manji', 'najmanji'],
              ['velik (duży)', 'veći', 'najveći'],
              ['zao (zły)', 'gori', 'najgori']
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