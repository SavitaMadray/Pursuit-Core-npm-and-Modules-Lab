const firstChar = (str) => {
  return str[0];
};

const compare = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

const reverse = (str) => {
  let newStr = str.split("");
  return newStr.reverse().join("");
};

module.exports = {
  firstChar,
  compare,
  reverse,
};
