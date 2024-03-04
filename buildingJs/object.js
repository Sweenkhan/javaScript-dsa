// Object.create                          singleton-object
// const obj = new Object()               singleton-object


//symbol declare type
const mySum = Symbol("key1")                      //define symbol


// object literals
const user = {
    name : "sween khan",
    age: 26,
    email: "kbhai1585@gmail.com",
    job: "Full Stack Developer",
    "city": "Hyderabad",                         // only u can take this value like this format => user["city"]
    [mySum]: "unique hai",                       // giving value to symbol
    greeting: function(){
        console.log(`Hello JS user, ${this.name}`)
    }
}


                                                // frezing the object, now no one can modify the value
// Object.freeze(user)

// console.log(user.name)                          //taking value with dot notation
// console.log(user["name"])                       //taking value with square bracket, and we have put key name in string.
// console.log(user[mySum])                        //value of symbol
// console.log(user.greeting())                    






// how to merge two object in javascript 
const user1 = {
    name: "ravi",
    age: 23,
    email: "ravi@gmail.com"
}

const user2  =  {
    lname: "rahul",
    lage: 27,
    lemail: "rahul@gmail.com"
}



const mergeObj = Object.assign({}, user1, user2)              // to merge two array 
const mergeWithSpread = {...user1, ...user2}
// console.log(mergeWithSpread)
// console.log(mergeObj)


// Object.keys(user)           // => It will give you an array of keys
// Object.values(user)         // => It will give you an array of values
// Object.entries(user)        // => It will give you arrays inside array and they are holdign first value is key and second value is value.


//  console.log(user.hasOwnProperty("name"))     // => it will give you value in true or false.





// Destructuring in javascript: =>

const {name : username} = user;              // destrcuting value in username
console.log(username)