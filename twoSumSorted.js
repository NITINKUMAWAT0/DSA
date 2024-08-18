function twoSumSorted(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const currentSum = nums[left] + nums[right];

        if (currentSum === target) {
            return [left, right];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [-1, -1];
}

console.log(twoSumSorted([1, 2, 3, 4, 5], 9));
console.log(twoSumSorted([1, 2, 3, 4, 5], 10)); 
