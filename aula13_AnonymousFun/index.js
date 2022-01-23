//////////////////////////// ANONYMOUS FUNCTIONS //////////////////////////
//funções sem nome, geralmente não acessiveis depois de criadas, só para aceder uma vez, podem ser passadas como argumentos

(function(){
    document.getElementById('caixa3').innerHTML = "yo!"
}) ()

/////////////////////////////////////
let tarefa = function(){ document.getElementById('caixa3').innerHTML = "wazaaa"}
setTimeout(tarefa,1000)

///////////////////////////////////////

setTimeout(function(){ document.getElementById('caixa4').innerHTML = ['aaa','b','c']},2000)