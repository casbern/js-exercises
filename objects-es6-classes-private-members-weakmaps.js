const _firstName = new WeakMap()
const _lastName = new WeakMap()
const _whoAmI = new WeakMap()

class Person {
  constructor(firstName, lastName, sex, age) {
    _firstName.set(this, firstName)
    _lastName.set(this, lastName)
    this.sex = sex
    this.age = age
    
    _whoAmI.set(this, () => {
      console.log('who am i?')
      console.log(`I am ${_firstName.get(this)} ${_lastName.get(this)}, ${this.age}, ${this.sex}`) 
    })
  }

  toString() {
    //console.log(_firstName.get(this)) //* Ana
    console.log('toString')
    _whoAmI.get(this)()
  }
}

const person = new Person("Ana", "Furtado", "F", 54)

/* 
WeakMap is essentially a dictionary where keys are objects and values 
can be anything. The reason why this is called WeakMap is because 
the keys are weak, so if there are no references to these keys, they will
be garbage collected.

Use WeakMap => const _example = new WeakMap()
Set => _example.set(this, example)
Get => _example.get(this)

The 'this' keyword represents the instance of the object.
*/