const SumOfDigits = (num) => {
  if (num === 0) {
    return 0;
  }
  let dig = num % 10;
  return dig + SumOfDigits(Math.floor(num / 10));
};

console.log(SumOfDigits(1234));
