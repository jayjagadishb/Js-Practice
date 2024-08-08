const calculateAverage = (arr) => {
  let total = arr.reduce((accm, curr) => accm + curr, 0);
  return total / arr.length;
};

console.log(calculateAverage([4, 8, 3, 9, 5]));
