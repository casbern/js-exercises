/* 
It is an object that holds the eventual result of an 
asynchronous operation.
When it completes, it can either result in a value or error.
Promises you that will give the result of an asyncronous operation.
This object can be in one of the three states: 
Initially when we create a promise object, it will be in the PENDING state.
It will kick off some asyncronous operation and when the results are reasy,
the promise can either be FULLFIELD / RESOLVED or REJECT.

RESOLVE and REJECT are functions and we use it to pass the value back to 
the consumer of this promise (who is waiting for this promise).
We do this through resolve() or reject()
In the reject we pass an error message => reject(new Error('message'))
*/

const p = new Promise( function(resolve, reject) {
  //Kick off some async work.
  setTimeout(() => {
    //resolve(1) //* pending => resolved, fulfilled
    reject(new Error('this is my message error')) //* pending => rejected
  }, 2000);

  //When it completes we will have a value 
})

//* Consuming the promise
/*
We now can get the promise object 'p' and we have two methods => 
.catch() and .then()
The first one is to catch any error and the second one is for getting
the result of out asynchronous operation.
*/

//! result is the result of resolve!
p
  .then( function(result) {
    console.log('result', result)
  })
  .catch( function(erro) {
    console.log('Error', erro.message)
  })