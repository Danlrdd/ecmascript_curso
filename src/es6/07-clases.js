//Declarando una clase
class User {}

//Instancia de una clase
//const newUser = new User();

class user {
    //métodos
    greeting(){
        return "Hello";
    }
}

const gndx = new user()
console.log(gndx.greeting())


//Constructor
class user {
    //constructor
    constructor(){
        console.log("Nuevo Usuario");
    }
    greeting(){
        return "Hello";
    }
}

const david = new user()


//This
class user {
    constructor(name){
        this.name = name;
    }
    //métodos
    speak(){
        return "hello";
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana= new user("ana")
console.log(ana.greeting())


//Setters getters
class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //métodos
    speak(){
        return "hello"
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age
    }
    set uAge(n){
        this.age = n
    }
}

const bebeloper1 = new user ("david", 15)
console.log(bebeloper1.uAge)
console.log(bebeloper1.uAge = 20)