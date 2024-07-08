const max = 100;
const min = 50;
let attempts = 0;
const Random = Math.floor(Math.random() * (max - min) + 1) + min;
let running = true;
let guess;

while (running) {

    guess = window.prompt(`Guess a number between ${min} and ${max}:`);
    guess = Number(guess);
    if(isNaN(guess) || guess === 0 ){
        window.alert(`Enter a valid number between ${min} and ${max}:`)
    }else if(guess < min || guess > max){
        window.alert(`Enter a valid number between ${min} and ${max}:`)
    }else{
        attempts++
        if(guess < Random){
            window.alert(`Too low! Try Again guess between ${min} and ${max}:`)
    
        }else if(guess>Random){
            window.alert(`Too High! Try Again guess between ${min} and ${max}:`)
    
        }else if(guess === Random){
            window.alert(`You have successfully guessed the nuber in ${attempts} attempts`)
            running = false;
    
        }
    }

}