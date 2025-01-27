import { NasloviIgreNiz, MogucaLevaTabela, MogucaDesnaTabela } from './spojnicePodaci.js'

const gameTitle = document.querySelector(".game-Title");
const countDown = document.getElementById("timer2");
const pointHolder = document.getElementById("point-holder");

// Radi!
// console.log(NasloviIgreNiz[2]);
// console.log(MogucaLevaTabela[0][3]);
// console.log(MogucaDesnaTabela[2][9]);

let poeni = 0;

let arrayOfCorrectAnswers;

let leftButtons = [];
let rightButtons = [];

var naslov;
var leftTable=[];
var rightTable=[];
var shuffledRightTable;
let rndGameNumber;
let counter = 0;

var key;
var value;
var result = {} // Object

let playerAnswer;

let timer = 60;
let intervalID;

rndGameNumber = randomNumber10();
populateButtons();
populateTables();
onClickButtons();
objectFromTables();

if (!intervalID) 
    intervalID = setInterval(updateCountdown, 1000); // Set the interval once
if (localStorage.getItem('poeni')) 
        poeni = parseInt(localStorage.getItem('poeni'), 10);

pointHolder.textContent = poeni;

// // Provera svih informacija
// console.log(rndGameNumber);
// console.log(naslov);
// console.log(leftTable);
// console.log(rightTable);

// // Provera objekta
console.log(result);

// // Provera Buttons
// console.log(leftButtons);
// console.log(rightButtons);

// console.log(arrayOfCorrectAnswers);

function randomNumber10()
{
    rndGameNumber = Math.floor(Math.random() * 10); // 0 - 9
    return rndGameNumber;
}

function populateButtons()
{
    for (let i = 1; i <= NasloviIgreNiz.length; i++) // 1 2 3 4 5 6 7 8 9 10
    {
        leftButtons.push(document.getElementById(`left${i}`));
        rightButtons.push(document.getElementById(`right${i}`));
    }

    leftButtons[counter].style.backgroundColor = '#ffcf2370';
    leftButtons[counter].style.borderColor = '#ffd123';
}

function onClickButtons()
{
    for (let i = 0; i < NasloviIgreNiz.length; i++)
    {
        rightButtons[i].addEventListener("click", createObject);
    }
}

function shuffle(shuffledRightTable)
{
    let currentIndex = shuffledRightTable.length; // 10

    while (currentIndex != 0) 
    {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [shuffledRightTable[currentIndex], shuffledRightTable[randomIndex]] = [shuffledRightTable[randomIndex], shuffledRightTable[currentIndex]];
    } 
}

function populateTables()
{
    naslov = NasloviIgreNiz[rndGameNumber];
    gameTitle.textContent = naslov;

    for (let i = 0; i < NasloviIgreNiz.length; i++) //0 1 2 3 4 5 6 7 8 9
    {
        leftTable.push(MogucaLevaTabela[rndGameNumber][i]); // 00 01 02 ...
        leftButtons[i].textContent = MogucaLevaTabela[rndGameNumber][i];
        
        rightTable.push(MogucaDesnaTabela[rndGameNumber][i]); // 00 01 02 ...
    }

    shuffledRightTable = [... rightTable]; // same for now
    shuffle(shuffledRightTable); // shuffledRightTable should be shuffled now
    console.log(shuffledRightTable);

    for (let i = 0; i < NasloviIgreNiz.length; i++) //0 1 2 3 4 5 6 7 8 9
    {
        rightButtons[i].textContent = shuffledRightTable[i];
    }
}

function objectFromTables()
{
    for (let i = 0; i < leftTable.length; i++) // 0 1 2 3 4 5 6 7 8 9
    {
        key = rightTable[i];
        value = leftTable[i];
        result[key] = value;    
    }

    // Pretvaranje objekta u niz objekata
    arrayOfCorrectAnswers = Object.entries(result).map(([key, value]) => 
    {   
        return { [key]: value };
    });
}

function createObject(event)
{
    let rightAnswer = event.target.textContent;
    let indexRightAnswer = shuffledRightTable.indexOf(rightAnswer);
    let leftAnswer = leftTable[counter];

    playerAnswer = {[rightAnswer]: leftAnswer};

    counter++;
    console.log(counter);

    checkAnswer(indexRightAnswer);

    if (counter == 10)
    {
        dissableAll();
        clearInterval(intervalID);
        return;
    }

    leftButtons[counter].style.backgroundColor = '#ffcf2370';
    leftButtons[counter].style.borderColor = '#ffd123';

    // // Provera player result
    // console.log(playerAnswer);
}

function dissableAll()
{
    for (let i = 0; i < NasloviIgreNiz.length; i++) //0 1 2 3 4 5 6 7 8 9
    {
        leftButtons[i].disabled = true;
        rightButtons[i].disabled = true;

        leftButtons[i].style.cursor = 'not-allowed';
        rightButtons[i].style.cursor = 'not-allowed';
    }
}

function checkAnswer(index)
{
    let isCorrect = false;
    for (const element of arrayOfCorrectAnswers) 
    {
        // console.log(`${JSON.stringify(element)} === ${JSON.stringify(playerAnswer)}`);
        
        if(JSON.stringify(element) === JSON.stringify(playerAnswer))
            isCorrect = true;
    }

    if(isCorrect)
    {
        rightButtons[index].style.backgroundColor = 'rgba(0, 128, 0, 0.378)';
        rightButtons[index].style.borderColor = 'rgb(0, 128, 0)';

        leftButtons[counter-1].style.backgroundColor = 'rgba(0, 128, 0, 0.378)';
        leftButtons[counter-1].style.borderColor = 'rgb(0, 128, 0)';
        
        rightButtons[index].disabled = true;
        rightButtons[index].style.cursor = 'not-allowed';

        poeni += 2;

        pointHolder.textContent = poeni;
        localStorage.setItem('poeni', poeni);
    }
    else
    {
        rightButtons[index].classList.remove("redFieldAnimate");

        leftButtons[counter-1].style.backgroundColor = '#87328423';
        leftButtons[counter-1].style.borderColor = '#873284';

        // rightButtons[index].classList.add("redFieldAnimate");
        leftButtons[counter-1].classList.add("redFieldAnimate");

        setTimeout(() => {rightButtons[index].classList.add("redFieldAnimate");}, 50); // browser may not register the removal and re-adding of the same class
    }

    console.log(isCorrect);
}

function updateCountdown()
{
    let seconds = timer % 60;

    countDown.textContent = seconds === 0 ? 60 : seconds;
    timer--;

    if (timer < 0)
    {
        clearInterval(intervalID);
        alert("TIME IS UP!");
        countDown.textContent = "/";

        dissableAll();

        return;
    }
}

// Ovo moze da bude resenje ja mislim.. Sutra trebas da vidis da li mozes nekako ovo sve da pretvoris u funkcionalan kod. GL :)

// var idnex = desnaTabela.findIndex(o => o == "Nemačka"); // Bolji nacin
// console.log(idnex);

// var niz = {...MogucaDesnaTabela[0]};
// console.log(niz);
// niz[0] = "Lale";
// console.log(niz);
// console.log(MogucaDesnaTabela[0]);
// console.log(desnaTabela);