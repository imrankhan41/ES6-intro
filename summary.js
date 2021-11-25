//varaiable let , constant
let priyo = "imran";
priyo ="khan"
// console.log(priyo);
const hubby = "akbar the great"

//default parameter
function getName(first, last = "khan"){

}
//template string

const people = `mu lovely person is ${priyo } his future hubby is ${hubby}`
console.log(people);

//aroow funcion 

const getname2 = (first,last)=> first + " "+ last;
const output = getname2("imran","khan");
console.log(output)

const bigArrow = (x,y,z) =>{
    const firstPart = x+y;
    const secondPart = y*z;
    const thirdPart = x/z;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}

const output2 = bigArrow(10,9,8);
console.log(output2);

const numbers = [2,3,5,4,8,9];
const min = Math.min(...numbers);
console.log(min);

