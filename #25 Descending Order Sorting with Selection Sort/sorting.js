let items = [20, 12, 53, 3, 56, 78, 0, 5, 89, 34];

function selectionDecSort(data) {
    let maxId;
    for (let i = data.length - 1; i >= 0; i--) {
        maxId = i;
        for (let j = i - 1; j >= 0; j--) {
            if (data[j] < data[maxId]) {
                maxId = j;
            }
        }
        let temp = data[i];
        data[i] = data[maxId]
        data[maxId] = temp;
    }
}
selectionDecSort(items)
console.log(items)