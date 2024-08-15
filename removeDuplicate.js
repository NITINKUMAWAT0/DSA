function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let i = 0; 
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

let nums = [1, 1, 2, 2, 3, 4, 4, 5];
let length = removeDuplicates(nums);

console.log(`The length of the array with unique elements is: ${length}`);
console.log(`Array after removing duplicates: ${nums.slice(0, length)}`);
