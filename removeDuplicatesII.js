function removeDuplicates(nums) {
    if (nums.length <= 2) return nums.length;
    let i = 2;
    for (let j = 2; j < nums.length; j++) {
        if (nums[j] !== nums[i - 2]) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}

let nums = [1, 1, 1, 2, 2, 3];
let length = removeDuplicates(nums);

console.log(`The length of the array with allowed duplicates is: ${length}`);
console.log(`Array after removing excess duplicates: ${nums.slice(0, length)}`);
