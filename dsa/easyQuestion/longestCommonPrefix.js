var longestCommonPrefix = function(strs) {
    
    let common = []
    for(let i = 1; i<strs.length; i++){

        let first = strs[0].split("")
         for(let j = 0; j < strs[i].length; j++){
            if(first.includes(strs[i][j])){
                common.push(strs[i][j])
            }
         }
    }
return common
};


let arr = ["red", "ring", "rice"]
console.log(longestCommonPrefix(arr))