const questions = [
  {
    "question": "Koji je glavni grad Libije?",
    "options": ["Gadames", "Tripoli", "Nairobi", "Brega"],
    "answer": "Tripoli"
  },
  {
    "question": "U kojem gradu se nalazi Zlatni most?",
    "options": ["Hjustonu", "Vašingtonu", "Njujorku", "San Francisku"],
    "answer": "San Francisku"
  },
  {
    "question": "Kad su održane prve moderne Olimpijske igre?",
    "options": ["1592. godine", "625. godine prije nove ere", "1896. godine", "33. godine (godina Hristove smrti)"],
    "answer": "1896. godine"
  },
  {
    "question": "U kojoj državi je rođen Adolf Hitler?",
    "options": ["Poljskoj", "Njemačkoj", "Austriji", "Italiji"],
    "answer": "Austriji"
  },
  {
    "question": "01. 09. 1939. godine počeo je Drugi svjetski rat, i to kada je Njemačka napala:",
    "options": ["Sovjetski Savez", "Poljsku", "Englesku", "Francusku"],
    "answer": "Poljsku"
  },
  {
    "question": "Car Dušan je zapamćen i kao:",
    "options": ["Dušan Silni", "Dušan Mudri", "Dušan Hrabri", "Dušan Nejaki"],
    "answer": "Dušan Silni"
  },
  {
    "question": "Na prostoru koje današnje države se nalazio logor Aušvic?",
    "options": ["Italije", "Austrije", "Češke", "Poljske"],
    "answer": "Poljske"
  },
  {
    "question": "Ko je bog Sunca u egipatskoj mitologiji?",
    "options": ["Oziris", "Ra", "Feniks", "Kek"],
    "answer": "Ra"
  },
  {
    "question": "Akrofobija je strah od:",
    "options": ["letenja", "visine", "mišljenja", "ulica i raskrsnica"],
    "answer": "visine"
  },
  {
    "question": "Gotika je:",
    "options": ["vrsta duvačkog muzičkog instrumenta", "vrsta limenog muzičkog instrumenta", "geometrijski oblik", "pravac u umjetnosti"],
    "answer": "pravac u umjetnosti"
  },
  {
    "question": "Autor djela „Za kim zvona zvone“ je:",
    "options": ["Ernest Hemingvej", "Mark Tven", "Robert Džordan", "Čarls Dikens"],
    "answer": "Ernest Hemingvej"
  },
  {
    "question": "Autor djela „Mobi Dik“ je:",
    "options": ["Ernest Hemingvej", "Mark Tven", "Herman Melvin", "Čarls Dikens"],
    "answer": "Herman Melvin"
  },
  {
    "question": "Cogito, ergo sum („mislim, dakle postojim“) je filozofska izjava:",
    "options": ["Cezara", "Renea Dekarta", "Platonova", "Tome Akvinskog"],
    "answer": "Renea Dekarta"
  },
  {
    "question": "Muzej Luvr se nalazi u:",
    "options": ["Parizu", "Sankt Peterburgu", "Kanu", "Rimu"],
    "answer": "Parizu"
  },
  {
    "question": "Muzej Prado se nalazi u:",
    "options": ["Parizu", "Madridu", "Barseloni", "Rimu"],
    "answer": "Madridu"
  },
  {
    "question": "Kako se zvao rimski vrhovni bog?",
    "options": ["Zevs", "Mars", "Uran", "Jupiter"],
    "answer": "Jupiter"
  },
  {
    "question": "Kako se zvao grčki vrhovni bog?",
    "options": ["Zevs", "Mars", "Kron", "Jupiter"],
    "answer": "Zevs"
  },
  {
    "question": "Autor djela „Lolita“ je:",
    "options": ["Džordž Orvel", "Virdžinija Vulf", "Emili Bronte", "Vladimir Nabokov"],
    "answer": "Vladimir Nabokov"
  },
  {
    "question": "Vladavina većine je:",
    "options": ["monarhija", "oligarhija", "demokratija", "anarhija"],
    "answer": "demokratija"
  },
  {
    "question": "Hamlet je bio kraljević iz:",
    "options": ["Škotske", "Danske", "Engleske", "Belgije"],
    "answer": "Danske"
  },
  {
    "question": "Teoriju relativiteta je otkrio:",
    "options": ["Isak Njutn", "Nikola Tesla", "Albert Anštajn", "Tomas Jang"],
    "answer": "Albert Anštajn"
  },
  {
    "question": "V.I.P. je skraćenica za:",
    "options": ["veoma važnu osobu", "vidi i produži", "vrati ili plati", "veoma opasnu osobu"],
    "answer": "veoma važnu osobu"
  },
  {
    "question": "Autor slike „Noćna straža“ je:",
    "options": ["Van Gog", "Renoir", "Rembrant", "Mikelanđelo"],
    "answer": "Rembrant"
  },
  {
    "question": "Autor slike „Gernika“ je:",
    "options": ["Van Gog", "Pablo Pikaso", "Rembrant", "Mikelanđelo"],
    "answer": "Pablo Pikaso"
  },
  {
    "question": "„G8“ je oznaka za:",
    "options": ["osam masonskih loža", "osam osnovnih sportskih disciplina", "skup osam najrazvijenijih zemalja svijeta", "osam geometrijskih tijela"],
    "answer": "skup osam najrazvijenijih zemalja svijeta"
  },
  {
    "question": "Posejdon je bog:",
    "options": ["vina i vinove loze", "podzemlja", "ljubavi", "mora"],
    "answer": "mora"
  },
  {
    "question": "Koalicija je:",
    "options": ["zgrušavanje", "suživot", "savez", "saradnja"],
    "answer": "savez"
  },
  {
    "question": "Naučna disciplina koja se bavi sistematskim proučavanjem psihičkog života ljudi i životinja naziva se:",
    "options": ["psihologija", "psihijatrija", "pedagogija", "pedijatrija"],
    "answer": "psihologija"
  },
  {
    "question": "Porast opšteg nivoa cijena se naziva:",
    "options": ["deflacija", "devalvacija", "inflacija", "profit"],
    "answer": "inflacija"
  },
  {
    "question": "Origami je:",
    "options": ["začin u kuhinji", "vrsta japanske borilačke vještine", "vrsta japanske pjesme", "vještina savijanja papira"],
    "answer": "vještina savijanja papira"
  },
  {
    "question": "Origano je:",
    "options": ["začin u kuhinji", "vrsta japanske pjesme", "vrsta japanske borilačke vještine", "vještina savijanja papira"],
    "answer": "začin u kuhinji"
  },
  {
    "question": "Podaci koje bolesnik daje lekaru o ranijem stanju svog zdravlja stručno se nazivaju:",
    "options": ["amnestija", "anamneza", "abdikacija", "anamorfoza"],
    "answer": "anamneza"
  },
  {
    "question": "Nauka o grbovima je:",
    "options": ["numizmatika", "filologija", "heraldika", "genealogija"],
    "answer": "heraldika"
  },
  {
    "question": "Pedagoška disciplina koja se bavi procesom nastave je:",
    "options": ["numizmatika", "filologija", "heraldika", "didaktika"],
    "answer": "didaktika"
  },
  {
    "question": "Pulicerova nagrada se dodjeljuje:",
    "options": ["glumcima", "novinarima", "muzičarima", "političarima"],
    "answer": "novinarima"
  },
  {
    "question": "Herkul Poaro je kreacija:",
    "options": ["Šerloka Holmsa", "Agate Kristi", "Emili Bronte", "Žil Verna"],
    "answer": "Agate Kristi"
  },
  {
    "question": "Grad svjetlosti je naziv za:",
    "options": ["Pariz", "Rim", "London", "Minhen"],
    "answer": "Pariz"
  },
  {
    "question": "1300. godina pripada:",
    "options": ["12. vijeku", "13. vijeku", "14. vijeku", "15. vijeku"],
    "answer": "13. vijeku"
  },
  {
    "question": "Glavni grad Švajcarske je:",
    "options": ["Ženeva", "Cirih", "Bern", "Bazel"],
    "answer": "Bern"
  },
  {
    "question": "Glavni grad Australije je:",
    "options": ["Melburn", "Canberra", "Brisbane", "Sidnej"],
    "answer": "Canberra"
  },
  {
    "question": "Skiti su:",
    "options": ["stari narodi", "nelogične pretpostavke", "dio odjeće", "vrsta ptice"],
    "answer": "stari narodi"
  },
  {
    "question": "Atmosfera, hidrosfera i biosfera su:",
    "options": ["oblasti u Sahari", "grane medicine", "oblasti u prašumama", "spoljašnje zemljine sfere"],
    "answer": "spoljašnje zemljine sfere"
  },
  {
    "question": "Džon Tolkin je autor djela:",
    "options": ["Hari Poter", "Orkanski visovi", "Gospodar prstenova", "Kockar"],
    "answer": "Gospodar prstenova"
  },
  {
    "question": "Simbol besmrtnosti je ptica:",
    "options": ["orao", "sova", "arheopteriks", "feniks"],
    "answer": "feniks"
  },
  {
    "question": "Vizantijsko carstvo je drugi naziv za:",
    "options": ["Persijsko carstvo", "Istočno rimsko carstvo", "Egipatsko carstvo", "Mongolsko carstvo"],
    "answer": "Istočno rimsko carstvo"
  },
  {
    "question": "Javorov list je simbol:",
    "options": ["Kanade", "Holandije", "Švajcarske", "Švedske"],
    "answer": "Kanade"
  },
  {
    "question": "Koje od navedenih djela nije napisao Tolstoj:",
    "options": ["Kozaci", "Ana Karenjina", "Rat i mir", "Idiot"],
    "answer": "Idiot"
  },
  {
    "question": "Koje od navedenih djela je napisao Dante Aligijeri:",
    "options": ["Kozaci", "Ana Karenjina", "Božanstvena komedija", "Rat i mir"],
    "answer": "Božanstvena komedija"
  },
  {
    "question": "Carigrad je stari naziv za:",
    "options": ["Istanbul", "Beograd", "Beč", "Atinu"],
    "answer": "Istanbul"
  },
  {
    "question": "Bukefal je bio konj:",
    "options": ["Cezara", "Marka Antonija", "Atile", "Aleksandra Makedonskog"],
    "answer": "Aleksandra Makedonskog"
  }
];

export { questions };