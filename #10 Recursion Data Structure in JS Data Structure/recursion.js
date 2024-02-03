const apple = (x) => {
  if (x == 5) {
    return;
  }
  apple(x + 1);
  console.log("hello", x);
};
let x = 1;
apple(x);


