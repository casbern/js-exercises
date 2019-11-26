// function profile(firstName, lastName, ...items) {
//     return `My name is ${firstName} and my last name is ${lastName} and I have with me this belongins: ${items}`;
// };

// let result = profile("cassia", "bernardo", "soap", "toothbrush", "bag");
// console.log(result);

// const BASKET = ["apple", "grapes", "bananas"];

// for (const x in BASKET){
//     console.log(BASKET[x]);
// }

// let arrIter = BASKET.entries();
// console.log(arrIter);

// console.log(arrIter.next());

/*for (const y in arrIter) {
    console.log('aaa');
    console.log(y);
}*/
//console.log(arrIter);





function createIterator(array){

    for (let x of array){

        let x = array.values();
            
    }

    return x.next();

    }

    console.log(createIterator([1,2,3]));
    


    