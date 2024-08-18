function nextGreaterElement(arr) {
    let n = arr.length;
    let result = new Array(n).fill(-1);
    let stack = [];


    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            result[i] = arr[stack[stack.length - 1]];
        }
        stack.push(i);
    }
    return result;
}
let arr = [4, 5, 2, 10, 8];
let nge = nextGreaterElement(arr);
console.log(nge);
