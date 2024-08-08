const longestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  words = str.split(" ");
  console.log(words);
  //   words = words.sort((a, b) => b.length - a.length);
  //   return words[0];

  return words.reduce(
    (accum, curr) => (curr.length > accum.length ? curr : accum),
    ""
  );
};

console.log(longestWord("Hi this is jay jagadish behera from deulasahi"));
