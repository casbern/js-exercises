//ES5

//Superclass
function phone(make, model, warranty, color) {
    this.make = make;
    this.model = model;
    this.warranty = warranty || 24;
    this.color = color || 'white';
}

//if you add the method inside the function, it will be added every
//time you create a new object. It is not good for memory optimization.

phone.prototype = {
    extendWarranty: function(x){
        this.warranty += x;
    }
};

//Subclass
function smartPhone(make, model, OS){
   // this.make = make;
   // this.model = model;
    this.OS = OS;
   // phone.call(this, make, model)
}

smartPhone.prototype = new phone('samsung', 'S6');
//smartPhone.prototype = Object.create(phone.prototype); 
smartPhone.prototype.constructor = smartPhone;

var mySmartPhone = new smartPhone('Apple', 'iPhone 7', 'IOS 10');
console.log(mySmartPhone);
console.log(mySmartPhone.extendWarranty);

//ES6 Classes

class phone6 {
    constructor (make, model, warranty, color) {
        this.make = make;
        this.model = model;
        this.warranty = warranty || 24;
        this.color = color || 'white';
}
extendWarranty(x){
    this.warranty += x;
}

//Static methods

static defaultPhone(){
    return new phone6('apple', 'iphone6');
}

}

const myPhone6 = new phone6('Apple', 'Iphone7', 11, 'black');
console.log(myPhone6);

console.log(typeof phone6); //function

//static method not attached to class instances
console.log(myPhone6.defaultPhone);
console.log(phone6.defaultPhone);
console.log(phone6.defaultPhone());

console.log(Object.create);
const obj = {name: 'john'};
console.log(obj.create);

//inheritance - extends - super
class smartPhone6 extends phone6{
    constructor(make, model,OS){
        //ES6
        super(make,model);

        this.OS = OS;

        //ES5
        //phone6.call(this,make, model);
    }
    extendWarranty(x){
        super.extendWarranty(x);
    }

}

const mySmartPhone6 = new smartPhone6('apple', 'iphone', 'ios11');
console.log(mySmartPhone6);
mySmartPhone6.extendWarranty(10);
console.log(mySmartPhone6);

console.log(mySmartPhone6 instanceof smartPhone6);
//true

console.log(mySmartPhone6 instanceof phone6); //true
