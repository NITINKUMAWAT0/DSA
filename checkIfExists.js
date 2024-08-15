var checkIfExist = function(arr) {
    let seen = new Set();


    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i] * 2) || (arr[i] % 2 === 0 && seen.has(arr[i] / 2))) {
            return true;
        }
        seen.add(arr[i]);
    }
    return false;
};

const arr1 = [10, 2, 5, 3];
const arr2 = [3, 1, 7, 11];

console.log(checkIfExist(arr1));
console.log(checkIfExist(arr2)); 
