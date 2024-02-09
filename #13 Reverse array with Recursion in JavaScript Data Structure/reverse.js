let data = [10, 7, 6, 1,2];

// in-build method
// data.reverse()
// console.log(data.reverse());

customReverse = (data, start, end) => {
  console.log(data);
  if (start < end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    customReverse(data, start + 1, end - 1);
  }
};

 customReverse(data, 0, data.length - 1);
