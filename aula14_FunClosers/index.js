
//let pontos = 0;
let score = function(){
    let pontos = 0;
    return function(){
        return ++pontos
    }
    
}()

console.log(score())
console.log(score())
console.log(score())

//////////////////// closer com argumentos ////////////////////////

function makeSize(size){

    return function(){
        document.body.style.fontSize = size + "px"
    }
}

function makeFont(font){

    return function(){
        document.body.style.fontFamily = font
    }
}

let size20 = makeSize(20)
let size30 = makeSize(30)
let size40 = makeSize(80)

let fontConsolas = makeFont("Consolas")
let fontInkFree = makeFont("Ink Free")

//size20()
//size30()
size40()

//fontInkFree()
fontConsolas()