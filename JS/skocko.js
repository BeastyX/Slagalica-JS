const leftFields = Array.from(document.getElementById("left").querySelectorAll("img"));
const rightFields = Array.from(document.getElementById("right").querySelectorAll("div")); // Pokupi samo polja iz desne tabele
const imageFields = Array.from(document.getElementById("contaiener-skocko").querySelectorAll("button"));

const backspaceBtn = document.getElementById("backOneStep");
const checkBtn = document.getElementById("checkIt");
const pointHolder = document.getElementById("point-holder");
const countDown = document.getElementById("timer3");

let poeni = 0;
let counter = 0;
let counterHelper = 1;
let backspaceChecker = 0;

let timer = 60;
let intervalID;

let answerArray = [];
let answerToFind = [];
let allImageFieldsArray = ["skocko", "tref", "pik", "srce", "karo", "zvezda"];

console.log(leftFields);
console.log(rightFields);
console.log(imageFields);

onClick();
AnswerToFind();
dissableCheck();

if (!intervalID) 
    intervalID = setInterval(updateCountdown, 1000);
if (localStorage.getItem('poeni')) 
    poeni = parseInt(localStorage.getItem('poeni'), 10);

pointHolder.textContent = poeni;

function insertImage(event)
{
    if(counter == leftFields.length)
        return;

    try 
    {
        console.log(counterHelper);
        let elementID = event.target.alt;
        let elementIDImage = event.target.src;
        
        if (!elementIDImage) throw new Error("No image source found");
    
        leftFields[counter].src = elementIDImage;

        answerArray.push(elementID);

        if(counterHelper % 4 == 0)
        {
            checkBtn.disabled = false;
            checkBtn.style.cursor = 'pointer';
            checkBtn.style.opacity = "100%";
            dissableImage();

            console.log("4 fields");
            console.log(answerArray);
        }

        counter++;
        counterHelper++; 
    } 
    catch (error) 
    {
        console.error("Error setting image:", error);
    }
}

function backspace()
{
    if (counter <= backspaceChecker) 
        return;

    if(counterHelper % 4 != 0)
    {
        dissableCheck();

        for (const element of imageFields) 
        {
            element.disabled = false;
            element.style.cursor = 'pointer';
            element.style.opacity = "100%";
        }
    }

    leftFields[counter-1].src = "";
    answerArray.pop();

    counter--;
    counterHelper--;
}

function checkAnswer()
{
    console.log(counter);
    let circleCounter = 4;
    let fieldColorArray = [];
    backspaceChecker = counter; // sa ovim kornisk ne moze da brise iz proslih redova kombinacije

    console.log("check");
    dissableCheck();

    for (const element of imageFields) 
    {
        element.disabled = false;
        element.style.cursor = 'pointer';
        element.style.opacity = "100%";
    }

    let countMap = {}; // Broji pojavljivanja svakog elementa u answerToFind
    for (let num of answerToFind) // Popunjavamo countMap sa brojem pojavljivanja svakog broja u answerToFind
    {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    console.log(countMap);

    // Red Field logic
    for(let i = 0; i < 4; i++) //0 1 2 3
    {
        if(answerArray[i] == answerToFind[i])
        {
            circleCounter--;
            console.log("OnPosition");
            fieldColorArray.push(1);

            countMap[answerArray[i]]--;
        }
    }

    // Yellow Field logic
    for(let i = 0; i < 4; i++)
    {
        if (answerArray[i] != answerToFind[i] && countMap[answerArray[i]] > 0) 
        {
            circleCounter--;
            console.log("InArrayNotOnPosition");
            fieldColorArray.push(2);
            countMap[answerArray[i]]--;
        }
    }

    answerArray = [];
    fieldColors(fieldColorArray);
}

function fieldColors(fieldColorArray)
{
    fieldColorArray.sort((a, b) => a - b); // array sort from [1, 2, 1 , 2] to [1, 1, 2, 2]
    circleCounter = 4;
    console.log(fieldColorArray);

    let winCounter = 0;

    for(let i = 0; i < 4; i++)
    {
        if(fieldColorArray[i] == 1)
        {
            rightFields[counter - circleCounter].style.backgroundColor = "red";
            circleCounter--;
            winCounter++;
        }
        else if(fieldColorArray[i] == 2)
        {
            rightFields[counter - circleCounter].style.backgroundColor = "yellow";
            circleCounter--;
        }
    }



    if(winCounter == 4)
    {
        dissableImage();
        dissableCheck();

        poeni += 20;

        pointHolder.textContent = poeni;
        localStorage.setItem('poeni', poeni);

        clearInterval(intervalID);
        return;
    }

    if(counter == 24)
    {
        clearInterval(intervalID);
        console.log("Lost");
    }

}

function AnswerToFind()
{
    for(let i = 0; i < 4; i++) //0 1 2 3
    {
        answerToFind.push(allImageFieldsArray[Math.floor(Math.random() * 6)]); //0 1 2 3 4 5
    }
    console.log(answerToFind);
}

function dissableImage()
{
    for (const element of imageFields) 
    {
        element.disabled = true;
        element.style.cursor = 'not-allowed';
        element.style.opacity = "50%";
    }
}

function dissableCheck()
{
    checkBtn.disabled = true;
    checkBtn.style.cursor = 'not-allowed';
    checkBtn.style.opacity = "50%";
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

        dissableImage();
        dissableCheck();

        backspaceBtn.disabled = true;
        backspaceBtn.style.cursor = 'not-allowed';
        backspaceBtn.style.opacity = "50%";

        return;
    }
}

function onClick()
{
    for (const element of imageFields) 
    {
        element.addEventListener("click", insertImage);    
    }

    backspaceBtn.addEventListener("click", backspace);
    checkBtn.addEventListener("click", checkAnswer);
}
