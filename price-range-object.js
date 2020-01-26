const priceRanges = [{
    label: "$",
    tooltip: "Inexpensive",
    minPerPerson: 0,
    maxPerPerson: 10
  },
  {
    label: "$$",
    tooltip: "Moderate",
    minPerPerson: 11,
    maxPerPerson: 20
  },
  {
    label: "$$$",
    tooltip: "Expensive",
    minPerPerson: 21,
    maxPerPerson: 50
  },
];

let restaurants = [{
    name: "Cookingood",
    averagePerPerson: 5
  },
  {
    name: "Art de Cozinhar",
    averagePerPerson: 9
  },
  {
    name: "Amor de Cozinha",
    averagePerPerson: 2
  },
  {
    name: "Delicias da Vovo",
    averagePerPerson: 50
  },
  {
    name: "Steak House",
    averagePerPerson: 15
  },

]

let insideBuget = []

function restaurantsInsideBuget(priceRange, ...restaurants) {

  for (restaurant of restaurants) {

    if (restaurant.averagePerPerson >= priceRange.minPerPerson && 
      restaurant.averagePerPerson <= priceRange.maxPerPerson) {

      insideBuget.push(restaurant)

    } 
  }
  return insideBuget
}

const finalRestaurants = restaurantsInsideBuget(priceRanges[0], ...restaurants)

console.log(finalRestaurants)