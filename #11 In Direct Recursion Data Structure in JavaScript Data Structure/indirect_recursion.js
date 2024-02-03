//INDIRECT RECURSION

let money = 100;
let apple = 0;

const buyApple = (money) => {
  if (money > 0) {
    console.log(`I am having apple ->${apple} and money ${money}`);
    byMore(money);
  } else {
    console.log(`I dont have money and apple ->${apple}`);
  }
};

const byMore = (money) => {
  apple++;
  buyApple(money - 10);
};

buyApple(money);
