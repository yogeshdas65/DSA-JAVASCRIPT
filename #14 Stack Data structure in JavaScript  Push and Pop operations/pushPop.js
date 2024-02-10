let data = [];
let currentSize = data.length;
let max = 5;

//in-build method
// data.push(50)

push = (newVal) => {
    if(currentSize<=5){
        data[currentSize] = newVal;
        currentSize++
    }else{
        console.log(`can't push ${newVal}, maximum limit is ${max + 1} `)
    }
};
push(20);
push(21);
push(22);
push(23);
push(24);
push(25);
push(26);
push(27);
console.log(data)
