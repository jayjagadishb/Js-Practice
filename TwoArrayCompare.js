const compare = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((curr, index) => curr === arr2[index]);
};

console.log(compare([1, 2, 3], [1, 2, 3]));
console.log(compare([1, 2, 3], [1, 7, 3]));
console.log(compare([], []));

//.every checks and returns true or false value.
