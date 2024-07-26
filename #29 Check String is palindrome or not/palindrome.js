function palidrome(data) {
  let start = 0;
  let end = data.length - 1;
  while (start < end) {
    if (data[start] !== data[end]) {
      return false;
    }
    start++;
    end--
  }
  return true;
}
let data = "umalayalamu";
console.log(palidrome(data));
