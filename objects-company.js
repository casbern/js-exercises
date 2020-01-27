//1. Create a JavaScript object with the properties you'd like, that represents a company.
//Make three objects that each represents another company.

const companies = [{
    name: "Google",
    income: 100,
    numberOfEmployees: 5000,
  },
  {
    name: "WEG",
    income: 50000,
    numberOfEmployees: 800,
  },
  {
    name: "Yahoo",
    income: 1500,
    numberOfEmployees: 1200,
  }
]

// ==== FUNCTION CALLS ====
console.log(showInfo(companies))
console.log(average(companies))
console.log(maxOfIncome(companies))



// ==== EXERCISES ====

// 3. Iterate through the array, and console.log the name of each company
// 4. Iterate through the array and console.log the income of each company
function showInfo(companies) {
  for (company of companies) {
    console.log(`Name: ${company.name}`)
    console.log(`Income: ${company.income}`)
  }
}

//5. Make a function that calculates the average of the income of the three companies.
function average(companies) {
  let output = 0
  for (company of companies) {
    output += company.income
  }
  return output
}

//6. Make a function that calculates the max of the income of the three companies.
function maxOfIncome(companies) {
  let max = 0
  for (company of companies) {
    if (company.income > max) {
      max = company.income
    }
  }
  return `the ${company.name} has the biggest income of ${max}`
}