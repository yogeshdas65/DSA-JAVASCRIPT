function maximum(data) {
  let obj = {};
  let maxKey = "";
  let maxValue = -Infinity;
  for (let i = 0; i <= data.length - 1; i++) {
    let key = data[i];
    if (!obj[key]) {
      obj[key] = 0;
    }
    obj[key]++;
    // if(maxKey = "" || obj[key]>obj[maxKey]){
    //     maxKey = key
    // }
  }
  console.log(obj);
  for (const key in obj) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      maxKey = key;
    }
  }
  console.log("maxKey", maxKey, "maxValue", maxValue);
}
maximum("hello");
