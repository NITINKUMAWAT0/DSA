function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const numbers = [10, 20, 30, 45, 50];
const target = 30;
const result = linearSearch(numbers, target);
console.log(result);
