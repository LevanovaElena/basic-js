const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str = '', options = { repeatTimes: 0, separator: '+', addition: '', additionRepeatTimes: 0, additionSeparator: '|' }) {

  if (options.addition !== undefined) options.addition = String(options.addition);
  else options.addition = '';
  if (options.str !== undefined) options.separator = String(options.separator);
  else options.str = '';
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (!Number.isInteger(options.repeatTimes) || options.repeatTimes === undefined) options.repeatTimes = 1;
  if (!Number.isInteger(options.additionRepeatTimes) || options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  str = String(str);

  let result = '';
  for (i = 0; i < options.repeatTimes; i++) {

    result += str;
    for (j = 0; j < options.additionRepeatTimes; j++) {
      result += options.addition;
      if (j < options.additionRepeatTimes - 1) result += options.additionSeparator;
    }
    if (i < options.repeatTimes - 1) result += options.separator;
  }
  return result;
};