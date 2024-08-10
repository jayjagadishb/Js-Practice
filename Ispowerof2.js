const IsPowerOfTwo = (num) => {
  for (let i = 1; i < num / 2; i++) {
    if (2 ** i === num) {
      return true;
    }
  }
  return false;
};

console.log(IsPowerOfTwo(8));
console.log(IsPowerOfTwo(5));
