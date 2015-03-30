//Connor Ring
//Date Problem

// Create the dates
var today;
var yesterday;
var today = new Date().getTime();
var yesterday = new Date(2015, 2, 29).getTime();

// Print the dates out, then print out the one that is older
console.log(new Date(today));
console.log(new Date(yesterday));
console.log(today > yesterday);
//Primitive if else code...Can't get it to work right
//if today(value)  > yesterday(value) {
//console.log(new Date(today));
//}
//else console.log(new Date(yesterday));
