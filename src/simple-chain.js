const CustomError = require("../extensions/custom-error");

const chainMaker = {

  str: '', //сформированная строка
  array: [], //массив элементов строки

  getLength() //getLength возвращает текущую длину цепи в виде числа;
  {
    return this.array.length;
  },
  addLink(value) //+addLink(value) добавляет звено, содержащее строковое представление value к цепочке;
  {
    this.array.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) //+removeLink(position) удаляет звено цепи, находящееся в заданном положении; 
  {
    if (!Number.isInteger(position) || (position - 1) >= this.array.length || (position - 1) < 0) {
      this.array = [];
      throw new Error('Not correct position!');
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() //+reverseChain разворачивает цепь задом наперед;
  {
    this.array.reverse();
    return this;
  },
  finishChain() //finishChain завершает цепь и возвращает ее.
  {
    this.str = this.array.join('~~');
    this.array = [];
    return this.str;
  }
};

module.exports = chainMaker;
