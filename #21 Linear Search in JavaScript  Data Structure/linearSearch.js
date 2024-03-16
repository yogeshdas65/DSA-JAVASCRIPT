let data = [2, 53, 42, 11, 12, 10];
let find = 12;
let pos = undefined;

for (let i = 0; i < data.length; i++) {
  if (data[i] == find) {
    pos = i;
    break;
  }
}
console.log("index->" , pos);
