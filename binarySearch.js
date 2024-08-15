function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    return -1;
}
const numbers = [10, 20, 30, 40, 50, 60, 70];
const target = 40;
const result = binarySearch(numbers, target);
console.log(result);