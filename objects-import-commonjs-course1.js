function Course(title, description, price, keywords) {
  this.title = title
  this.description = description
  this.price = price
  this.keywords =keywords
}

exports.Course = Course //exports it as an object. The constructor goes inside an object.