const pi = 3.14;//WE DONT WANT THE VALUE OF PI TO BE CHANGED SO WE WILL MAKE IT A CONSTANT
let radius;
let circumference;
// declare a variable


// // 1 method to accept input form user
// username=window.prompt("What is the radius of the circle?:");
// console.log(username)


// 2 method

document.getElementById("mySubmit").onclick = function(){
        radius = document.getElementById("myText").value;
        radius = Number(radius);
        circumference = 2 * pi * radius;
        document.getElementById("myP").textContent = `The circumference of the circle is ${circumference}`
} 