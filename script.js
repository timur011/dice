const b1=document.getElementById("b1");
const side1=document.getElementById("side1");
const side2=document.getElementById("side2");
const sum=document.getElementById("result");

b1.addEventListener("click", rollDice);

function rollDice(){
    const roll1= Math.floor(Math.random() * (6) + 1);
    const roll2=Math.floor(Math.random() * (6) + 1);
    side1.textContent = "First Roll is " + roll1;
    side2.textContent = "Second Roll is " + roll2;
    sum.textContent = "Total is "+(roll1+roll2);
}