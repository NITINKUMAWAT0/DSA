
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
  const m = num1.length;
  const n = num2.length;
  const result = new Array(m + n).fill(0);
 
  for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
          const mul = parseInt(num1[i]) * parseInt(num2[j]);
          const p1 = i + j;
          const p2 = i + j + 1;
          const sum = mul + result[p2];
         
          result[p1] += Math.floor(sum / 10);
          result[p2] = sum % 10;
      }
  }
 
  let res = '';
  for (let num of result) {
      if (!(res.length === 0 && num === 0)) {
          res += num;
      }
  }
  return res.length === 0 ? '0' : res;
};
let num1 = '123';
let num2 = '456';
let result1 = multiply(num1, num2);
console.log(`Product of ${num1} and ${num2}: ${result1}`); 

let num3 = '999';
let num4 = '999';
let result2 = multiply(num3, num4);
console.log(`Product of ${num3} and ${num4}: ${result2}`); 