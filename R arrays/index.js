let fruits = ['apple','banana','orange'];
console.log(fruits)//log all the fruits array 
console.log(fruits[1])// log fruits index 1
console.log(fruits.pop()) // pop removes last item of the array
fruits.unshift('Mango')// ushift adds a element to the start 
fruits.push('Kiwi')//push adds an item at the last of the array 
fruits.shift()//shift removes the first item of the array 
console.log(fruits)

let index = fruits.indexOf('Mango');
console.log(index);

for(let i = 0; i<=fruits.length-1;i++){
   console.log(fruits[i])
}

for(let i = fruits.length - 1 ; i>=0 ; i--){
    console.log(fruits[i])
}
fruits.sort().reverse()

for (let fruit of fruits){
    console.log(fruit);
}

let Name ="Slahudin";
    Spread = [...Name].join('-')
    console.log(Spread);