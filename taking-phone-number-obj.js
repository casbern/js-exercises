function takingPhoneNumber(input) {
  
    let entriesLength = input.splice(0, 1)
    let queries = input.splice(entriesLength)
    //console.log('query', queries)

    for (var i = 0; i < entriesLength; i++) {
      input[i] = input[i].split(" "); // array of arrays
    }
    //console.log('input', input)

    let phoneBookMap = new Map(input);
    console.log("phoneBookmap",phoneBookMap)
    
    for (let i = 0; i < queries.length; i++) {
      if (phoneBookMap.has(queries[i])) {
        console.log(`${queries[i]} = ${phoneBookMap.get(queries[i])}`);
      } else {
        console.log("Not found");
      }
    }
}


  const result = takingPhoneNumber([ '3','sam 99912222','tom 11122222','harry 12299933','sam','edward', 'harry' ])
  console.log(result)