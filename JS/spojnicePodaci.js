// Naslovi igara
const NasloviIgreNiz = 
[
    "Povežite glavne gradove sa njihovim državama",
    "Spojite umetnike sa njihovim delima",
    "Povežite video igre sa njihovim junacima",
    "Klasifikujte životinje prema njihovim staništima",
    "Povežite naučnike sa njihovim otkrićima",
    "Spojite knjige sa njihovim autorima",
    "Povežite istorijske događaje sa godinama",
    "Klasifikujte cveće prema vrstama",
    "Povežite video igre sa njihovim razvojnim studijima",
    "Povežite video igre sa njihovim žanrovima"
];

// Elementi iz leve tabele (različiti pojmovi ili stavke)
const MogucaLevaTabela = [
    // Prva igra (glavni gradovi)
    ["Atina", "Pariz", "Beograd", "Berlin", "Madrid", "Lisabon", "Budimpešta", "Vašington", "Rim", "Ankara"],

    // Druga igra (umetnici)
    ["Picasso", "Da Vinci", "Van Gogh", "Rembrandt", "Matisse", "Kandinsky", "Monet", "Warhol", "Hokusai", "Frida Kahlo"],

    // Treća igra (video igre)
    ["The Legend of Zelda", "Super Mario", "Minecraft", "Fortnite", "Overwatch", "Dark Souls", "The Witcher 3", "Final Fantasy", "Halo", "Call of Duty"],

    // Četvrta igra (životinje)
    ["Lav", "Slon", "Tigar", "Medved", "Delfin", "Vuk", "Žirafa", "Krokodil", "Pingvin", "Orao"],

    // Peta igra (naučnici)
    ["Einstein", "Newton", "Curie", "Darwin", "Galileo", "Hawking", "Tesla", "Kopernik", "Fleming", "Crick"],

    // Šesta igra (knjige)
    ["1984", "Moby Dick", "Ponos i predrasude", "Orlando", "Hamlet", "Ljubav u doba kolere", "Uliks", "Knjiga o džungli", "Zločin i kazna", "Majstor i Margarita"],

    // Sedma igra (istorijski događaji)
    ["Prvi svetski rat", "Francuska revolucija", "Sletanje na Mesec", "Otkriće Amerike", "Nezavisnost SAD-a", "Velika depresija", "Drugi svetski rat", "Ubistvo Martina Lutera Kinga", "Napad na Svetski trgovinski centar", "Završetak Hladnog rata"],

    // Osma igra (cveće)
    ["Ruže", "Ljiljani", "Tulipani", "Suncokreti", "Orhideje", "Narcisi", "Božuri", "Magnolije", "Karanfili", "Iris"],

    // Deveta igra (video igre)
    ["The Legend of Zelda", "Final Fantasy", "World of Warcraft", "Half-Life", "The Elder Scrolls", "Grand Theft Auto V", "Minecraft", "Fortnite", "Dark Souls", "Sonic the Hedgehog"],
    // Deseta igra (video igre žanrovi)
    ["Call of Duty", "The Legend of Zelda: Breath of the Wild", "Final Fantasy VII", "The Sims", "Civilization VI", "FIFA 22", "Tetris", "Candy Crush Saga", "Resident Evil 7", "World of Warcraft"]
];

// Elementi iz desne tabele (odgovarajući pojmovi ili stavke za svaku igru)
const MogucaDesnaTabela = [
    // Prva igra
    ["Grčka", "Francuska", "Srbija", "Nemačka", "Španija", "Portugal", "Mađarska", "SAD", "Italija", "Turska"],

    // Druga igra
    ["Guernica", "Mona Lisa", "Zvezdana noć", "Noćna straža", "Sedeći akt", "Kompozicija VIII", "Lopoči", "Konzerve juhe", "Veliki talas kod Kanagawe", "Dve Fride"],

    // Treća igra (junaci video igara)
    ["Link", "Mario", "Steve", "Jonesy", "Tracer", "Chosen Undead", "Geralt", "Cloud Strife", "Master Chief", "Captain Price"],

    // Četvrta igra
    ["Savane", "Džungle", "Tajge", "Šume", "Okeani", "Planine", "Stepe", "Reke", "Antarktik", "Visoravni"],

    // Peta igra
    ["Teorija relativnosti", "Zakon gravitacije", "Radioaktivnost", "Teorija evolucije", "Heliocentrični sistem", "Kosmološka teorija crnih rupa", "Naizmenična struja", "Heliocentrični model", "Penicilin", "DNK struktura"],

    // Šesta igra
    ["Džordž Orvel", "Herman Melvil", "Džejn Ostin", "Virdžinija Vulf", "Vilijam Šekspir", "Gabrijel Garsija Markes", "Džejms Džojs", "Radjard Kipling", "Fjodor Dostojevski", "Mihail Bulgakov"],

    // Sedma igra
    ["1914", "1789", "1969", "1492", "1776", "1929", "1939", "1968", "2001", "1989"],

    // Osma igra
    ["Ružičasta", "Bele", "Žute", "Zlatne", "Bele sa šarama", "Žute sa narandžastim centrom", "Roze", "Svetlo bele", "Crvene", "Plave"],

    // Deveta igra (razvojni studiji)
    ["Nintendo", "Square Enix", "Blizzard Entertainment", "Valve", "Bethesda", "Rockstar Games", "Mojang", "Epic Games", "FromSoftware", "Sega"],

    // Deseta igra (video igre žanrovi)
    ["FPS", "Avantura", "RPG", "Simulacija", "Strategija", "Sport", "Puzzle", "Casual", "Survival Horror", "MMORPG"]
];

export { NasloviIgreNiz, MogucaLevaTabela, MogucaDesnaTabela };