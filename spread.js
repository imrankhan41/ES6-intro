const numbers = [1,2,3,4,5,6,7,8,9];
// console.log(numbers);
// console.log(...numbers);
const max = Math.max(1,2,3,4,5,6,7,8,9);
const maxInArray = Math.max(...numbers)
// console.log(max);
// console.log(maxInArray);

const numbers2 = [20,...numbers,21];
numbers.push(15);
console.log(numbers2);