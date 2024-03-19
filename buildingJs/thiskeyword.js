// prod = "bread"

// console.log(temp())           hoisting will work here. it will save the whole project
//console.log(prod)
// function temp(){
//     console.log("normal")
// }

// var prod ;

let student2 = { firstName: "vikas", lastName: "tomar" };

let students = {
  firstName: "ujwal",
  lastName: "sharma",
  greet: function () {
    console.log(`Hello ${this.firstName}${this.lastName}, How are you`);
  },
};

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i, students.greet.call(student2));
  }, 2000 * i);
}
// console.log(student.firstName)
