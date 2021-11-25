const priya = `asf akbar`;
const meye = 'meye tumi ki dukkho chino';
const kabita = "tumi swapnocharini hoye";
const multiline = 'this is my first line \n' + 
'this is my second line \n'+
'this is my third line \n'+
'this is my fourth line';
const multilineNew = `
this is my first line
this is my second line
this is my third line
this is my fourth line
// `
// console.log(multilineNew)

const count = 5;
const old1 = '<h3 class= "friend-name">Friend-5</h3>'
const old2  ='<h3 class= "friend-name">Friend-' + count + '</h3>';
const new1 = `<h3 class= "friend-name">Friend-${count}</h3>`;
// console.log(old1)
// console.log(old2);
// console.log(new1);

const friends = ["mamun", "hasan","babul"]
// const new2 = `<h3 class="friend-name">Friend- ${friends.length}</h3>`;
const new2 = `<h3 class="friend-name">Friend- ${friends[0]}</h3>`;
// console.log(new2);

const first = "mamun";
const second = "khan";
const oldName = first + " "+ second;
const newName = `This person is ${first} ${second}. he has ${friends.length+10*500}`
console.log(newName);