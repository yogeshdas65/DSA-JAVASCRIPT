let items = [20, 12, 53, 3, 56, 78, 0, 5, 89, 34];
function selectionSort(data) {
    let minId;
    for (let i = 0; i < data.length; i++) {
        minId = i;
        for (let j = i + 1; j < data.length; j++) {
            if (data[minId] > data[j]) {
                minId = j;
            }
        }
        let temp = data[minId];
        data[minId] = data[i];
        data[i] = temp;
        console.log(data[minId], data[i])
        console.log(items)
    }
}
selectionSort(items);
console.log(items)