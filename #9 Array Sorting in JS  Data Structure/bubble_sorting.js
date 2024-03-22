//Bubble Sorting -> (Size * Size ) itration required
//[40,52,67,19] --> 4*4 loops -> 16 itration required

const data = [
  58, 52, 67, 19, 74, 96, 74, 21, 2, 74, 32, 1, 42, 51, 7, 566, 598, 446,
];

let count = 0;

for (let i = 0; i < data.length; i++) {
  count++
  for (let j = 0; j < data.length; j++) {
    if (data[j] > data[j + 1]) {
      temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
      console.log("Swaping ->", data[j], data[j + 1], "Sorting", data);
    }
  }
}



//   function printNum(num){
//     if(num==5){
//         return;
//     }
//     printNum(num+1);
//     console.log(num)
//   }

//   printNum(0);


