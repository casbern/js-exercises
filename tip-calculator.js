let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]


function getTips(bills) {
  let tips = []

  for(bill of bills) {
    let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2

    tips.push(tip)
  }

  return tips
}

function getTotal(bills) {
  const tips = getTips(bills)

  let totals = []

  for (let i = 0; i < bills.length; i++) {
    
    let total = bills[i] + tips[i]
    
    totals.push(total)
    
  }

  return totals
}

const result = getTotal(bills)
console.log(result)








// function tipCalculator(bill) {
//   const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2

//   return tip
// }

// function totalToPayment(bill) {
//   const tip = tipCalculator(bill)

//   console.log(`
//   The bill was ${bill}, the tip was ${tip} 
//   and the total value is ${bill + tip} for this restaurant.
//   `)
// }

// totalToPayment(275)
// totalToPayment(40)
// totalToPayment(430)

