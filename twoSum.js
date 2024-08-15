var twoSum = function(nums, target) {
    const numToIndex = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (complement in numToIndex) {
            return [numToIndex[complement], i];
        }
        numToIndex[currentNum] = i;
    }
    return [];
};

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
