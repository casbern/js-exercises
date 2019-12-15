showStars(10)

function showStars(rows) {
  let stars = ''

  for(let i = 1 ; i <= rows; i++) {
    stars = stars.concat('*') 
    stars += '*'
    console.log(stars)
  }
}