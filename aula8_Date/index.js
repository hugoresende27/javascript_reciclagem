//Date object

date = new Date(0)//Thu Jan 01 1970 01:00:00 GMT+0100 (Hora padrão da Europa Ocidental)
date = new Date()//Sun Jan 23 2022 12:20:41 GMT+0000 (Hora padrão da Europa Ocidental)
date = new Date(2030,3,25, 18,1,2,3)//Thu Apr 25 2030 18:01:02 GMT+0100
date = new Date("April 20, 2029 16:20:01")//Fri Apr 20 2029 16:20:01 GMT+0100 
console.log(date)

let ano = date.getFullYear();
let mes = date.getMonth();
let diaSemana = date.getDay();
let diaMes = date.getDate();
let horas = date.getHours();
let minutos = date.getMinutes();
let segundos = date.getSeconds();
let miliSeg = date.getMilliseconds();

console.log(ano,mes,diaSemana,diaMes,horas,minutos,segundos,miliSeg)
//2029 3 5 20 16 20 1 0

date.setFullYear(2022)
date.setMonth(11)
date.setDate(25)
date.setHours(22)
date.setMinutes(25)
date.setSeconds(25)
date.setMilliseconds(25)
console.log(date)//Sun Dec 25 2022 22:25:25