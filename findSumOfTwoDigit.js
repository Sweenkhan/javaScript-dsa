// This is my first file for learn javaScript DSA
let input = 11;
let array = [2, 2, 6, 3, 4];


function twoDigit(arr, result){  

     for(let i = 0 ; i < arr.length; i++){
        for(let j = i+1; j <= arr.length-1; j++){
            if(result === arr[i]+arr[j]){
                return [i, j]
            }
        }
     }

     return "sorry no match of this word"
}

console.log(twoDigit(array, input))