function getStars(n) {
    let pattern = ''

    for (let i = 0; i < n; i++) {
        pattern += '*'
    }

    return pattern
}


function showStars(rows) {
    for(let row=1; row <= rows; row++) {
        console.log(getStars(row))
    }
}


showStars(5)
