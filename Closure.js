//Closure : A closure is a function having access to the parent scope, even after the parent function has closed.

const add = (() => {
  let counter = 0;
  return () => {
    counter += 1;
    return counter;
  };
})();

add();
add();
console.log(add());

// var sum = (a) => {
//   console.log(a);
//   var c = 4;
//   return function (b) {
//     return a + b + c;
//   };
// };

// var store = sum(200);
// console.log(store(5));
