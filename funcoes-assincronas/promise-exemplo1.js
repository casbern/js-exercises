const weather = true

const date    = new Promise(function(resolve, reject) {
  if (weather) {
    const dateDetails = {
      name:     'Cubana Restaurant',
      location: '55th Street',
      table:    5
    };
    console.log(dateDetails)

    resolve(dateDetails)
  } else {
    reject(new Error('Bad weather, so no Date'))
  }
});

const orderUber = function(dateDetails) {
  return new Promise(function(resolve, reject) {
    const message = `Get me an Uber to ${dateDetails.location}`
    resolve(message)
  }) 
}

const myDate = function() {

  date
    .then(orderUber)
    .then( function(done) {
      console.log(done)
    })

    .catch(function(error) {
      console.log(error.message)
    })
}

myDate()