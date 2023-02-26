const body = document.querySelector('body');

const resetbtn = document.querySelector('#reset-btn');
resetbtn.addEventListener("click", () => resetGrid());

const rainbowbtn = document.querySelector('#rainbow-btn');
rainbowbtn.addEventListener("click", () => {
    color = null;
    rainbowMode();
});

const resizebtn = document.querySelector('#resize-btn');
resizebtn.addEventListener("click", () => {
    getInput();
    resetGrid();
});

const drawSpace = document.querySelector('.drawing-space');

let colorChoice = document.querySelector('#draw-color');
let color = null;
colorChoice.addEventListener("change", function(e) {
    color = e.target.value;
});

let gridBlock;
let inputSize;
let size;

function getInput(){
    inputSize = parseInt(prompt('Select grid size (1 - 100):'));
    if (isNaN(inputSize) || inputSize > 100 || inputSize < 1){
        alert("Please select a number within the range!");
        getInput();
    } else {
        return size = (inputSize **2);
    }
}

function addGridBlocks(){
    drawSpace.style.gridTemplateRows = `repeat(${inputSize}, 1fr)`;
    drawSpace.style.gridTemplateColumns = `repeat(${inputSize}, 1fr)`;
    for (let i = 0; i < size; i++){
        let gridBlock = document.createElement("div");
        gridBlock.classList.add('grid-block');
        drawSpace.appendChild(gridBlock);
        gridBlock.addEventListener("mouseover", () => {
            if (color !== null) {
                gridBlock.style.backgroundColor = color;
            } else {
                gridBlock.classList.add('grid-block-active');
            }
        });
    }
}

function resetGrid(){
    drawSpace.innerHTML = '';
    addGridBlocks();
}

function rainbowMode(){
    drawSpace.innerHTML = '';
    drawSpace.style.gridTemplateRows = `repeat(${inputSize}, 1fr)`;
    drawSpace.style.gridTemplateColumns = `repeat(${inputSize}, 1fr)`;
    for (let i = 0; i < size; i++){
        let gridBlock = document.createElement("div");
        gridBlock.classList.add('grid-block-rainbowstart');
        drawSpace.appendChild(gridBlock);
        gridBlock.addEventListener("mouseover", () => {
            if (color !== null) {
                gridBlock.style.backgroundColor = color;
            } else {
                gridBlock.style.backgroundColor = `#${
                    (Math.floor(Math.random()*16777215).toString(16))}`;
            }
        });
    }
}

getInput();
addGridBlocks();
