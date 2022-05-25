const container = document.querySelector('#container');
let gridSize; 
let gridColor;

const sizeButtons = document.querySelectorAll('.grid-size');
sizeButtons.forEach(sizeButton => sizeButton.addEventListener('click',()=>{
    gridSize = sizeButton.id;
    clearGrid();
    createGrid(parseInt(gridSize));
}))

const colorButtons = document.querySelectorAll('.color-button');
colorButtons.forEach(colorButton => colorButton.addEventListener('click',()=> {
    gridColor = colorButton.id;
    changeColor(gridColor);
}))

const clear = document.querySelector(".clear");
clear.addEventListener('click', clearGrid);

function clearGrid(){
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.style.backgroundColor = 'rgba(0,0,0,0)');
}

function createGrid(gridSize){
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    for (let i = 0; i < gridSize **2; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener('mouseover',hover));
}
/*
function changeColor(gridColor){
    if (gridColor == "red"){
        this.style.backgroundColor = 'rgba(1, 0, 0, 0)';
    }
    else if (gridColor == "blue"){
        this.style.backgroundColor =  'rgba(0, 1, 0, 0)';
    }
    else if (gridColor == "green"){
        this.style.backgroundColor =  'rgba(0, 0, 1, 0)';
    }
    else if (gridColor == "black"){
        this.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    }
} 
*/

function hover(){
    this.style.backgroundColor = 'rgba(0, 0, 0, 1)';
}

/*
function changeColor(gridColor){
    const squares = document.querySelectorAll(".square");
    if (gridColor == "red"){
        squares.forEach(square => square.style.backgroundColor = 'rgba(1, 0, 0, 0)');
    }
    else if (gridColor == "blue"){
        squares.forEach(square => square.style.backgroundColor =  'rgba(0, 1, 0, 0)');
    }
    else if (gridColor == "green"){
        squares.forEach(square => square.style.backgroundColor = 'rgba(0, 0, 1, 0)');
    }
    else if (gridColor == "black"){
        squares.forEach(square => square.style.backgroundColor =  'rgba(0, 0, 0, 1)');
    }
} */