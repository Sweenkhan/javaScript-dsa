// global variable
let a = 5;
const b = 10;
var c = 20;


// lexical scope
if(true){
    let a = 10
    console.log(a)
}


// console.log(add(5))              function decleration can call before declare.
// function decleration
function add(num){
   return num + 1
}


// function expression             function expression you can only call after written.
let addTwo = function(num){
    return num + 2
}

// console.log(addTwo(5))



// you can call this function to a closer function
function result(){
    let name = "ravi"

    function student(){
        console.log(name)
    }

    student()
    return true
}

// console.log(result())



// this keyword
// it will only work if you write a simple function inside an object
// this always refers to current object or context

const student = {
    name: "raje",
    age: 30,
    greet : function(){
        return (`Hello ${this.name}, You are ${this.age} old.`)
    }
}

// console.log(student.greet())


// -------------------------------------------------------arrow functions types-----------------------------------

// const addTwoNumber = (num1, num2) => {
// return num1 + num2
// }

// const addTwoNumber = (num1, num2) => num1 + num2              arrow function give value without return 
// const addTwoNumber = (num1, num2) => (num1 + num2)            you can do like this also
// const addTwoNumber = () => ({name: "raje"})                   giving object back 

// console.log(addTwoNumber(5, 20))