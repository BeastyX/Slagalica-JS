const leftFields = Array.from(document.getElementById("left").querySelectorAll("img"));
const rightFields = Array.from(document.getElementById("right").querySelectorAll("th")); // Pokupi samo polja iz desne tabele
const imageFields = Array.from(document.getElementById("contaiener-skocko").querySelectorAll("button"));

const backspaceBtn = document.getElementById("backOneStep");

counter = 0;

console.log(leftFields);
console.log(rightFields);
console.log(imageFields);

onClick();

function insertImage(event)
{
    try 
    {
        let elementIDImage = event.target.src;
        
        if (!elementIDImage) throw new Error("No image source found");
    
        leftFields[counter].src = elementIDImage;
        counter++;
    } 
    catch (error) 
    {
        console.error("Error setting image:", error);
    }
}

function backspace()
{
    leftFields[counter-1].src = "";
    counter--;
}

function onClick()
{
    for (const element of imageFields) 
    {
        element.addEventListener("click", insertImage);    
    }

    backspaceBtn.addEventListener("click", backspace);
}
