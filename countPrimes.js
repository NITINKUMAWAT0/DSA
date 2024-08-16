var countPrimes = function(n) {
    if (n <= 2) return 0;

   const primes = new Array(n).fill(true);
   primes[0] = false;
   primes[1] = false;


   for (let i = 2; i * i < n; i++) {
       if (primes[i]) {
           for (let j = i * i; j < n; j += i) {
               primes[j] = false;
           }
       }
   }
   let count = 0;
   for (let i = 2; i < n; i++) {
       if (primes[i]) count++;
   }

   return count;
};

let n1 = 10;
let result1 = countPrimes(n1);
console.log(`Number of primes less than ${n1}: ${result1}`); 

let n2 = 20;
let result2 = countPrimes(n2);
console.log(`Number of primes less than ${n2}: ${result2}`); 