// ========= for loop ==========
// for (let i = 0; i < 5; i++) {
//   console.log('hello', i);
//   if(i % 2 != 0) {
//     console.log(i);
//   }
// }

// ========= while loop ==========
// Without the i++, this loop will last forever.
// let i = 0;
// while (i < 5) {
//   if(i % 2 != 0) {
//     console.log(i);
//   }
//   i++;
// }

// ========= do while loop ==========
// This will be executed at least one time.
// let i = 9;
// do {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
//   i++;
// } while (i < 5);

// ========= for..in loop ==========
// Iterate over properties of an object or elements in an array.
// The index will hold the index of the array (0,1,2...)
// const person = {
//   name: 'cassia',
//   age: 30
// }

// for (let key in person) {
//   console.log(key, person[key]);
// }

// //Dot notation = person.name
// // Bracket notation = person['name']

// const colors = ['blue', 'red', 'pink'];

// for (let index in colors) {
//   console.log(index, colors[index]);
// }


// ========= for..of loop ==========
// Ideal way for iterate through arrays.
// It holds not the index, but the actual element of each iteration.

// const colors = ['blue', 'red', 'pink'];

// for (let color of colors) {
//   console.log(color);
// }

// ========= break and continue ==========
// break jumps out of the loop.
// continue jumps to the next iteration. Not used.