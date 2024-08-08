const RemoveDuplicate = (arr) => {
  let newArr = [...new Set(arr)];
  return newArr;
};

console.log(RemoveDuplicate([1, 2, 3, 2, 3, 1, 4]));
