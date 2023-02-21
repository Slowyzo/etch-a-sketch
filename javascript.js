let body = document.querySelector('body');

let resetbtn = document.querySelector('#reset-btn');
resetbtn.addEventListener("click", () => resetGrid());

let rainbowbtn = document.querySelector('#rainbow-btn');
rainbowbtn.addEventListener("click", () => rainbowMode());

let drawSpace = document.querySelector('.drawing-space');

let gridBlock;

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
        let gridBlock = document.createElement("div");
        gridBlock.classList.add('grid-block');
        drawSpace.appendChild(gridBlock);
        gridBlock.addEventListener("mouseover", () => 
            gridBlock.classList.add('grid-block-active'));
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
        gridBlock.addEventListener("mouseover", () =>
            gridBlock.style.backgroundColor = `#${
                (Math.floor(Math.random()*16777215).toString(16))}`)
    }
}


getInput();
addGridBlocks();