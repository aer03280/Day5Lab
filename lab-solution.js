'use strict';

function sum(a,b){
  var result = a + b;
  console.log(result , 'The sum of ' + a + ' and ' + b + ' is ' + result + '.');
  return [result , 'The sum of ' + a + ' and ' + b + ' is ' + result + '.'];
}
sum(4, 7);

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);
////////////////////////////////////////////////////////////
function multiply(a,b){ //eslint-disable-line
  var productm = a * b;
  console.log(productm , 'The product of ' + a + ' and ' + b + ' is ' + productm + '.');
  return [productm , 'The product of ' + a + ' and ' + b + ' is ' + productm + '.'];
}
multiply(5 , 9);

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);
////////////////////////////////////////////////////////////
