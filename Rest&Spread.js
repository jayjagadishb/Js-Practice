// example of rest
function addnum(a, b, c, ...other) {
  console.log(other);
  return a + b + c;
}

const res = addnum(2, 3, 4, 7, 9, 5, 1);
console.log(res);

// example of spread
var names = ["ajay", "sam", "bil", "rohan"];

function getNames(name1, name2, name3) {
  console.log(name1, name2, name3);
}
getNames(...names);

//for objects

var students = {
  name: "sam",
  age: 12,
  hobbies: ["football", "cricket"],
};

const { age, ...rest } = students;
console.log(rest);

var newstudent = {
  ...students,
  age: 25,
};
console.log(newstudent);
