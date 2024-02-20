//  let name = "ujwal"
//  let last = "sharma"
//  let names = ["hi", "how", "are", "you"]
 //  let update = names.slice(0, 3)  0 < 3 
 //  let slie =  names.splice(0, 3, "bro", "yr")   0 <= 3
 
 //  let update =  numbers.flat(Infinity)


 let numbers = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];

  let sum = function(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
          if(Array.isArray(arr[i])){
               result += sum(arr[i])
          } else {
            result += arr[i]
          }
    }
    return result
}

 
 console.log(sum(numbers))
