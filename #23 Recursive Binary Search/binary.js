let data = [10, 15, 18, 34, 67, 78, 89, 91, 110, 121, 137, 157, 161, 170]
let start = 0;
let end = data.length - 1;
let find = 10;
let position = undefined;
let count = 0;

function recursiveBinary(data, start, end) {
    count++;
    let mid = Math.floor((start + end) / 2)
    console.log("start:-", start, "middle:-", mid, "end:-", end)
    if (mid < 0 || mid >= data.length) {
        return false;
    }
    if (start > end) {
        return false
    }
    if (data[mid] === find) {
        position = mid;
        return true
    } else if (data[mid] < find) {
        recursiveBinary(data, mid + 1, end)
    } else {
        recursiveBinary(data, start, mid - 1)
    }
}
recursiveBinary(data, start, end)

console.log("functioncalled", count, "times", " & Index-position:-", position)