//  running sum of one d array?

let arr = [1,2,3,4,5]

function sumOfArray(arr){
  let result = [];
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
    result.push(sum)
  }
  return result
}

console.log(sumOfArray(arr))