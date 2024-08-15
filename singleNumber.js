function singleNumber(nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        x ^= nums[i];
    }
    return x;
}

const nums = [2, 2, 1];
const result = singleNumber(nums);
console.log(result);
