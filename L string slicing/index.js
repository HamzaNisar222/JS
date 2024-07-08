let Name = "Hamza Nisar"

// For slicing a string using indexes
let firstname = Name.slice(0,5);
let lastname = Name.slice(6);
console.log(firstname);
console.log(lastname);

// To get first character
let firstChar = Name.slice(0,1);
console.log(firstChar);
let lastChar = Name.slice(-1);
console.log(lastChar);

// slicing with index of
let firstname1 = Name.slice(0,Name.indexOf(" "));
console.log(firstname1);
let secondname = Name.slice(Name.indexOf(" ")+1);
console.log(secondname);

// Exercise
let email = "Hamzanisar279@gmail.com";
let username = email.slice(0 , email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);

console.log(username);
console.log(extension);

