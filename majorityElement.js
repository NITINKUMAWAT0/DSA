function majorityElement(nums) {
    let candidate = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }
        if (candidate === nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}
const nums = [3, 1, 2, 3];
const result = majorityElement(nums);
console.log(result);
