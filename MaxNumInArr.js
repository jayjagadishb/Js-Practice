const MaxNumInArr = (arr) => {
  return Math.max(...arr);
};

console.log(MaxNumInArr([4, 3, 10, 2, 7]));

//By using ...arr, you're effectively converting the array [4, 3, 10, 2, 7] into separate arguments 4, 3, 10, 2, 7 for the Math.max() function.
