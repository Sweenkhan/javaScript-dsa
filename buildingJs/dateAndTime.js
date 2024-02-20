let myDate = new Date();

// console.log(myDate.toString())            //Tue Feb 20 2024 17:45:27 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString())      //20/2/2024, 5:44:24 pm
// console.log(myDate.toDateString())        //Tue Feb 20 2024

// console.log(typeof myDate)                //object

let myCreateDate = new Date(2002, 0, 7,)
// console.log(myCreateDate.toDateString())    //Mon Jan 07 2002


let myCreateDateTime = new Date(1997, 0, 7, 14, 30)
// console.log(myCreateDateTime.toLocaleString())

// console.log(Math.floor(myDate.getTime() / 1000))


let weekDay = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"]

let newDate = new Date();
console.log(newDate.getMonth() + 1)
console.log(weekDay[newDate.getDay() - 1])
console.log(newDate.getDate())
console.log(newDate.getHours() / 24)
