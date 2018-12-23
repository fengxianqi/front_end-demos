



/* 题目描述 */
/*************************************************************************************************

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

*************************************************************************************************/

/* 解法思路
1. 暴力破解法，两次循环，遍历第一个元素与剩下所有元素是否有等于目标的，再遍历第二个元素与剩下元素，以此类推
时间复杂度： O(n2)
空间复杂度： O(1)
var twoSum = function(nums, target) {
    var len = nums.length
    for(let i=0;i<len -1;i++) {
        for(let j = i + 1; j< len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

2. 一遍哈希法：只遍历一次，将遍历过的元素通过一个object遍历将位置和值暂存起来，如： obj[value]="位置"。遍历时判断是否有当前对应的值
时间复杂度： O(n)
空间复杂度： O(n)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {}
    for(let i=0;i<nums.length;i++){
        let temp = target - nums[i]
        if (obj[temp] !== undefined) {
            return [obj[temp], i]
        } else {
            obj[nums[i]] = i
        }
    }
    return []
};