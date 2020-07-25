const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async operation 1...')
    resolve(1)
    //reject( new Error ('my error'))
  }, 2000);
})

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 2...')
    resolve(2)
  }, 2000);
})

//Promise.all([p1, p2])
Promise.race([p1,p2])
  .then(result => console.log(result))
  .catch(err => console.log(err))

/* 
Promise.all, you want all the operations complete

Promise.race, when you want to kick off multiple async operations,
but want to do something as soon as one of these async operations
completes. You do not want to wait to all complete.

*/

//* If any of our promises is rejected that final promise
//* that is returned from promise.all is considered rejected.
