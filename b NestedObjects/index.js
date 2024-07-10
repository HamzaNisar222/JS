class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Adress(...address);
    }
}

class Adress{
    constructor (street,house,city ){
        this.street = street;
        this.house = house;
        this.city = city;
    }
}

// let person1 = new Person("Hamza", 22,"Defence Road", "123", "Karachi");
// console.log(person1);


let fruits = [
    {
        name: "Banana",
        color: "Yellow",
        calories:80,
    },
    {
        name: "Apple",
        color: "Red",
        calories:100,
    },
    {
        name: "Mango",
        color: "Green",
        calories:50,
    },
    {
        name: "Pineapple",
        color: "Yellow",
        calories:120,
    },
    {
        name: "Grapes",
        color: "Green",
        calories:70,
    }

]

// console.log(fruits[4]);
// console.log(fruits[0].name);

// let YellowFruits = fruits.forEach(fruit =>{fruit.color === "Yellow";})
// console.log(YellowFruits);
let YellowFruits = fruits.filter(fruit => fruit.color === "Yellow");
console.log(YellowFruits);




//  sort array 

let Fruit = ["banana","apple","orange","mango"]
Fruit.sort()
console.log(Fruit);


let numbers = [1,9,4,7,10,12,11,5,6,8,2,3]
numbers.sort((a,b)=>(b-a));
console.log(numbers);

// Sort Array of objects
let students = [
    {
        name: "Hamza",
        age: 22,
        grade: 85,
        city: "Karachi",
        gpa: 2.77
    },
    {
        name: "Awais",
        age: 18,
        grade: 92,
        city: "Lahore",
        gpa: 3.65
    },
    {
        name: "Khokar",
        age: 25,
        grade: 78,
        city: "Islamabad",
        gpa: 3.45
    },
    {
        name: "Zain",
        age: 20,
        grade: 80,
        city: "Peshawar",
        gpa: 2.90
    },
    {
        name: "Ammar",
        age: 23,
        grade: 95,
        city: "Karachi",
        gpa: 3.90
    }
]
students.sort((a,b)=>(a.age-b.age))
console.log(students);

students.sort((a,b)=>(b.gpa-a.gpa))
console.log(students);

students.sort((a,b)=>(b.grade-a.grade))
console.log(students);

students.sort((a,b)=>(a.city.localeCompare(b.city)))