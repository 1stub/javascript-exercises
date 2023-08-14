const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, current) => sum * current, 1); //one here due to *0
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
  let newArr = [];
	for(let i = 1; i <= num; i++){
    newArr[i] = i;
  }
  return newArr.reduce((sum,current) => sum * current, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
