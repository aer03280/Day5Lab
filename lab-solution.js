// 'use strict';
//
// function sum(a,b){
//   var result = a + b;
//   console.log(result , 'The sum of ' + a + ' and ' + b + ' is ' + result + '.');
//   return [result , 'The sum of ' + a + ' and ' + b + ' is ' + result + '.'];
// }
// sum(4, 7);
//
// // Here is the test for sum(); uncomment it to run it
// testSum(4, 7);
// ////////////////////////////////////////////////////////////
// function multiply(a,b){ //eslint-disable-line
//   var productm = a * b;
//   console.log(productm , 'The product of ' + a + ' and ' + b + ' is ' + productm + '.');
//   return [productm , 'The product of ' + a + ' and ' + b + ' is ' + productm + '.'];
// }
// multiply(5 , 9);
//
// // Here is the test for multiply(); uncomment it to run it
// testMultiply(5,9);
// ////////////////////////////////////////////////////////////
function sum(a,b){
  var result = a + b;
  return result;
}
sum(4, 7);

function multiply(a,b){ //eslint-disable-line
  var productm = a * b;
  return productm;
}
multiply(5 , 9);

function sumAndMultiply(a,b,c){//eslint-disable-line
  var sumOne = sum (a , b);
  var sumTwo = sum (sumOne , c);
  var proOne = multiply (a,b);
  var proTwo = multiply (proOne, c);

  return [sumTwo , proTwo , a + ' and ' + b + ' and ' + c + ' sum to ' + sumTwo + '.' , 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + proTwo + '.'];
}

sumAndMultiply(4 ,7, 5);

testSumAndMultiply(4,7,5);
