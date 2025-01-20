const btnPointReset = document.getElementById("point-reset");
const pointHolder = document.getElementById("point-holder");

const btnMojBroj = document.getElementById("game1");
const btnSpojnice = document.getElementById("game2");
const btnKoZnaZna = document.getElementById("game3");
const btnSkocko = document.getElementById("game4");

const POENI = 'poeni';


let poeni = 0;

if (localStorage.getItem(POENI)) 
{
    poeni = parseInt(localStorage.getItem(POENI), 10);
}

pointHolder.textContent = poeni;

function resetPoints() 
{
    poeni = 0;
    pointHolder.textContent = poeni;
    localStorage.setItem(POENI, poeni);
}

function disableGame(event)
{
    gameID = event.target; //MojBroj

    gameID.style.cursor = 'not-allowed';
    gameID.disabled = true;
    console.log(gameID);
}

btnPointReset.addEventListener("click", resetPoints);

btnMojBroj.addEventListener("click", disableGame);