
load('array.js');
var tanks = JSON.parse(ARRAY);
function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }  			  
  return passed;
}

print(JSON.stringify(filter(Height, function(array) {
  return array.height > 180 && array.Weight < 210;
})));
