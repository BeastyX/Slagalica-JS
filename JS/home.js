const btnPointReset = document.getElementById("point-reset");
const pointHolder = document.getElementById("point-holder");

const btnMojBroj = document.getElementById("game1");
const btnSpojnice = document.getElementById("game2");
const btnKoZnaZna = document.getElementById("game3");
const btnSkocko = document.getElementById("game4");
const usernameHolder = document.getElementById("user-holder");

const tbody = document.querySelector("#leaderBoard tbody");
const tr = document.createElement("tr");

const gameBtns = document.querySelectorAll(".game-button");

const POENI = 'poeni';
let USERNAME = localStorage.getItem("username");

numberOfDisabledGames();
usernameLogic();


let poeni = 0;
let user = "";

if (localStorage.getItem(POENI)) 
    poeni = parseInt(localStorage.getItem(POENI), 10);

if (localStorage.getItem("username")) 
    user = localStorage.getItem("username");

pointHolder.textContent = poeni;
usernameHolder.textContent = user;

function usernameLogic()
{
    if(!USERNAME)
        {
            USERNAME = prompt("Unesi Ime:", "Branko");
        
            if(USERNAME == "" || USERNAME == null)
                USERNAME = "Branko";
        
            for (const element of gameBtns)
            {
                localStorage.removeItem(element.id);
                element.disabled = false;
                element.style.cursor = "pointer";
                element.style.opacity = "100%";
            }
        
        }
        
        localStorage.setItem("username", USERNAME);
}

function numberOfDisabledGames()
{
    let disabledCount = 0;

    for (const element of gameBtns) 
    {
        if (localStorage.getItem(element.id) === "disabled") 
            disabledCount++;
    }
    console.log(`Number of disabled games: ${disabledCount}`);

    if(disabledCount == 4)
        leaderboradFiller();
}

function leaderboradFiller()
{
    for (let i = 0; i < 6; i++) 
    {
        const td = document.createElement("td");
        td.textContent = `Cell ${i + 1}`;
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}

function resetPoints() 
{
    poeni = 0;
    pointHolder.textContent = poeni;
    localStorage.setItem(POENI, poeni);

    localStorage.removeItem("username");
    usernameHolder.textContent = "/";

    for (const element of gameBtns)
    {
        element.style.cursor = "not-allowed";
        element.disabled = true;
        element.style.opacity = "50%";
    }
}

function disableGame(event)
{
    
    gameID = event.target.id; //MojBroj

    event.target.style.cursor = "not-allowed"; // Update style
    event.target.disabled = true;
    event.target.style.opacity = "50%";

    localStorage.setItem(gameID, "disabled");
}

function restoreDisabledGames()
{
    for (const element of gameBtns) 
    {
        if(localStorage.getItem(element.id) === "disabled")  
        {
            element.style.cursor = "not-allowed";
            element.disabled = true;
            element.style.opacity = "50%";
        }  
    }
}

btnPointReset.addEventListener("click", resetPoints);

for (const element of gameBtns)
{
    element.addEventListener("click", disableGame);
}
restoreDisabledGames();