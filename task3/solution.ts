// 将两个有序的数组合并成一个
// 可以类似于合并排序的中合并的部分
export {}
type numInput = number[]
let deepClone = require('../utils')

const num1: numInput = [2, 4, 6, 0, 0, 0]
const num2: numInput = [1, 5, 7]


const insertNum = (index:number, arr:numInput, replace:number):numInput => {
  let temp:numInput = deepClone(arr)
  temp[index] = replace
  for (let i = index; i < arr.length - 1; i++) {
    temp[i+1] = arr[i]
  }
  return temp
}

const merge_sort = (num1: numInput, num2: numInput) => {
  let i = 0
  let j = 0
  while (true){
    if (num1[i] === 0){
      // num1结束了
      num1[i] = num2[j]
      i++
      j++
    }else if (num1[i] > num2[j]){
      // 放在i的位置上，num1中的数集体向后移动
      num1 = insertNum(i, num1, num2[j])
      i++
      j++
    }else {
      i++
    }
    if (j === num2.length){
      return num1
    }
  }
}

console.log(merge_sort(num1, num2))
