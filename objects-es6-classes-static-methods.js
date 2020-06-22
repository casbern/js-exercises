class Product {
  constructor(title, price) {
    this.title = title
    this.price = price
  }
  // Instance Method
  toString() {
    return `${this.constructor.name} ${this.title} with price ${this.price} USD (${Product.priceToReais(this.price)} reais)`
  }

  sell() {
    return `The product with the title ${this.title} has been sold at price ${this.price}`
  }

  // Static Method
  static priceToReais(price) {
    const reaisRate = 5.69
    const finalReaisPrice = price * reaisRate
    return Math.round(finalReaisPrice * 100) / 100
    //return new Product(finalPrice) //* Do I need this????
  }
}

const product = new Product("Node", 200)
console.log(product)

/* Takeways:
- In classical object-oriented languages, we have two types of methods:
Instance methods and Static methods.

Instance methods => Available in an instance of a class which is an object. It is
specific to the object made.

Static methods => Available in the class itself, not in the object instance.
We often use them to create utility functions that are not specific to a given object.
It is not tied to any object.
It won't be available in the objet, but it will be available in the class itself.
To call static methods, we do not have to create an instance of an class.
Ex: Circle.parse(); 
    Math.round();
*/ 





