(async function main () {

  async function countdown(seconds) {
    let secondsLeft = seconds
    while(secondsLeft >= 0) {
      secondsLeft = minusOneSecond(secondsLeft) 
      await sleep(1000)
    } 
  }
  
  function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function minusOneSecond(secondsLeft) {
    secondsLeft = secondsLeft - 1
    return secondsLeft
  }
  
  
  
  countdown(60)
  
  })()