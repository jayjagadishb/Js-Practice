const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W+/g, "");
  let rStr = str.split("").reverse().join("");
  return str === rStr ? true : false;
};

console.log(isPalindrome("JAj"));
console.log(isPalindrome("sam"));

// \W: This is a regex metacharacter that matches any non-word character. Non-word characters include anything that is not a letter (uppercase or lowercase), digit, or underscore. Essentially, it matches spaces, punctuation, special characters, etc.
// +: This quantifier matches one or more occurrences of the preceding element (\W). So, it matches sequences of one or more non-word characters.
// g: This flag stands for "global," meaning that the replacement should occur for all matches in the string, not just the first one.
// "": The replacement string is empty, which means that all matched non-word characters are removed from the string.
