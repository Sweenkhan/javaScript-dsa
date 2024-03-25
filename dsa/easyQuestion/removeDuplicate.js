var removeDuplicates = function(nums) {
    let arr = [];
  for(let i = 0; i < nums.length; i++){
      if(!arr.includes(nums[i])) arr.push(nums[i])
    }
    return arr.length
}
let nums = [1,1,1,2,2]
console.log(removeDuplicates(nums))
