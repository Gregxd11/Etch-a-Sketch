let gridArea = 256 //Default grid size
let btnResize = document.getElementById('grid-resize')
let btnReset = document.getElementById('grid-reset')

btnResize.addEventListener('click', () => newCanvas(Number(prompt('Enter a grid size. (default is 16)'))))
btnReset.addEventListener('click', () => canvasReset())

//Creates default grid
makeGrid()


function makeGrid(){
    for (i = 0; i < gridArea; i++){
        let oneSquare = document.createElement('div')
        let canvas = document.getElementById('grid-container')
        oneSquare.classList.add("one-square-empty")
        canvas.appendChild(oneSquare)
    }
    whiteToBlack()  
}

//Erases old canvas and creates a new one scaled to user input
function newCanvas(gridSize){
    canvasErase()
    let newGrid = gridSize * gridSize
    let scaledWidth = 800 / gridSize
    let scaledHeight = 800 / gridSize
    for (i = 0; i < newGrid; i++){
        let oneSquare = document.createElement('div')
        let canvas = document.getElementById('grid-container')
        oneSquare.classList.add("one-square-empty")
        oneSquare.style.width = scaledWidth + 'px'
        oneSquare.style.height = scaledHeight + 'px'
        canvas.appendChild(oneSquare)
    }
    whiteToBlack()
}

//Completely clears the canvas
function canvasErase(){
    let squareReset = document.querySelectorAll('.one-square-empty')
    let squareResetArr = [...squareReset]
    for (let i = 0; i < squareResetArr.length; i++){
        squareResetArr[i].remove()
    }
}

//Resets the canvas back to default white
function canvasReset(){
    let squareReset = document.querySelectorAll('.one-square-empty')
    let squareResetArr = [...squareReset]
    for (let i = 0; i < squareResetArr.length; i++){
        squareResetArr[i].style.backgroundColor = 'white'
    }
}

//Changes the blocks from white to black when mousing over
function whiteToBlack(){
    let emptySquare = document.querySelectorAll('.one-square-empty')
    let emptySquareArr = [...emptySquare]
    for (let i = 0; i < emptySquareArr.length; i++){
        emptySquareArr[i].addEventListener("mouseover", function(){
            emptySquareArr[i].style.backgroundColor = 'black'
        })
        emptySquareArr[i].addEventListener("mousedown", function(){
            emptySquareArr[i].style.backgroundColor = 'white'
        })
    }
}




