'use strict';

function sum(a,b){
  var result = a + b;
  console.log(result);
  return [result , 'The sum of 4 and 7 is 11.'];
}

sum(4, 7);
// Here is the test for sum(); uncomment it to run it
testSum(4, 7);
