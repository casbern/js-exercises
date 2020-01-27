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


console.log(showInfo(companies))
console.log(average(companies))
console.log(maxOfIncome(companies))



function showInfo(companies) {
  for (company of companies) {
    console.log(`Name: ${company.name}`)
    console.log(`Income: ${company.income}`)
  }
}

function average(companies) {
  let output = 0
  for (company of companies) {
    output += company.income
  }
  return output
}

function maxOfIncome(companies) {
  let max = 0
  for (company of companies) {
    if (company.income > max) {
      max = company.income
    }
  }
  return `the ${company.name} has the biggest income of ${max}`
}