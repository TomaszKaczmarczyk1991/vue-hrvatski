export const grammarSections = [
  {
    id: 'czasy',
    title: 'Czasy',
    topics: [
      {
        id: 'grupy-czasownikow',
        title: 'Grupy czasowników',
        blocks: [
          {
            type: 'text',
            text: 'Chorwackie czasowniki w czasie teraźniejszym dzielą się na 3 grupy (koniugacje), w zależności od samogłoski tematycznej w prezencie. Kliknij przycisk grupy poniżej, żeby zobaczyć jej końcówki, przykładową odmianę i zdania.'
          },
          {
            type: 'verb-groups',
            groups: [
              {
                id: 'a',
                label: 'Grupa A',
                subtitle: '-ati → -am',
                description: 'Najliczniejsza grupa. Temat prezentu kończy się na -a-. Większość czasowników z bezokolicznikiem na -ati należy właśnie tutaj.',
                endings: [
                  { person: 'Ja', ending: '-am' },
                  { person: 'Ti', ending: '-aš' },
                  { person: 'On / Ona / Ono', ending: '-a' },
                  { person: 'Mi', ending: '-amo' },
                  { person: 'Vi', ending: '-ate' },
                  { person: 'Oni / One / Ona', ending: '-aju' }
                ],
                example: {
                  infinitive: 'gledati (patrzeć, oglądać)',
                  forms: ['gledam', 'gledaš', 'gleda', 'gledamo', 'gledate', 'gledaju']
                },
                sentences: [
                  { hr: 'Gledam film.', pl: 'Oglądam film.' },
                  { hr: 'Čekam prijatelja.', pl: 'Czekam na przyjaciela.' },
                  { hr: 'Pitam učitelja.', pl: 'Pytam nauczyciela.' },
                  { hr: 'Imam psa.', pl: 'Mam psa.' },
                  { hr: 'Igram tenis.', pl: 'Gram w tenisa.' },
                  { hr: 'Pjevam pjesmu.', pl: 'Śpiewam piosenkę.' },
                  { hr: 'Slušam radio.', pl: 'Słucham radia.' },
                  { hr: 'Ona gleda televiziju.', pl: 'Ona ogląda telewizję.' },
                  { hr: 'Mi čekamo autobus.', pl: 'My czekamy na autobus.' },
                  { hr: 'Vi pitate puno.', pl: 'Wy pytacie dużo.' },
                  { hr: 'Oni igraju nogomet.', pl: 'Oni grają w piłkę.' },
                  { hr: 'Djeca pjevaju glasno.', pl: 'Dzieci śpiewają głośno.' }
                ]
              },
              {
                id: 'e',
                label: 'Grupa E',
                subtitle: '-ti → -em / -jem',
                description: 'Temat prezentu kończy się na spółgłoskę (pisati → pišem) albo na -j- (piti → pijem, čuti → čujem). Końcówki osobowe są identyczne w obu przypadkach — różni się tylko sam temat.',
                endings: [
                  { person: 'Ja', ending: '-em' },
                  { person: 'Ti', ending: '-eš' },
                  { person: 'On / Ona / Ono', ending: '-e' },
                  { person: 'Mi', ending: '-emo' },
                  { person: 'Vi', ending: '-ete' },
                  { person: 'Oni / One / Ona', ending: '-u (lub -ju)' }
                ],
                example: {
                  infinitive: 'pisati (pisać)',
                  forms: ['pišem', 'pišeš', 'piše', 'pišemo', 'pišete', 'pišu']
                },
                sentences: [
                  { hr: 'Pišem pismo.', pl: 'Piszę list.' },
                  { hr: 'Pišeš li mi?', pl: 'Piszesz do mnie?' },
                  { hr: 'On piše knjigu.', pl: 'On pisze książkę.' },
                  { hr: 'Mi pišemo zadaću.', pl: 'My piszemy zadanie.' },
                  { hr: 'Vi pišete sporo.', pl: 'Wy piszecie wolno.' },
                  { hr: 'Oni pišu testove.', pl: 'Oni piszą testy.' },
                  { hr: 'Pijem vodu.', pl: 'Piję wodę.' },
                  { hr: 'Piješ kavu ujutro.', pl: 'Pijesz kawę rano.' },
                  { hr: 'Ona pije čaj.', pl: 'Ona pije herbatę.' },
                  { hr: 'Mi pijemo sok.', pl: 'My pijemy sok.' },
                  { hr: 'Čujem te dobro.', pl: 'Słyszę cię dobrze.' },
                  { hr: 'Djeca piju mlijeko.', pl: 'Dzieci piją mleko.' }
                ]
              },
              {
                id: 'i',
                label: 'Grupa I',
                subtitle: '-iti / -jeti → -im',
                description: 'Temat prezentu kończy się na -i-. Należą tu czasowniki na -iti (nositi → nosim) oraz większość na -jeti (voljeti → volim).',
                endings: [
                  { person: 'Ja', ending: '-im' },
                  { person: 'Ti', ending: '-iš' },
                  { person: 'On / Ona / Ono', ending: '-i' },
                  { person: 'Mi', ending: '-imo' },
                  { person: 'Vi', ending: '-ite' },
                  { person: 'Oni / One / Ona', ending: '-e' }
                ],
                example: {
                  infinitive: 'nositi (nosić)',
                  forms: ['nosim', 'nosiš', 'nosi', 'nosimo', 'nosite', 'nose']
                },
                sentences: [
                  { hr: 'Nosim torbu.', pl: 'Noszę torbę.' },
                  { hr: 'Voliš li more?', pl: 'Lubisz morze?' },
                  { hr: 'On govori hrvatski.', pl: 'On mówi po chorwacku.' },
                  { hr: 'Mi volimo glazbu.', pl: 'My lubimy muzykę.' },
                  { hr: 'Vi živite ovdje.', pl: 'Wy mieszkacie tutaj.' },
                  { hr: 'Oni uče jezik.', pl: 'Oni uczą się języka.' },
                  { hr: 'Vidim kuću.', pl: 'Widzę dom.' },
                  { hr: 'Spavaš li dobro?', pl: 'Śpisz dobrze?' },
                  { hr: 'Ona radi u uredu.', pl: 'Ona pracuje w biurze.' },
                  { hr: 'Mi trčimo ujutro.', pl: 'My biegamy rano.' },
                  { hr: 'Vi mislite brzo.', pl: 'Wy myślicie szybko.' },
                  { hr: 'Djeca uče slova.', pl: 'Dzieci uczą się liter.' }
                ]
              }
            ]
          },
          {
            type: 'warning',
            text: 'Częsta rodzina czasowników spoza tego prostego podziału: te na -ovati, -evati, -ivati (kupovati, putovati, organizirati) w prezencie zamieniają końcówkę na -uje-: kupovati → kupujem. To wciąż "rodzina E" (bo -ujem kończy się na -em), tylko z inną podstawą.'
          }
        ]
      },
      {
        id: 'prezent',
        title: 'Prezent',
        blocks: [
          {
            type: 'text',
            text: 'Prezent to czas teraźniejszy — najprostszy w budowie. Tworzy się go od tematu czasownika z końcówką -am, -em, -im lub -jem (patrz zakładka "Grupy czasowników" obok).'
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
              { hr: 'Djeca se igraju vani.', pl: 'Dzieci bawią się na dworze.' },
              { hr: 'Kuham ručak svaki dan.', pl: 'Gotuję obiad codziennie.' },
              { hr: 'Učim hrvatski jezik.', pl: 'Uczę się chorwackiego.' },
              { hr: 'Spavam osam sati.', pl: 'Śpię osiem godzin.' },
              { hr: 'Ona piše pismo.', pl: 'Ona pisze list.' },
              { hr: 'Mi slušamo glazbu.', pl: 'My słuchamy muzyki.' },
              { hr: 'Ti voziš auto.', pl: 'Ty prowadzisz samochód.' },
              { hr: 'On trči svako jutro.', pl: 'On biega co rano.' },
              { hr: 'Mi se smijemo zajedno.', pl: 'My śmiejemy się razem.' },
              { hr: 'Ona radi u bolnici.', pl: 'Ona pracuje w szpitalu.' },
              { hr: 'Djeca spavaju mirno.', pl: 'Dzieci śpią spokojnie.' },
              { hr: 'Ja kupujem kruh.', pl: 'Ja kupuję chleb.' },
              { hr: 'Mi razumijemo pitanje.', pl: 'My rozumiemy pytanie.' },
              { hr: 'Ti pišeš domaću zadaću.', pl: 'Ty piszesz pracę domową.' },
              { hr: 'Oni putuju vlakom.', pl: 'Oni podróżują pociągiem.' },
              { hr: 'Ona pliva u moru.', pl: 'Ona pływa w morzu.' }
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
              { hr: 'Zaboravio sam ključeve.', pl: 'Zapomniałem kluczy.' },
              { hr: 'Naučio sam puno danas.', pl: 'Nauczyłem się dziś dużo.' },
              { hr: 'Ona je otišla rano.', pl: 'Ona wyszła wcześnie.' },
              { hr: 'Mi smo kuhali večeru.', pl: 'My gotowaliśmy kolację.' },
              { hr: 'Jesi li vidio taj film?', pl: 'Widziałeś ten film?' },
              { hr: 'Oni su kupili kuću.', pl: 'Oni kupili dom.' },
              { hr: 'Nisam čuo buku.', pl: 'Nie słyszałem hałasu.' },
              { hr: 'Vi ste napisali pismo.', pl: 'Wy napisaliście list.' },
              { hr: 'Popila sam čašu vode.', pl: 'Wypiłam szklankę wody.' },
              { hr: 'Zaspao sam kasno.', pl: 'Zasnąłem późno.' },
              { hr: 'Oni su se posvađali.', pl: 'Oni się pokłócili.' },
              { hr: 'Ona je plakala cijelu noć.', pl: 'Ona płakała całą noc.' },
              { hr: 'Mi smo izgubili put.', pl: 'My zgubiliśmy drogę.' },
              { hr: 'Jesi li platio račun?', pl: 'Zapłaciłeś rachunek?' },
              { hr: 'On je stigao na vrijeme.', pl: 'On dotarł na czas.' },
              { hr: 'Zaboravila sam ime.', pl: 'Zapomniałam imienia.' }
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
              { hr: 'Vidjet ćeš razliku.', pl: 'Zobaczysz różnicę.' },
              { hr: 'Kupit ću novi telefon.', pl: 'Kupię nowy telefon.' },
              { hr: 'Mi ćemo se vratiti navečer.', pl: 'My wrócimy wieczorem.' },
              { hr: 'Oni će nam pisati.', pl: 'Oni będą do nas pisać.' },
              { hr: 'Ona neće doći sutra.', pl: 'Ona nie przyjdzie jutro.' },
              { hr: 'Vi ćete razumjeti kasnije.', pl: 'Wy zrozumiecie później.' },
              { hr: 'Hoćemo li uspjeti?', pl: 'Czy nam się uda?' },
              { hr: 'Ja ću te čekati vani.', pl: 'Będę na ciebie czekał na zewnątrz.' },
              { hr: 'On će pročitati knjigu.', pl: 'On przeczyta książkę.' },
              { hr: 'Mi ćemo pitati učitelja.', pl: 'My zapytamy nauczyciela.' },
              { hr: 'Sutra ćemo imati sastanak.', pl: 'Jutro będziemy mieć spotkanie.' },
              { hr: 'Hoćeš li mi pomoći?', pl: 'Pomożesz mi?' },
              { hr: 'Oni će se preseliti idući mjesec.', pl: 'Oni przeprowadzą się w przyszłym miesiącu.' },
              { hr: 'Neću zakasniti.', pl: 'Nie spóźnię się.' },
              { hr: 'Vi ćete dobiti odgovor.', pl: 'Wy dostaniecie odpowiedź.' },
              { hr: 'Ona će naučiti voziti.', pl: 'Ona nauczy się prowadzić.' }
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
              { hr: 'Čekam na autobus.', pl: 'Czekam na autobus. (akuzativ)' },
              { hr: 'Dijete se smije.', pl: 'Dziecko się śmieje. (nominativ)' },
              { hr: 'Nema vremena za to.', pl: 'Nie ma na to czasu. (genitiv)' },
              { hr: 'Šaljem poklon majci.', pl: 'Wysyłam prezent mamie. (dativ)' },
              { hr: 'Čitam zanimljivu knjigu.', pl: 'Czytam ciekawą książkę. (akuzativ)' },
              { hr: 'Draga Ana, hvala ti!', pl: 'Droga Ano, dziękuję ci! (vokativ)' },
              { hr: 'Razgovaramo o poslu.', pl: 'Rozmawiamy o pracy. (lokativ)' },
              { hr: 'Putujemo autom.', pl: 'Podróżujemy samochodem. (instrumental)' },
              { hr: 'Ovo je torba moje mame.', pl: 'To torba mojej mamy. (genitiv)' },
              { hr: 'Dajem savjet prijatelju.', pl: 'Daję radę przyjacielowi. (dativ)' },
              { hr: 'Vidim veliku kuću.', pl: 'Widzę duży dom. (akuzativ)' },
              { hr: 'Učitelju, imam pitanje!', pl: 'Nauczycielu, mam pytanie! (vokativ)' },
              { hr: 'Spavam u hotelu.', pl: 'Śpię w hotelu. (lokativ)' },
              { hr: 'Pišem olovkom na papiru.', pl: 'Piszę ołówkiem na papierze. (instrumental)' },
              { hr: 'Grad nema parkinga.', pl: 'Miasto nie ma parkingu. (genitiv)' },
              { hr: 'Zovem sestru svaki dan.', pl: 'Dzwonię do siostry codziennie. (akuzativ)' }
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
              { hr: 'Sutra ćemo mu reći.', pl: 'Jutro mu powiemy.' },
              { hr: 'Ana mi je dala knjigu.', pl: 'Ana dała mi książkę.' },
              { hr: 'Mi smo ga vidjeli jučer.', pl: 'My widzieliśmy go wczoraj.' },
              { hr: 'Oni su nam rekli istinu.', pl: 'Oni powiedzieli nam prawdę.' },
              { hr: 'Ti ćeš mu objasniti.', pl: 'Ty mu wytłumaczysz.' },
              { hr: 'Ona se ne sjeća toga.', pl: 'Ona tego nie pamięta.' },
              { hr: 'Ja sam im već javio.', pl: 'Ja już im dałem znać.' },
              { hr: 'Mi ćemo se naći u sedam.', pl: 'My spotkamy się o siódmej.' },
              { hr: 'Vi ste je vidjeli?', pl: 'Widzieliście ją?' },
              { hr: 'On joj je kupio cvijeće.', pl: 'On kupił jej kwiaty.' },
              { hr: 'Mi smo se upoznali davno.', pl: 'Poznaliśmy się dawno temu.' },
              { hr: 'Hoćeš li mu reći?', pl: 'Powiesz mu?' },
              { hr: 'Ona ga je nazvala sinoć.', pl: 'Ona zadzwoniła do niego wczoraj wieczorem.' },
              { hr: 'Mi ćemo im pisati.', pl: 'My będziemy do nich pisać.' },
              { hr: 'Ti si ih vidio?', pl: 'Widziałeś ich?' },
              { hr: 'On se nije sjetio.', pl: 'On sobie nie przypomniał.' }
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
              { hr: 'Ne znam odgovora.', pl: 'Nie znam odpowiedzi.' },
              { hr: 'Nema mjesta u autu.', pl: 'Nie ma miejsca w samochodzie.' },
              { hr: 'Nemam snage za to.', pl: 'Nie mam na to siły.' },
              { hr: 'Nema vode u boci.', pl: 'Nie ma wody w butelce.' },
              { hr: 'Nemam iskustva.', pl: 'Nie mam doświadczenia.' },
              { hr: 'Nema odgovora na pitanje.', pl: 'Nie ma odpowiedzi na pytanie.' },
              { hr: 'Nemam vremena za odmor.', pl: 'Nie mam czasu na odpoczynek.' },
              { hr: 'Nema razloga za brigu.', pl: 'Nie ma powodu do zmartwienia.' },
              { hr: 'Nemam ključa od stana.', pl: 'Nie mam klucza do mieszkania.' },
              { hr: 'Nema struje u zgradi.', pl: 'Nie ma prądu w budynku.' },
              { hr: 'Nemam pojma o tome.', pl: 'Nie mam o tym pojęcia.' },
              { hr: 'Nema šanse za pobjedu.', pl: 'Nie ma szans na wygraną.' },
              { hr: 'Nemam hrane u frižideru.', pl: 'Nie mam jedzenia w lodówce.' },
              { hr: 'Nema nikoga na ulici.', pl: 'Nie ma nikogo na ulicy.' },
              { hr: 'Nemam vremena za igru.', pl: 'Nie mam czasu na zabawę.' },
              { hr: 'Nema kraja ovom poslu.', pl: 'Nie ma końca tej pracy.' }
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
              { hr: 'Sviđa li ti se?', pl: 'Podoba ci się?' },
              { hr: 'Ideš li sa mnom?', pl: 'Idziesz ze mną?' },
              { hr: 'Jesi li spreman?', pl: 'Jesteś gotowy?' },
              { hr: 'Čuješ li me dobro?', pl: 'Słyszysz mnie dobrze?' },
              { hr: 'Trebaš li pomoć?', pl: 'Potrzebujesz pomocy?' },
              { hr: 'Pamtiš li njeno ime?', pl: 'Pamiętasz jej imię?' },
              { hr: 'Živiš li ovdje?', pl: 'Mieszkasz tutaj?' },
              { hr: 'Radiš li sutra?', pl: 'Pracujesz jutro?' },
              { hr: 'Želiš li još kave?', pl: 'Chcesz jeszcze kawy?' },
              { hr: 'Znaš li plivati?', pl: 'Umiesz pływać?' },
              { hr: 'Jeste li vidjeli Anu?', pl: 'Widzieliście Anę?' },
              { hr: 'Možemo li razgovarati?', pl: 'Możemy porozmawiać?' },
              { hr: 'Hoće li biti vremena?', pl: 'Będzie czas?' },
              { hr: 'Igraš li nogomet?', pl: 'Grasz w piłkę nożną?' },
              { hr: 'Vjeruješ li mi?', pl: 'Wierzysz mi?' },
              { hr: 'Slažeš li se sa mnom?', pl: 'Zgadzasz się ze mną?' }
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
              { hr: 'Čeka nas šest sati puta.', pl: 'Czeka nas sześć godzin drogi.' },
              { hr: 'Imam sedam olovaka.', pl: 'Mam siedem ołówków.' },
              { hr: 'Kupili smo osam jabuka.', pl: 'Kupiliśmy osiem jabłek.' },
              { hr: 'Ima devet stolica.', pl: 'Jest dziewięć krzeseł.' },
              { hr: 'Čekali smo dvadeset minuta.', pl: 'Czekaliśmy dwadzieścia minut.' },
              { hr: 'Imam dvije sestre.', pl: 'Mam dwie siostry.' },
              { hr: 'Vidio sam tri mačke.', pl: 'Widziałem trzy koty.' },
              { hr: 'Ima tisuću ljudi na trgu.', pl: 'Jest tysiąc ludzi na placu.' },
              { hr: 'Trebamo pet jaja.', pl: 'Potrzebujemy pięciu jajek.' },
              { hr: 'Imamo dvadeset eura.', pl: 'Mamy dwadzieścia euro.' },
              { hr: 'Bio sam tamo dva puta.', pl: 'Byłem tam dwa razy.' },
              { hr: 'Kupio sam četiri karte.', pl: 'Kupiłem cztery bilety.' },
              { hr: 'Ima šest soba u kući.', pl: 'Jest sześć pokoi w domu.' },
              { hr: 'Čekamo još deset minuta.', pl: 'Czekamy jeszcze dziesięć minut.' },
              { hr: 'Imam jednog brata i dvije sestre.', pl: 'Mam jednego brata i dwie siostry.' },
              { hr: 'Prošli smo sto kilometara.', pl: 'Przejechaliśmy sto kilometrów.' }
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