const countChar = (str, char) => {
  str = str.toLowerCase();
  char = char.toLowerCase();

  totalCount = str.split("").reduce((accm, curr) => {
    if (curr === char) {
      accm++;
    }
    return accm;
  }, 0);
  return totalCount;
};

console.log(countChar("Jayjagadish", "j"));
