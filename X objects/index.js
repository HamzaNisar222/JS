
// An object in javascript contains key value pairs for a realtime entity and methods related to them 

// OBJECT 1 
const person = {
    firstname : "Hamza",
    lastname : "Nisar",
    age : 25,
    greet : function(){
        console.log(`Hello, my name is ${this.firstname} ${this.lastname}`);
    }
}


person.greet();

// OBJECT 2
const person2 = {
    firstname : "John",
    lastname : "Doe",
    age : 30,
    greet : function(){
        // Assign the arrow function to a variable
        const sayHello = () => {
            console.log(`Hello, my name is ${this.firstname} ${this.lastname}`);
        };
        
        // Call the arrow function
        sayHello();

    }
}

person2.greet();


