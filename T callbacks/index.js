// call backs are using a function as an argument in another function 

function add(callback,x,y){
    let result = x+y;
    callback(result);
}

function displaypage(result){
    document.getElementById("myH1").textContent = result;
}

add(displaypage,4,5);