let body = document.querySelector('body');

let header = document.querySelector('h1');

let resetbtn = document.querySelector('#reset-btn');
resetbtn.addEventListener("click", () => resetGrid());

let outerDiv = document.querySelector('.outer-div');

let drawSpace = document.querySelector('.drawing-space');

let options = document.querySelector('.options');

let optionsLeft = document.querySelector('.options-left');

let optionsRight = document.querySelector('.options-right');

function generateGrid(){

    function getInput(){
        inputSize = prompt('Select grid size (10 - 100):');
        if (isNaN(inputSize) || inputSize > 100 || inputSize < 10){
            alert("Please select a number within the range!");
            getInput()
        } else {
            return size = (inputSize **2);
        }
    }

    function addGridBlocks(){
        drawSpace.style.gridTemplateRows = `repeat(${inputSize}, 1fr)`;
        drawSpace.style.gridTemplateColumns = `repeat(${inputSize}, 1fr)`;
        for (let i = 0; i < size; i++){
            gridBlock = document.createElement("div");
            gridBlock.classList.add('grid-block');
            drawSpace.appendChild(gridBlock);
        }
    }

    getInput();
    addGridBlocks();
}

function resetGrid(){
    let i = 0;
    addGridBlocks();
}

generateGrid ();