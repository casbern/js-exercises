// simple object
console.log('------ simple object ------');
let cassia = {
    // properties of the object: 
    //attributes + methods
    // attributes are also called data
    // methods are also called behaviour

    firstName: 'Cassia',
    lastName: 'Bernardo',

    greeting: function() {
        return 'Hi!';
    }
};

console.log(cassia.firstName);
console.log(cassia.greeting());

console.log('-------- class ES6 -------- ');

class Person {
    constructor(a, b) {
        this.firstName = a;
        this.lastName = b;
    }

    greeting() {
        return 'Hi!';
    }

}

cassia2 = new Person('Cassia2', 'Bernardo2');
stefan2 = new Person('Stefan2', 'Horomnea2');

console.log(cassia2.firstName);
console.log(cassia2.lastName);

//read/get the attribute (use but not change the value)
//cassia.firstName

// write/set the attribute (change the value)
// cassia2.firstName = 'Cassinha';

console.log(cassia2.greeting());

console.log('------- getters and setters -----');

class Liar {
    constructor(ala, bala, nana) {
        this._name = ala; //ala is a local variable. It finishes in the end of this constructor.
        this._fortune = bala;
        this._age = nana;
    }

    get nahhme() {
        return this._name.charAt(0).toUpperCase() + this._name.slice(1);
    }

    get age() {
        console.log(`get age was called`);
        return this._age / 2;
    }

    set nahhme(newName) {
        this._name = newName;
    }

    set age(newAge) {
        console.log(`set age was called`);
        this._age = newAge;
    }
}

tom = new Liar('tom', 20000, 40);
tom.nahhme = 'ana';

console.log('tom.name is ' + tom.nahhme);
console.log(`tom.age is ${tom.age}`);