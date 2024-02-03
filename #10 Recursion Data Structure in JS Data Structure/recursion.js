const apple = (x) => {
  console.log("hello", x);
  if (x < 5) {
    apple(x + 1);
  }
 console.log("welcome", x);
};
let x = 1;
apple(x);
