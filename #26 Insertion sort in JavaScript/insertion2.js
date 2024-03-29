let arr = [12, 11, 13, 6, 65, 96, 1, 9, 987, 321, 4, 2, 5, 8, 87]

//Condition:- Insertion Sort and also shift 65 & 96 to last to the array 
function insertionSort(data) {
    let temp = []
    let i, current, j;
    for (i = 1; i < data.length; i++) {
        current = data[i];
        if (data[i] == 65 || data[i] == 96) {
            console.log("Last:-", data[i], i)
            temp.push(data[i])
            for (d = i; d < data.length - 1; d++) {
                data[d] = data[d + 1];
            }
            data.length--
            i--;
            continue;
        }
        j = i - 1
        while (j >= 0 && data[j] > current) {
            data[j + 1] = data[j]
            j = j - 1;
        }
        data[j + 1] = current
    }
    for(let t = 0; t < temp.length ; t++){
        data[data.length] = temp[t]
    }
    console.warn(temp);
}

insertionSort(arr);
console.warn(arr);