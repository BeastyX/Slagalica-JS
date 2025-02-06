const btnPointReset = document.getElementById("point-reset");
const pointHolder = document.getElementById("point-holder");

const btnMojBroj = document.getElementById("game1");
const btnSpojnice = document.getElementById("game2");
const btnKoZnaZna = document.getElementById("game3");
const btnSkocko = document.getElementById("game4");
const usernameHolder = document.getElementById("user-holder");

const leaderboardBtn = document.getElementById("leaderboardBtna");
const leaderboard = document.getElementById("leaderBoard");
const tbody = document.querySelector("#leaderBoard tbody");

const gameBtns = document.querySelectorAll(".game-button");

const POENI = 'poeni';
let USERNAME = localStorage.getItem("username");

let gamesByOrder = ["game1", "game2", "game3", "game4"];
let userObject = {};
let gamePointsArray = [];
let gamesArray = [];

let allUsersArray = [];

numberOfDisabledGames();
usernameLogic();

let poeni = 0;
let prevPoeni;
let user = "";
let gameCounter = 1;


if (localStorage.getItem(POENI)) 
    poeni = parseInt(localStorage.getItem(POENI), 10);

if (localStorage.getItem("username")) 
    user = localStorage.getItem("username");

if(localStorage.getItem("prevPoeni"))
    prevPoeni = localStorage.getItem("prevPoeni"); 

if(localStorage.getItem("gameCounter"))
    gameCounter = localStorage.getItem("gameCounter");

if(localStorage.getItem("gamePointsArray"))
    gamePointsArray = JSON.parse(localStorage.getItem("gamePointsArray"));

if(localStorage.getItem("gamesArray"))
    gamesArray = JSON.parse(localStorage.getItem("gamesArray"));

if(localStorage.getItem("allUsersArray"))
    allUsersArray = JSON.parse(localStorage.getItem("allUsersArray"));

pointHolder.textContent = poeni;
usernameHolder.textContent = user;

userObject.username = usernameHolder.textContent; // // // USERNAME IN OBJECT

pointsEarned();
if (gamePointsArray.length == 4) 
{
    arangePointsArray();
    userObject.points = gamePointsArray; // // // ALL GAME POINTS IN OBJECT
    userObject.total = poeni; // // // TOTAL IN OBJECT

    allUsersArray.push(userObject);
    localStorage.setItem("allUsersArray", JSON.stringify(allUsersArray));

    updateTable();
    popupFn(); 
}

console.log(userObject);
console.log(allUsersArray);
// console.log(gamesArray);

function pointsEarned()
{
    if(gamesArray.length > 0)
    {
        console.log("Blah");
        console.log(gameCounter);

        // console.log(poeni);
        // console.log(prevPoeni);

        let pointsEarned = poeni - prevPoeni // mojBroj - 0 // mojBrojSpojnice - mojBroj ... 

        // let game = `game${gameCounter}`; //game1 game2 game3 game4
        // userObject[game] = pointsEarned; //game1 = 20, game2 = 4 ...

        console.log(typeof(gamePointsArray));
        gamePointsArray.push(pointsEarned);
        localStorage.setItem("gamePointsArray", JSON.stringify(gamePointsArray));

        gameCounter++;
        localStorage.setItem("gameCounter", gameCounter);
    }
}

function arangePointsArray()
{
    let gamePointsArrayTemp = [];
    console.log(gamePointsArray);
    console.log(gamesArray);
    console.log(gamesByOrder);


    for (let i = 0; i < 4; i++) //0 1 2 3
    {
        gamePointsArrayTemp[i] = gamePointsArray[gamesArray.indexOf(gamesByOrder[i])];
    }

    gamePointsArray = gamePointsArrayTemp;
}

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
}

function updateTable() 
{
    leaderboard.style.display = 'table';
    tbody.innerHTML = ''; 

    allUsersArray.sort((a, b) => b.total - a.total); // Sortiranje po poenima

    for (const object of allUsersArray) 
    {
        let row = document.createElement("tr");

        for (const key in object) 
        {
            if (Array.isArray(object[key])) 
            {
                object[key].forEach(value => 
                {
                    let td = document.createElement("td");
                    td.textContent = value;
                    row.appendChild(td);
                });
            } else 
            {
                let td = document.createElement("td");
                td.textContent = object[key];
                row.appendChild(td);
            }
        }

        tbody.appendChild(row);
    }
}


function resetPoints() 
{
    poeni = 0;
    prevPoeni = 0;
    gameCounter = 1;
    gamePointsArray = [];
    gamesArray = [];

    localStorage.setItem("prevPoeni", prevPoeni);
    localStorage.setItem("gameCounter", gameCounter);
    localStorage.setItem("gamePointsArray", JSON.stringify(gamePointsArray));
    localStorage.setItem("gamesArray", JSON.stringify(gamesArray));

    // allUsersArray = [];
    // localStorage.setItem("allUsersArray", JSON.stringify(allUsersArray));

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
    prevPoeni = poeni;
    localStorage.setItem("prevPoeni", prevPoeni);

    
    gameID = event.target.id; //MojBroj

    gamesArray.push(gameID);
    localStorage.setItem("gamesArray", JSON.stringify(gamesArray));

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

function popupFn() 
{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popupDialog").style.display = "block";

    updateTable();
}
function closeFn() 
{
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popupDialog").style.display = "none";
}

btnPointReset.addEventListener("click", resetPoints);

for (const element of gameBtns)
{
    element.addEventListener("click", disableGame);
}
restoreDisabledGames();