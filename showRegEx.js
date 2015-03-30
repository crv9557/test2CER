//Connor Ring
//Problem 2
//Practicum

// Create the regular expression that accepts only digits
var phrase1 = "123 abc";
var exp = /\b(\d+)\b/g;
var found;
while (found = exp.exec(phrase1))
    console.log("Number: ", found[1]);

// Create a regular expression that will not accept digits
var phrase2 = "123 abc";
var reg = /\b(\D+)\b/g;
var lost;
while (lost = reg.exec(phrase2))
	console.log("Word:",lost[1]);


