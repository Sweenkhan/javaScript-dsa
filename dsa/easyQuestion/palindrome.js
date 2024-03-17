// find a string or number is palindrom or not.

let str = 12321;

function palindrom(str){
    return str < 0 ? false : String(str) == String(str).split("").reverse().join("")
}

console.log(palindrom(str))

var x = 20;
let arr = [2, 4, 6, 8]

function justfor(arr){
    var x = 10
     let result = []
    for(let i = 0; i < arr.length; i++){
         result.push(arr[i] + x)
    }
    return result;
}
console.log(justfor(arr))

