let students = [
  { name: "raje", marks: 42 },
  { name: "raje", marks: 70 },
  { name: "raje", marks: 35 },
  { name: "raje", marks: 44 },
];

let result = students.forEach((stu, i) => students[i].attendance = "yes")

let result2 = students.map((stu) => {
if(stu.marks < 60) { 
  stu.marks += 20
}
return stu }
).filter((stu, i) => stu.marks > 60).reduce((acc, curr, i) => {
  return acc + curr.marks} , 0 )

  
console.log(result2);
