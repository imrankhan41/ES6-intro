let balance = 1230;
balance =342;
// console.log(balance);
const userName = " imran";
const we = "ami " + userName;
// userName = "khan"
// console.log(we);

const numbers = [45,25,48,74];
// numbers = [48,98,88] not allowed reassign;

numbers.push(555);
numbers[1]=0;
let sum = 0;
for(let i =0; i<numbers; i++){
    const number = numbers[i];\
    sum = sum + number;
    console.log(sum);
}
// console.log(numbers)
const bottle = {
    color: "yellow", contain : "water", price:100;
}
bottle.price = 50;
