let logedin =  false;
let username;
let password;

// while(!logedin){
//     username = window.prompt("Enter your Username?:");
//     password = window.prompt("Enter your password?:");
//     if (username == "Hamza Nisar" && password === "Hamza1234"){
//         logedin = true;
//         console.log("You Loged in Successfully");
//     }else{
//         console.log("Provided credentials are not valid..Try again!");

//     }
// }

do{
    username = window.prompt("Enter your Username?:");
    password = window.prompt("Enter your password?:");
    if (username == "Hamza Nisar" && password === "Hamza1234"){
        logedin = true;
        console.log("You Loged in Successfully");
    }else{
        console.log("Provided credentials are not valid..Try again!");

    }
}while(!logedin)