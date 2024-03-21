let data = [5, 9, 13, 17, 45, 67, 89, 96, 110, 210, 347]
let find = 210;
let start = 0;
let end = data.length - 1;
let position = undefined;
while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // console.log(data[mid])
    if (data[mid] === find) {
        position = mid
        console.log(position)
        break;
    } else if (data[mid] < find) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}