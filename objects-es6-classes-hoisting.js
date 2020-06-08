//Class declaration
const newExample = new Example()

class Example {
  constructor() {
    this.example = "example"
  }
}

//Class expression
const newExample1 = new Example1()

const Example1 = class {
  constructor() {
    this.example = "example"
  }
}

//Neither class declarations not class expressions are hoisted in js.