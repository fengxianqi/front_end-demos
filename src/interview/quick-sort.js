// 手写快排



// http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  // 找基准
  let pivotIndex = Math.floor(arr.length / 2)

  // 存放左右子集
  let left = [];
  let right = [];

  for (let i = 0;i< arr.length;i++) {
    // 跳过基准
    if (i === pivotIndex) {
      continue;
    }
    // 小的放左边，大的放右边
    if (arr[i]<arr[pivotIndex]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([arr[pivotIndex]],quickSort(right))
}





// https://segmentfault.com/a/1190000017814119
/**
 * 
 * @param {*} arr 数组
 * @param {*} p 起始下标
 * @param {*} r 结束下标+1
 */
function quickSort2(arr, p=0, r) {
  r = r || arr.length
  if (p < r - 1) {
    const q = divide(arr,p,r)
    quickSort2(arr,p,q)
    quickSort2(arr,q+1,r)
  }
  return arr
}

function divide(arr,p,r) {
  // 基准点,数组末尾一个
  const pivot = arr[r-1]
  // i初始化是-1，也就是起始下标的前一个
  let i = p - 1

  for (let j = p;j < r-1;j++) {
    // 如果比基准点小就i++，然后交换元素位置
    if (arr[j] <= pivot) {
      i++
      // 交换位置
      [arr[i], arr[j]] = [arr[j], arr[i]]
      // swap(arr, i, j)
    }
  }

  //最后将基准点插入到中间，即i+1的位置
  // swap(arr, i+1, r-1)
  [arr[r-1], arr[i+1]] = [arr[i+1], arr[r-1]]
  // 返回最终指针i的位置
  return i+1
}

function swap(A, i, j) {
  const t = A[i];
  A[i] = A[j];
  A[j] = t;
}

let arr = [1,4,8,4,5,9,7,2,3]
// console.log(quickSort(arr))
console.log('arr2:', quickSort2(arr))