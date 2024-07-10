let timeoutId;
function startTimeout(){
    console.log('Timeout started');
    timeoutId=setTimeout(function(){
        console.log('Hello from setTimeout');
    }, 5000);
}

function clearTime(){
    clearTimeout(timeoutId);
    console.log('Timeout cleared');
}