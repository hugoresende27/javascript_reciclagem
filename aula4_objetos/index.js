//Objetos = container de propriedades e metodos
//propriedades = valores/variáveis que descrevem o obj
//metodos = funções q descrevem o que o obj pode fazer

var human = {
    
    name : "Hugo",
    age : 33,

    eat : function(){
        console.log(this.name+" está com fome!")
    },

    drink : function(){
        console.log(this.name+" está a beber")
    },

    sleep : function(){
        console.log(this.name+" está a dormir")
    }
}

console.log(human)
console.log(human.name) //acesso com .
console.log(human['age'])//acesso com bracket location

var car = {
    model : "Fiat",
    year : 2000,
    color : "blue",

    run : function(){
        console.log(this.model+" em movimento")
    }
}

human.drink()
human.sleep()
car.run()

