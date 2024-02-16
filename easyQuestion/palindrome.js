// find a string or number is palindrom or not.

let str = 12321;

function palindrom(str){
    return str < 0 ? false : String(str) == String(str).split("").reverse().join("")
}

console.log(palindrom(str))