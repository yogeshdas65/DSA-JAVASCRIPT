let arr = [12, 11, 13, 6, 65, 96, 1, 9, 987, 321, 4, 2, 5, 8, 87]

function insertionSort(data) {
    let i, current, j;
    for (i = 1; i < data.length; i++) {
        current = data[i];
        j = i - 1
        while (j >= 0 && data[j] > current) {
            data[j + 1] = data[j]
            j = j - 1;
        }
        data[j + 1] = current
    }
    cnsole.warn(temp);
}

insertionSort(arr);
console.warn(arr);