/* 题目描述 */
/*************************************************************************************************

给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5

*************************************************************************************************/


/* 解法思路
若两个数组长度加起来为基数，中位数等于两数组排序后的中间数，若为偶数，中位数等于排序后的两个中间数的平均值。
定义一个临时数组arr，用于存放两个数组排序后的前半部分。
用一个for循环遍历到中位数，p和q分别是两个数组的指针，每次遍历时，将两个数组中小的数push到临时数组中，然后指针前进一位，这样就能一直保证临时数组是从小到大拍好序的。
由于只需要中位数，因此for循环只需要遍历到保证拿到中位数就可以了，因此条件保证拿到偶数情况的数据就可以了：Math.floor((len1 + len2) / 2) + 1。

要注意一下当其中数组为空的的临界情况，比如：[]、[1] 或 [1]、 []

还有一种情况是： [1000] 和 [10001]，所以要注意p、q两个指针不能超出数据长度，所以会有这个条件：q > len2 - 1
*/



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length
    let len2 = nums2.length
    let middle = Math.floor((len1 + len2) / 2)
    let p = 0, q = 0,  arr = []
    if (!len1) {
        arr = [...nums2]
    } else if (!len2){
        arr = [...nums1]
    } else {
        for (let i = 0; i < middle + 1; i++) {
          if (q > len2 - 1 || nums1[p] <= nums2[q]) {
            arr.push(nums1[p])
            p++
          } else {
            arr.push(nums2[q])
            q++
          }
        }   
    }

    if ((len1 + len2) % 2 === 1) {
        return arr[middle]
    }else {
        if (middle >= 1) {
            return (arr[middle] + arr[middle-1]) / 2
        } else {
            return arr[middle]
        }
    }
};