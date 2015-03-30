var today;
var yesterday;
var today = new Date().getTime();
var yesterday = new Date(2015, 2, 30).getTime();

console.log(today);
console.log(yesterday);

console.log(today >  yesterday);
