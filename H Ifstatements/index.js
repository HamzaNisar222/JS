const text = document.getElementById("myText")
const button = document.getElementById("myBtn")
const para = document.getElementById("myP")


button.onclick = function(){
    let age = Number(text.value);
    if (age>=100){
         para.textContent = "You are a century old"
    }
    else if (age >= 50 ) {
         para.textContent = "you are mid aged"
    }
    else if (age >= 20 && age < 30){
        para.textContent = "you are in you thirties"

    }
    else if (age < 20 && age>0)
     {
        para.textContent = "you are young"

    }
    else{
        para.textContent = "you havent been born yet"

    }


}