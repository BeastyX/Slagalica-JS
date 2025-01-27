//Zasto array.from -> Bez njega mi je ovo ziva kolekcija i nesto balavi dok pokusavam da pristupim elementima glitcha,
// ovako smo napravili staticnu kolekciju i sve je kako treba
const glitch = Array.from(document.getElementsByClassName("glitch"));

const pointHolder = document.getElementById("point-holder");

const findNumber1 = document.getElementsByClassName("number-to-find-content")[0];
const findNumber2 = document.getElementsByClassName("number-to-find-content")[1];
const findNumber3 = document.getElementsByClassName("number-to-find-content")[2];

const fourNumbers1 = document.getElementsByClassName("four-numbers-content")[0];
const fourNumbers2 = document.getElementsByClassName("four-numbers-content")[1];
const fourNumbers3 = document.getElementsByClassName("four-numbers-content")[2];
const fourNumbers4 = document.getElementsByClassName("four-numbers-content")[3];

const middleNumber = document.getElementsByClassName("middle-number")[0];
const lastNumber = document.getElementsByClassName("last-number")[0];

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const openBracket = document.getElementById("open-bracket");
const closedBracket = document.getElementById("closed-bracket");

const userRez = document.getElementById("user-result");
const compRez = document.getElementById("computer-result");

const backSpace = document.getElementById("backSpace");

const btnStart = document.getElementById("start-game");
const btnClear = document.getElementById("clear");
const btnCheck = document.getElementById("check");

const countDown = document.getElementById("timer");

const nextGame = document.getElementsByClassName("go-back")[0];

poeni = 0;
let counter = 0;
let middleArray = [10, 15, 20];
let lastArray = [25, 50, 75, 100];
let numberToFind;
let userCalc = '';
let finalUserResult;
let isNumber = true;

let numbersToUse = [];

const numberFieldsArray = [fourNumbers1, fourNumbers2, fourNumbers3, fourNumbers4, middleNumber, lastNumber];
const operationFieldsArray = [plus, minus, multiply, divide, openBracket, closedBracket];

let backSpaceFieldArray = [];
let numberlenArray = [];

let timer = 60;
let intervalID;

gameSetUp();

function gameSetUp()
{
    if (localStorage.getItem('poeni')) 
    {
        poeni = parseInt(localStorage.getItem('poeni'), 10);
    }

    pointHolder.textContent = poeni;

    for (const element of glitch) 
    {
        element.style.visibility = 'hidden';
    }
    glitch[0].style.visibility = 'visible';

    addEvent();
    isEnalbedBtns(false);
}

// Trebao bi da se sredi kod ovde - niz za fieldove, for neki i tako
function startGame()
{
    if (counter == 0)
        findNumber1.textContent = randomNumberToTen(); // 1-10
    else if (counter == 1)
        findNumber2.textContent = randomNumberToTen();
    else if (counter == 2)
    {
        findNumber3.textContent = randomNumberToTen();

        numberToFind = findNumber1.textContent + findNumber2.textContent + findNumber3.textContent;
        numberToFind = Number(numberToFind);
    }
    else if (counter == 3)
        fourNumbers1.textContent = randomNumberToTen();
    else if (counter == 4)
        fourNumbers2.textContent = randomNumberToTen();
    else if (counter == 5)
        fourNumbers3.textContent = randomNumberToTen();
    else if (counter == 6)
        fourNumbers4.textContent = randomNumberToTen();
    else if (counter == 7)
        middleNumber.textContent = randomMiddleNumber();
    else if (counter == 8)
    {
        lastNumber.textContent = randomLastNumber();
        btnStart.disabled = true;
        btnStart.style.opacity = '50%';
        btnStart.style.cursor = 'not-allowed';

        btnClear.style.display = 'flex';
        btnCheck.style.display = 'flex';

        isEnalbedBtns(true);
        getAllNumbers();

        if (!intervalID) 
        {
            intervalID = setInterval(updateCountdown, 1000); // Set the interval once
        }
    }

    if(counter <= 7)
    {
        glitch[counter + 1].style.visibility = 'visible';
    }

    console.log(counter);
    counter++;
}

// <> <> RANDOM NUMBER FUNKCIJE <> <>
function randomNumberToTen()
{
    return Math.ceil(Math.random() * 9);
}
function randomMiddleNumber()
{
    let rndNumber = Math.round(Math.random() * 2);
    return middleArray[rndNumber];
}
function randomLastNumber()
{
    let rndNumber = Math.round(Math.random() * 3);
    return lastArray[rndNumber];
}
// <> <> RANDOM NUMBER FUNKCIJE <> <>

function getAllNumbers()
{
    for (const element of numberFieldsArray) 
    {
        numbersToUse.push(Number(element.textContent));
    }
}

function isEnalbedBtns(check)
{
    let isEnabled;
    let cursorType;

    if (check) {
        isEnabled = false;
        cursorType = 'pointer'
    }
    else {
        isEnabled = true;
        cursorType = 'not-allowed'
    }

    for (const element of numberFieldsArray) {
        element.disabled = isEnabled;
        element.style.cursor = cursorType;
    }

    for (const element of operationFieldsArray) {
        element.disabled = isEnabled;
        element.style.cursor = cursorType;
    }
}

function calculation(event)
{
    let elementID = event.target;

    if(elementID == btnClear)
    {
        for (const element of numberFieldsArray)
        {
            element.disabled = false;
            element.style.cursor = 'pointer';
            element.style.opacity = '100%';
        }

        userRez.textContent = '';
        backSpaceFieldArray = [];
        numberlenArray = [];

        isNumber = true;
        return;
    }
    else if(elementID == btnCheck)
    {
        clearInterval(intervalID);
        calculateResults();
        endGame();

        return;
    }
    else if (numberFieldsArray.includes(elementID)) // da li je broj a ne operacija
    {
        if(isNumber)
        {
            elementID.disabled = true;
            elementID.style.cursor = 'not-allowed';
            elementID.style.opacity = '50%';
            
            isNumber = !isNumber;

            // Logika za Back Space
            backSpaceFieldArray.push(elementID.textContent);
            numberlenArray.push(elementID.textContent.length);
            userRez.textContent += elementID.textContent;
        }
    }
    else if (operationFieldsArray.includes(elementID))
    {
        if (elementID == openBracket || elementID == closedBracket)
        {
            const lastChar = userRez.textContent[userRez.textContent.length - 1];

            if (elementID == openBracket)
            {
                if (lastChar >= "0" && lastChar <= "9") 
                {
                    alert("You cannot place an open bracket after a number.");
                    return;
                }
                isNumber = true;
            }
            else if (elementID == closedBracket)
                isNumber = false;

            userRez.textContent += elementID.textContent;
        }
        else if(!isNumber)
        {
            isNumber = !isNumber;
            userRez.textContent += elementID.textContent;
        }
    }

    
}

function calculateResults()
{
    try {
        finalUserResult = eval(userRez.textContent); //234 npr.

        if (isNaN(finalUserResult) || finalUserResult === Infinity || finalUserResult === -Infinity)
            finalUserResult = 0;
    }
    catch (error) {
        finalUserResult = 0;
    }

    userRez.textContent += ` = ${finalUserResult}`;
    points(finalUserResult, numberToFind);
    // console.log(numbersToUse);

    backSpace.disabled = true;

    let result = solveExpression(numbersToUse, numberToFind);
    compRez.textContent = `${result.closestExpression} = ${result.closest}`;
    // console.log(`${result.closestExpression} = ${result.closest}`);
}

function points(finalUserResult, numberToFind)
{
    let difference = Math.abs(numberToFind - finalUserResult); // Vraca uvek pozitivnu varijantu

    if (difference == 0)
    {
        poeni += 20;
    }
    else if (difference <= 10)
    {
        poeni += 15;
    }
    else if (difference <= 20)
    {
        poeni += 10;
    }
    else if (difference <= 30)
    {
        poeni += 5;
    }

    pointHolder.textContent = poeni;
    localStorage.setItem('poeni', poeni);
}

function endGame()
{
    isEnalbedBtns(false);

    btnClear.disabled = true;
    btnClear.style.cursor = 'not-allowed';
    btnClear.style.opacity = '50%';

    btnCheck.disabled = true;
    btnCheck.style.cursor = 'not-allowed';
    btnCheck.style.opacity = '50%';

    nextGame.style.display = 'flex';
}

function backSpaceHandler()
{
    if(userRez.textContent == '')
    {
        console.log("String is empty!");
        return;
    }

    lastCharUsed = userRez.textContent[userRez.textContent.length - 1]; // Poslednji karakter u UserRezu
    isNumber = !isNumber;

    console.log("<><><><><><><><><>");
    console.log(backSpaceFieldArray); // [3, 3, 7, 4, 25, 100];
    console.log(numberlenArray); // [1, 1, 1, 1, 2, 3];

    // console.log(lastCharUsed);
    if (lastCharUsed >= "0" && lastCharUsed <= "9")
    {
        // console.log("IS NUMBER!");

        for (let i = numberFieldsArray.length - 1; i >= 0; i--)
        {
            const element = numberFieldsArray[i];

            // console.log(element.textContent);
            // console.log(backSpaceFieldArray[backSpaceFieldArray.length - 1]);
            if (element.textContent == backSpaceFieldArray[backSpaceFieldArray.length - 1] && element.disabled) // [4, 3, 4, 6, 10, 100]
            {
                element.disabled = false;
                element.style.cursor = 'pointer';
                element.style.opacity = '100%';

                // backSpaceFieldArray.pop(); //100 -> [3, 3, 7, 4, 25]
                backSpaceFieldArray.splice(backSpaceFieldArray.length - 1, 1);
                break;
            }
        }


        userRez.textContent = userRez.textContent.substring(0, userRez.textContent.length - numberlenArray[numberlenArray.length-1]); // 3 // should remove whole number now
        numberlenArray.pop(); //3 -> [1, 1, 1, 1, 2];
    }
    else
    {
        userRez.textContent = userRez.textContent.substring(0, userRez.textContent.length - 1); // ako nije broj onda je operacija i uvek 1 char +-*()/
    }

    const lastChar = userRez.textContent.length > 0 ? userRez.textContent[userRez.textContent.length - 1] : null;

    if (lastChar === null) 
    {
        isNumber = true;
    } 
    else if (lastChar >= "0" && lastChar <= "9") 
    {
        isNumber = false;
    } 
    else if (lastChar == ")")
    {
        isNumber = false;
    }
    else 
    {
        isNumber = true;
    }

    console.log(backSpaceFieldArray);
    console.log(numberlenArray);
    console.log("<><><><><><><><><>");
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

        calculateResults();
        endGame();

        return;
    }
}

// <><><><><><><><><><> AI RESULT <><><><><><><><><><>
function solveExpression(numbers, target) {
    let closest = null; // Closest result found
    let closestExpression = ""; // Expression for the closest result

    function backtrack(currentNumbers, expressionParts) {
        if (currentNumbers.length === 1) {
            const result = currentNumbers[0];
            if (closest === null || Math.abs(result - target) < Math.abs(closest - target)) {
                closest = result;
                closestExpression = expressionParts[0]; // Save the final expression
            }
            return;
        }

        for (let i = 0; i < currentNumbers.length; i++) {
            for (let j = i + 1; j < currentNumbers.length; j++) {
                let remaining = currentNumbers.filter((_, idx) => idx !== i && idx !== j);
                let a = currentNumbers[i];
                let b = currentNumbers[j];

                // Try each operation and build the expression
                [
                    ['+', a + b, `(${expressionParts[i]} + ${expressionParts[j]})`],
                    ['-', a - b, `(${expressionParts[i]} - ${expressionParts[j]})`],
                    ['*', a * b, `(${expressionParts[i]} * ${expressionParts[j]})`],
                    ['/ ', b !== 0 && Number.isInteger(a / b) ? a / b : null, `(${expressionParts[i]} / ${expressionParts[j]})`]
                ].forEach(([op, res, expr]) => {
                    if (res === null) return; // Skip invalid operations (like division by zero)

                    backtrack([...remaining, res], [...expressionParts.filter((_, idx) => idx !== i && idx !== j), expr]);
                });
            }
        }
    }

    // Start with numbers and their string representations
    const initialExpressions = numbers.map(String);
    backtrack(numbers, initialExpressions);

    return { closest, closestExpression };
}
// <><><><><><><><><><> AI RESULT <><><><><><><><><><>

// Example Usage:



function addEvent()
{
    btnStart.addEventListener("click", startGame);
    btnClear.addEventListener("click", calculation);
    btnCheck.addEventListener("click", calculation);

    backSpace.addEventListener("click", backSpaceHandler);

    for (const element of numberFieldsArray) // [fourNumbers1, fourNumbers2, fourNumbers3, fourNumbers4, middleNumber, lastNumber];
    {
        element.addEventListener('click', calculation);
    }

    for (const element of operationFieldsArray) // [plus, minus, multiply, divide, openBracket, closedBracket];
    {
        element.addEventListener('click', calculation);
    }
}
























// Moj Broj, ladno radi ovo. Samo trebam da proverim kako prilikom konverziju iz stringa
// console.log(eval((8 - 1) * (2 + 75) - 9 * 15));
// Moze i string
// console.log(eval("(25+1) * 10 + 9 + 7 - 2"));