const number = [1, 2, 3, 4, 5, 6, 7, 8]


let squares = number.map(function (element) {
    return Math.pow(element, 2);
})

let cubes = number.map(
    function (element) {
        return Math.pow(element, 3);
    }
)
let evens = number.filter(
    function (element) {
        return element % 2 === 0;
    }
)

let odds = number.filter(
    function (element) {
        return element % 2!== 0;
    }
)
console.log(`Squares of the nuimbers are:${squares} `);
console.log(`cubes of the numbers are:${cubes}`); 
console.log(`even number are ${evens}`);
console.log(`Odd numbers are: ${odds}`)


squares = number.map((element)=>Math.pow(element,2));
cubes = number.map((element)=>Math.pow(element,3));

evens = number.filter((element) => element % 2 === 0) 
odds = number.filter((element) => element % 2 !== 0) 


console.log(squares)
console.log(cubes)
console.log(evens)
console.log(odds)