function canJump(nums) {
    let finalPosition = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= finalPosition) {
            finalPosition = i;
        }
    }

    return finalPosition === 0;
}

const nums = [2, 3, 1, 1, 4];
console.log(canJump(nums));

const nums2 = [3, 2, 1, 0, 4];
console.log(canJump(nums2));