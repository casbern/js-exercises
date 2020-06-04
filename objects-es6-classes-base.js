class Product {
  constructor(price, title, description) {
    this.price = price
    this.title = title
    this.description = description
    this.makeTitle = function() {
      return `This ${this.title} course price is ${this.price}.`
    }
  }
  sell() {
    return `The product with the title ${this.title} has been sold at price ${this.price}`
  }
  toString() {
    return `${this.constructor.name} ${this.title} with price ${this.price} USD`
  }
  priceToReais() {
    const reaisRate = 5.69
    const finalReaisPrice = this.price * reaisRate
    return Math.round(finalReaisPrice * 100) / 100 
  }
}

class Course {
  constructor(price, title, author, description) {
    this.price = price
    this.title = title
    this.author = author
    this.description = description
    this.makeTitle = function() {
      return `This ${this.title} course price is ${this.price}.`
    }
    this.getAuthor = function() {
      return `The name of the author is ${this.author}.`
    }
  }
  toString() {
    return `${this.constructor.name} ${this.title} with price ${this.price} USD`
  }
}

class Tshirt {
  constructor(size, price, title, description) {
    this.size = size
    this.price = price
    this.title = title
    this.description = description
    this.toString = function() {
      return `${this.constructor.name} ${this.title} with price ${this.price} USD`
    }
    this.getSize = function() {
      return `The size is ${this.size}`
    }
  }
}

module.exports = { Product, Course, Tshirt }





/*
class Circle {
  constructor(radius) {
    this.radius = radius
    this.move = function() { //this will be defined inside the object.
      console.log('move')
    }
  }
  draw() { //it will be defined in the prototype.
    console.log('draw)
  }
}

const c = new Circle(1)

Classes are essentially functions, they are constructors functions.
*/