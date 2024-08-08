const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }
  str = str.split(" ");

  str = str.map((curr) => curr.replace(curr[0], curr[0].toUpperCase()));

  str = `#${str.join("")}`;
  return str;
};

console.log(generateHash("my name is jay"));
