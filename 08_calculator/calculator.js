const add = function(num1,num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
  return num1 - num2
};

const sum = function(numArray) {
  let sum = 0
  numArray.forEach(num => sum += num)
  return sum
};

const multiply = function(numArray) {
  let res = 1
  numArray.forEach(num => res = num*res)
   return res
};

const power = function(num, power) {
  let ret = 1
  if(num > 0) {
      ret = num
  for(let i = 1;i<power;i++) {
      ret = ret*num
  }
  }
  if(num < 0) {
      ret = num
  for(let i = 0;i<power;i++) {
      ret = ret/num
    }
};

  return ret
}

const factorial = function(num) {
  let ret = 1
  for(let i = 1;i<=num;i++){
    ret = ret * i
  }
  return ret
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
