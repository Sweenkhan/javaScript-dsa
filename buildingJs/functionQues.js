// Q1 - What are First Class Function?

function square(num){
    return num * num
}

function displayResult(fn, num){
    console.log("Your result is", fn(num))
}

console.log(displayResult(square, 5))