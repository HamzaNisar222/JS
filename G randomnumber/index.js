// let max = 100;
// let min = 50;

// let x = Math.floor( Math.random() *( max - min)) + min
// console.log(x)


const myButton = document.getElementById("myBtn");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");

let max = 6;
let min = 1;
myButton.onclick = function(){

let random1 = Math.floor(Math.random() * (max-min)) + min + 1;
let random2 = Math.floor(Math.random() * (max-min)) + min + 1;
let random3 = Math.floor(Math.random() * (max-min)) + min + 1;

myLabel1.textContent = random1;
myLabel2.textContent = random2;
myLabel3.textContent = random3;

}
