function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
counter1 = createCounter() 
console.log(counter1()); // 1
console.log(counter1()); // 1
console.log(counter1()); // 1
console.log(counter1()); // 1



function createGame(){
    let score = 0;
    function increaseScore(points){
        score+=points;
        console.log(`You scored ${score}`);
    }

function decreaseScore(points){
    score-=points;
    console.log(`You lost ${score}`);
}

function getScore(){
    return score;
}

    return {
        increaseScore,
        decreaseScore,
        getScore
    }
}

let game = createGame();
game.increaseScore(5); // You scored 1
game.increaseScore(5); // You scored 2
game.decreaseScore(2); // You lost 1
console.log(game.getScore()); // 0
