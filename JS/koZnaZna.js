import { questions } from './koZnaZnaPitanja.js'

const questionText = document.querySelector("p");
const nextQuestion = document.getElementById("next");
const nextGame = document.getElementById("go-back");
const pointHolder = document.getElementById("point-holder");

let poeni = 0;
let answerButtons = [];
let arrayOfQuestionNumbers = [];
let arrayOfQuestions = [];
let counter = 0;

populateArrayOfQuestionNumbers();
fillQuestionsArray();
getButtons()
fillTextBoxes();
onClick()

if (localStorage.getItem('poeni')) 
        poeni = parseInt(localStorage.getItem('poeni'), 10);

pointHolder.textContent = poeni;

// Niz random brojeva
// console.log(arrayOfQuestionNumbers);
//Broj pitanja u "bazi"
// console.log(questions.length);

// ubacujemo 10 random brojeva u niz od (0 - ...)
function getButtons()
{
    for (let i = 1; i <= 4; i++) // 1 2 3 4 5 6 7 8 9 10
    {
        answerButtons.push(document.getElementById(`answer${i}`));
    }
}

function populateArrayOfQuestionNumbers()
{
    for (let i = 0; i < 10; i++) // 10 pitanja
    {
        randomNumber10();
    }
}

// Funkcija za random number koji se ne ponavlja
function randomNumber10()
{
    while(true)
    {
        let rndGameNumber = Math.floor(Math.random() * questions.length); // 0 - ...
        
        if(arrayOfQuestionNumbers.includes(rndGameNumber))
        {
            console.log(`number: ${rndGameNumber} exists in: ${arrayOfQuestionNumbers}`);
            continue;
        }
        else
        {
            arrayOfQuestionNumbers.push(rndGameNumber);
            return;
        }
    }
}

function fillQuestionsArray()
{
    for (let i = 0; i < arrayOfQuestionNumbers.length; i++) // 0 - 9
    {
        arrayOfQuestions.push(questions[arrayOfQuestionNumbers[i]]);
    }
    console.log(arrayOfQuestions);
}

function fillTextBoxes()
{
    console.log(counter);

    if(counter == 10)
    {
        console.log("Game finished!");
        nextGame.style.display = 'flex';
        nextQuestion.disabled = true;
        nextQuestion.style.cursor = 'not-allowed';

        disableAll();
        return;
    }
   
    questionText.textContent = arrayOfQuestions[counter].question;

    for (let i = 0; i < 4; i++) // 0 1 2 3
    {
        answerButtons[i].textContent = arrayOfQuestions[counter].options[i];

        answerButtons[i].style.backgroundColor = '#87328423';
        answerButtons[i].style.borderColor = '#873284';
    }

    counter++;
    enableAll();
}

function checkAnswer(event)
{
    let buttonID = event.target;
    let userAnswer = event.target.textContent;
    let correctAnswer = arrayOfQuestions[counter-1].answer;

    let indexOfButton = answerButtons.indexOf(buttonID);

    if(userAnswer == correctAnswer)
    {
        buttonID.style.backgroundColor = 'rgba(0, 128, 0, 0.378)';
        buttonID.style.borderColor = 'rgb(0, 128, 0)';
        poeni += 10;
    }
    else if(buttonID == nextQuestion)
    {
        correctAnswers();
        poeni += 0;
    }
    else
    {
        answerButtons[indexOfButton].classList.remove("redFieldAnimate");

        setTimeout(() => {answerButtons[indexOfButton].classList.add("redFieldAnimate");}, 50);

        correctAnswers();
        poeni -= 5;
    }

    setTimeout(fillTextBoxes, 2000);
    disableAll();

    pointHolder.textContent = poeni;
    localStorage.setItem('poeni', poeni);
}

function correctAnswers()
{
    let correctAnswer = arrayOfQuestions[counter-1].answer;

    for (let i = 0; i < answerButtons.length; i++) 
    {
        if(correctAnswer == answerButtons[i].textContent)
        {
            answerButtons[i].style.backgroundColor = 'rgba(0, 128, 0, 0.378)';
            answerButtons[i].style.borderColor = 'rgb(0, 128, 0)';
        }
    }
}

function disableAll()
{
    for (let i = 0; i < 4; i++) // 0 1 2 3
    {
        answerButtons[i].disabled = true;
        answerButtons[i].style.cursor = 'not-allowed';
    }

    nextQuestion.disabled = true;
    nextQuestion.style.opacity = '50%';
    nextQuestion.style.cursor = 'not-allowed';
}

function enableAll()
{
    for (let i = 0; i < 4; i++) // 0 1 2 3
    {
        answerButtons[i].disabled = false;
        answerButtons[i].style.cursor = 'pointer';
    }

    nextQuestion.disabled = false;
    nextQuestion.style.opacity = '100%';
    nextQuestion.style.cursor = 'pointer';
}

function onClick()
{
    nextQuestion.addEventListener("click", checkAnswer);

    for (let i = 0; i < 4; i++) // 0 1 2 3
    {
        answerButtons[i].addEventListener("click", checkAnswer);
    }
}

