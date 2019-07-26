let gridArea = 256

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




