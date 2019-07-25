let gridArea = 256

makeGrid()
whiteToBlack()


function makeGrid(){
    for (i = 0; i < gridArea; i++){
        let oneSquare = document.createElement('div')
        let canvas = document.getElementById('grid-container')
        oneSquare.classList.add("one-square-empty")
        canvas.appendChild(oneSquare)
    }
}

function whiteToBlack(){
    let emptySquare = document.querySelectorAll('.one-square-empty')
    let emptySquareArr = [...emptySquare]
    for (let i = 0; i < emptySquareArr.length; i++){
        emptySquareArr[i].addEventListener("mouseover", function(){
            emptySquareArr[i].style.backgroundColor = 'black'
        })
    }
}




