//factorial

const factorial = (num) => {
  console.log(num);
  if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
};
let x = 5;
console.log(factorial(x));
