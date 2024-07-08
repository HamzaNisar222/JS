
function roll(){
const input = Number(document.getElementById("input").value);
const button = document.getElementById("myBtn");
const result = document.getElementById("result");
const images = document.getElementById("images");
let values=[];
let image=[];
    for(let i = 0; i < input ;i++){
        let random = Math.floor(Math.random()*6)+1;
        values.push(random)
        image.push(`<img src="assets/${random}.png">`)
    }
    result.textContent = `Dice:${values.join(", ")}`;
    images.innerHTML = image.join(""); 
}
