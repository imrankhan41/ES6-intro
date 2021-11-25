const add = (num1,num2) => num1+num2;
const sum = add(12,12);
console.log(sum);
const multiply = (num1,num2,num3)=> num1*num2*num3;
const result = multiply(5,5,5);
console.log(result)

const fiveTimes = (num) => num*5;
const output = fiveTimes(5);
console.log(output)
const tenTimes = num => num*10;
const output1 = tenTimes(10);
console.log(output1)

const getname = () => "brandon sam";
const name = getname();
console.log(name);

const doMath = (x,y) =>{
    const sum = x+y;
    const sub = x-y;
    const multiply = sum * sub;
    const divide = multiply+5;
    return  divide;
}
const total = doMath(10,5);
console.log(total);
