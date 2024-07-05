const Counter = document.getElementById("count");
const increase = document.getElementById("increaseBtn");
const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");

let count = 0;
increase.onclick = function(){
    count++;
    Counter.textContent = count;
}

decrease.onclick = function (){
    count--
    Counter.textContent=count;
}

reset.onclick = function(){
    count=0;
    Counter.textContent=count;

}