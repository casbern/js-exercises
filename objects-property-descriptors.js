//Properties have attributes attached to them and these attributes prevent
//a property of being enumerated (shown in a iteration), for example.

const course = {
  id: 1,
  price: 20,
  name: "JS for beginners",
  description: "The easiest way to learn JS",
  author: "Marcos Herrera"
}

//Property descriptor
let objectBase = Object.getPrototypeOf(course)
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
console.log(descriptor)

//* configurable => it means we can delete this property if we want to.
//* enumerable => when we iterate over an object, it'll define if we can see it or not.
//* writable => we can override this method, change its implementation. 

//Set attributes to your own properties
Object.defineProperty(course, 'id', {
  writable: false, //read only
  configurable: false,
  enumerable: false
})
Object.defineProperty(course, 'name', {
  writable: false,
  configurable: false

})
Object.defineProperty(course, 'price', {
  writable: false
})

//TEST AREA//
for(let key in course) {
  console.log(key)
} 
//price, name, description, auhtor. Id does not appear, because enumerable is false.

//* Changing Value
course.name = "Node" //It won't change because writable is set to false.

//* Delete Property
delete course.id //It will be false and this property won't be deleted.


