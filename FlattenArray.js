const flatendarr = (arr) => {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(flatendarr(item));
    } else {
      res.push(item);
    }
  }
  return res;
};

const array = [
  [1, [2, 3]],
  [4, 5],
  [6, [7, [8]]],
];
const newarr = flatendarr(array);
console.log(newarr);


//JavaScript provides a built-in method called flat() that can be used to flatten arrays.
//arr.flat(Infinity) will completely flatten a deeply nested array.