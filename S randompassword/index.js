function generatepassword(length,upperCase,lowerCase,numbers,symbols){
    let password = '';
    let allowedCharacters = '';
    
   
        const upperLetters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseLetters=upperLetters.toLowerCase();
        const numbersallowed = '0123456789';
        const symbolsAllowed = '!@#$%^&*()_+-={}[]|:;"<>,.?/~`';

        allowedCharacters += upperCase ? upperLetters : "";
        allowedCharacters += lowerCase? lowerCaseLetters : "";
        allowedCharacters += numbers? numbersallowed : "";
        allowedCharacters += symbols? symbolsAllowed : "";

        for(let i=0; i<length; i++){
            password += allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length));
        }

        console.log(password);
        
}

let length = 12;
let upperCase = true;
let lowerCase = true;
let numbers = true;
let symbols = true;

paswword=generatepassword(length,upperCase,lowerCase,numbers,symbols)
