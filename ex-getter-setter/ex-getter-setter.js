class Person {
    constructor(myFirstName, myLastName, myAge) {
        this._firstName = myFirstName;
        this._lastName = myLastName;
        this._age = myAge;
    } 

    greeting() {
        return `Hello, ${this.name} ${this.lastName}. You are ${this.age} years old.`;
    }


    get name(){
        return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
    } //refer to the current object. The one that you create.

    get lastName() {
        return this._lastName.charAt(0).toUpperCase() + this._lastName.slice(1);
    }

    get age() {
        return parseInt(this._age);
    }

    
    set name(newName){
        return this._firstName = newName;
    }

    set lastName(newName){
        return this._lastName = newName;
    }

   
} //Just a template.


$("button").on("click", function() {
    let firstName = $(".first-name").val();
    let lastName = $(".last-name").val();
    let age = $(".age").val();

    person = new Person(firstName, lastName, age);

    let s = person.greeting();
    console.log(typeof person.age);
    $(".greeting").html(s);
});




// form = new Person('cassia');
// console.log(form.name);
// console.log(form.age);
//form.nameForm = 'tomi';
//console.log(form.greeting());




