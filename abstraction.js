function Circle(radius) {
  this.radius = radius;
  let defaultLocation = {x: 0, y: 1};
  let computerOptimumLocation = function(factor) {
    console.log(factor)
  };
  this.draw = function() {
    let x, y //just exist inside this scope
    computerOptimumLocation(0.1) //limit to the parent scope, this is called closure
  }

  //How to display these variables read-only?
  Object.defineProperty(this, 'defaultLocation', {
    get: function(){
      return defaultLocation
    },

    set: function(value) {
      if(!value.x || !value.y) {
        throw new Error("Invalid values!")
      }
      defaultLocation = value
    }
  })
}

const objectCreated = new Circle(1) //new object created from the constructor function template above
//console.log(objectCreated)
//console.log(objectCreated.draw())

//console.log(objectCreated.defaultLocation) //reading the value of this variable
console.log(objectCreated.defaultLocation = {x:3,y:5}) //it throws an error if the values passed are not correted
