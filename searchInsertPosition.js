function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}
let nums = [1, 3, 5, 6];
let target = 5;
console.log(`Insert position for target ${target}: ${searchInsert(nums, target)}`);

target = 2;
console.log(`Insert position for target ${target}: ${searchInsert(nums, target)}`);

