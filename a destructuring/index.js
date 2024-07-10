let names = ["Hamza", "Awais", "Khokar", "Zain", "Ammar"];
const latter = [...names].join("-");
console.log(latter);



[a, b, c, d, e] = names;


console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


let colors = ["Red", "Green", "Blue", "White", "Black"];


[colors[0], colors[4]] = [colors[4], colors[0]]


console.log(colors);
for (let name of names) {
    console.log(name);
}

const person1 = {
    name: "Hamza",
    age: 22,
    city: "Karachi",
    job : "Software Engineer",
}










const {name,age,city,job} = person1;
console.log(name);
console.log(age);
console.log(city);
console.log(job);
