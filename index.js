let minusButton = document.querySelector(".minus-button");
let plusButton = document.querySelector(".plus-button");
let resetButton = document.querySelector(".reset-button");
let output = document.querySelector(".counter");

minusButton.addEventListener("click", function (){
    let result = Number(output.innerHTML) - 1;
        output.innerHTML = result;
});

plusButton.addEventListener("click", function (){
    let result = Number(output.innerHTML) + 1;
    output.innerHTML = result;
});

resetButton.addEventListener("click", function (){
    output.innerHTML = 0;
});