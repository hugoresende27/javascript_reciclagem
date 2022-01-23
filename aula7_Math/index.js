//Math 

var myNum = 3.6;

console.log(Math.round(myNum))  //4
console.log(Math.floor(myNum))  //3
console.log(Math.ceil(myNum))   //4
console.log(Math.pow(3,2))   // 9 3**2
console.log(3**2)   // 9 3**2
console.log(Math.sqrt(64))   // 8
console.log(Math.abs(-64))   // 64
console.log(Math.min(1,2,3,4,5,6))   // 1
console.log(Math.max(1,2,3,4,5,6))   // 6
console.log(Math.PI)   // 3.141592653589793
console.log(Math.E)    // 2.718281828459045

////////////////////////////////
//calculo de uma hipotenusa
/*
var l1 = window.prompt("Lado 1->")
var l2 = window.prompt("Lado 2->")

var hip =Math.sqrt( Math.pow(l1,2)+ Math.pow(l2,2))
console.log(hip)
*/
///////////////////////////////
//Math.random()

var randNum = Math.random();    //por defeito random entre 0 e 1
var randNum2 = Math.floor(Math.random()*6);    // entre 0 e 5
var randNum3 = Math.floor(Math.random()*6)+1;    // entre 1 e 6
var randNum4 = Math.floor(Math.random()*100);    // entre 0 e 100
console.log(randNum4);

//funcão para gerar random entre um minimo e um máximo
function getRandomNum(min,max){
    return Math.floor(Math.random()* (max-min+1)+min)
}

console.log(getRandomNum(25,75))