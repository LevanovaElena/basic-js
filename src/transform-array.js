const CustomError = require("../extensions/custom-error");

/**
 * 
--discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.
--discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.
--double-next удваивает следующий за ней элемент исходного массива в преобразованном массиве.
--double-prev удваивает предшествующий ей элемент исходного массива в преобразованном массиве.
Например:

transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]

transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 */


module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("Param is not array!");
  let result = [];
  let delnext = 0;
  let del = false;
  for (index = 0; index < arr.length; index++) {
    switch (arr[index]) {
      case "--discard-next":
        {
          del = true;//удалили следующий и сам указатель

        }
        break;
      case "--discard-prev":
        {
          if (delnext !== index - 1)
            result.pop();//предыдущий удалили
        }
        break;
      case "--double-next":
        {
          if (index + 1 !== arr.length) {
            result.push(arr[index + 1]);
          }
        }
        break;
      case "--double-prev": if (result.length != 0 && delnext !== index - 1) {
        result.push(result[result.length - 1]);

      }
        break;
      default:
        if (!del) result.push(arr[index]);
        else { del = false; delnext = index; }
    }
  }
  return result;
};
