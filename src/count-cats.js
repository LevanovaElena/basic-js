const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let countCats = 0;
  matrix.forEach((array) => {
    let arrrez = array.filter((item) => item === '^^');
    if (arrrez.length > 0) countCats = countCats + arrrez.length;
  });

  return countCats;
};
