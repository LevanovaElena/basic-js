const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date === null || date === undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== "[object Date]") throw new Error();

  let month = date.getMonth();

  console.log(month);
  let result = "";
  if ([11, 0, 1].indexOf(month) !== -1) result = "winter";
  else if ([2, 3, 4].indexOf(month) !== -1) result = "spring";
  else if ([5, 6, 7].indexOf(month) !== -1) result = "summer";
  else if ([8, 9, 10].indexOf(month) !== -1) result = "autumn";
  return result;

};
