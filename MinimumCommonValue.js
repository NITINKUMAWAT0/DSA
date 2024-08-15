function getCommon(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let minCommon = Infinity;


    for (let num of set1) {
        if (set2.has(num)) {
            minCommon = Math.min(minCommon, num);
        }
    }
    return minCommon === Infinity ? null : minCommon;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7];
console.log(getCommon(array1, array2));