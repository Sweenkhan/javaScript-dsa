// var longestCommonPrefix = function (strs) {
//   let common = [];
//   let first = strs[0].split("");

//   for (let i = 1; i < strs.length; i++) {
//     if (i > 1) first = [...common];
//      let curr = strs[i].split("")

//     for (let j = 0; j < strs[i].length; j++) {
//        if(first.includes(strs[i][j])) {
//         //    console.log((common[common.length-1] && strs[i][j] === common[common.length-1]))
//            if(!common.includes(strs[i][j]))  common.push(strs[i][j]); 
           
//         for (let k = 0; k < common.length; k++) {
//             if(!curr.includes(common[k])) common.pop();
//         }

//       }
//     }
//   }
//   return common.join("");
// };


function longestCommonPrefix(arr){

  let commonCheck = arr[0].split("")

 let result =  arr.filter((ele) => ele.split("") === ele.split(""))
return result
}

let arr = ["cir","car"];
console.log(longestCommonPrefix(arr));
