let body = document.querySelector('body');
body.style.minHeight = '100vh';
body.style.display = 'flex';
body.style.flex = '1, 1, auto';
body.style.alignItems = 'center';

let header = document.querySelector('h1');
header.style.color = 'white';

let buttons = document.querySelectorAll('button');

let outerDiv = document.querySelector('.outer-div');
outerDiv.style.minHeight = '600px';
outerDiv.style.maxHeight = '600px';
outerDiv.style.minWidth = '540px';
outerDiv.style.maxWidth = '540px';
outerDiv.style.backgroundColor = 'red';
outerDiv.style.border = '2px solid darkred';
outerDiv.style.borderRadius = '10px'
outerDiv.style.display = 'flex';
outerDiv.style.flexDirection = 'column';
outerDiv.style.alignItems = 'center';
outerDiv.style.justifyContent = 'center';

let drawSpace = document.querySelector('.drawing-space');
drawSpace.style.minHeight = '460px';
drawSpace.style.maxHeight = '460px';
drawSpace.style.minWidth = '460px';
drawSpace.style.maxWidth = '460px';
drawSpace.style.backgroundColor ='darkgrey';
drawSpace.style.border = '2px solid grey';
drawSpace.style.display = 'flex';
drawSpace.style.flex = '1, 1, auto';
drawSpace.style.flexDirection = 'row';
drawSpace.style.flexWrap = 'wrap';


let size;

function getSize(){
    inputSize = prompt('Select grid size (10 - 100):');
    if (isNaN(inputSize)){alert("Please enter a number!")}
    else if (inputSize > 100 || inputSize < 10){alert("Please select a number within the range!")}
    else {return size = inputSize;}
    }

getSize();
console.log(size);


function generateGrid(){
    for (let i = 0; i < size; i++)
    gridBlock = document.createElement("div"); 
    gridBlock.style.display = 'flex';
    gridBlock.style.flex = '1, 1, auto';
    gridBlock.style.border = "2px solid white";
    gridBlock.style.minHeight = '3px';
    gridBlock.style.minWidth = '3px';
    drawSpace.appendChild(gridBlock);
    }
generateGrid();

//function generateGrid(x)
// choice = prompt('Select a number from 10 - 100')
// x = check int(choice);
//(loop for x times)
//create attribute div 
//960/x = dimensionOfDiv
// div display flex, flex shrink
// div height === width