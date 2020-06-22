
(function () {
 console.log("hello browser")
  messageInTheFuture("My message after button clicked after more 2000 miliseconds", 2000)
})()

document.querySelector("button").addEventListener("click", () => {
  console.log("message 1")
  buttonClicked()
})

async function messageInTheFuture(message, miliseconds) {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(message)
      reject(new Error ('message'))
    }, miliseconds)
  })
}

async function buttonClicked() {
  console.log("Hello, this btn was clicked") 
  await messageInTheFuture("My message after button clicked after more 1000 miliseconds", 1000)
}


/* 
IIFE (Immediately Invoked Function Expression) is a JavaScript function that 
runs as soon as it is defined.

(function () {
  statements
})();

The function becomes a function expression which is immediately executed.
The variable within the expression can not be accessed from outside.

Assigning the IIFE to a variable stores the function's return value, not the 
function definition itself.
*/ 