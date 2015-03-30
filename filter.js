
load('array.js');
var student = JSON.parse(ARRAY);
function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }  			  
  return passed;
}

print(JSON.stringify(filter(student, function(student) {
  return student.Height > 70 && student.Height < 75;
})));
