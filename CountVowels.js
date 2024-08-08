const CountVowels = (str) => {
  const newstr = str.toLowerCase().split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of newstr) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(CountVowels("SamOpaenti"));
