function averageScore(scores) {

  let average = 0

  for(score of scores) {
    average += score
  }

  average = (average / (scores.length)).toFixed(2)

  return average
}

function getWinner(dolphinsPoints, koalasPoints) {
  const dolphinsScore = averageScore(dolphinsPoints)
  const koalasScore = averageScore(koalasPoints)

  if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    return { teamName: "dolphin", score: dolphinsScore}
  } else if (koalasScore > dolphinsScore && koalasScore >= 100) {
    return { teamName: "koala", score: koalasScore}  
  } else if ( koalasScore === dolphinsScore && koalasScore >= 100 && dolphinsScore >= 100) {
    return { teamName: "draw"}
  } 
}

function printWinner(dolphinsPoints, koalasPoints) {

  const result = getWinner(dolphinsPoints, koalasPoints)

  if(result === undefined) {
    console.log("There was no winner!")
  } else if(result.teamName === 'koala') {
    console.log(`${result.teamName} has a score of ${result.score} and won the game`)
  } else if(result.teamName === 'dolphin') {
    console.log(`${result.teamName} has a score of ${result.score} and won the game`)
  } else if(result.teamName === 'draw') {
    console.log("There was a draw!")
  } 

}


printWinner([96,108,89], [88,91,110])
printWinner([97,112,101], [109,95,123])
printWinner([97,112,101], [109,95,106])
