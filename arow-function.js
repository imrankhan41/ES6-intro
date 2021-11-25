// function declaration
function add(num1,num2){
  
    return   num1 + num2;
}
//function expression 
const add1 = function add1(num1,num2){
    return num1 + num2;
}
//function expression (anonymous)
const add2 = function (num1, num2){
    return num1 + num2;
}
//function arrow
const add3 =(num1,num2)=> num1 + num2;

const output1 = add(10,15);
const output2 = add1(10,15);
const output3 = add2(10,15);
const output4 =add3 (10,15);
console.log(output1,output2,output3,output4);