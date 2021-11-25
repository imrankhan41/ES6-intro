function add(num1,num2=50){
    //option2
    // num2  = num2 || 0;
    //option1
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15);
console.log(result);

function fullName(first,second= "khan"){
    const name = first + " " + second;
    return name;
}
const fName = fullName ("imran");
console.log(fName);