// Method chaining : Calling multiple methods in a single line of code 

// 1 No method chaining 
// let username = window.prompt("What is your user name?:");
// console.log(username);
// username = username.trim();
// let firstchar = username.charAt(0);
// firstchar = firstchar.toUpperCase();

// let extrachars = username.slice(1);
// extrachars = extrachars.toLowerCase();
// username = firstchar + extrachars;
// console.log(username);




// 2 Method chaining

let username = window.prompt("wHAT IS YOUR USER NAME?:");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);