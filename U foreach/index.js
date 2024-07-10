let array = [1, 2, 3, 4, 5];
// for each mthod for taking square of each elemnnt of array 
// array.forEach(square);
// array.forEach(display);

// map function for adding squares of the elements from array to a new array squares 
let squares = array.map(square);
function square(element) {
    return Math.pow(element, 2);
}

squares.forEach(display)
// Filter method to filter even and odd from an array 
let even = squares.filter(isEven);
let odd = squares.filter(isOdd);
console.log(even);
console.log(odd);

function display(element) {
    console.log(element);
}

function isEven(element){
 return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
   }


// reduce method to calculate the sum of all the elements in an array

let prices = [10,20,20,40,60,30];
let totalPrice = prices.reduce(add);
let maximum = prices.reduce(max);
let minimum = prices.reduce(min);
console.log(maximum);
console.log(minimum);

function add(accumulator, currentValue) {
    return accumulator + currentValue;
}

console.log(totalPrice);

function max(accumulator,currentValue){
    return  Math.max(accumulator,currentValue);
}

function min(accumulator,currentValue){
    return  Math.min(accumulator,currentValue);
}

