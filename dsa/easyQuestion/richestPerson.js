// Richest Customer Wealth
let list = [[100, 200, 400],[4000, 300, 20],[200, 449, 789]]


function richestPerson(arr){
    let richest = 0;

    for(let i =0; i<arr.length; i++){ 
         let result = arr[i].reduce((acc, curr) => acc + curr, 0)
           if(richest < result) richest = result;
    }
    return richest
}

console.log(richestPerson(list))