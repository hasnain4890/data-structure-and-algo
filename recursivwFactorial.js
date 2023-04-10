function Factorial(counter) {
  console.log(counter);
  if (counter == 0) {
    return 1;
  }
  return counter * Factorial(counter - 1);
}

counter = 5;
res = Factorial(counter);
console.log(res);

// const factorialOf = (integer) => {
//   let factorial = 1;

//   for (let i = 1; i <= integer; i++) {
//     factorial *= i;
//   }

//   return factorial;
// };
// console.log(factorialOf(2)); // 2
// console.log(factorialOf(5)); // 120
// console.log(factorialOf(4));

// function fact(num) {
//   let res = 1;
//   for (let i = 1; i <= num; i++) {
//     res *= i;
//   }
//   return res;
// }
// rs = fact(5);
// console.log(rs);
