let username; // declare a variable


// 1 method to accept input form user
username=window.prompt("What is your Username?:");
console.log(username)


// 2 method

document.getElementById("mySubmit").onclick = function(){
    username=document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello there ${username}`
} 