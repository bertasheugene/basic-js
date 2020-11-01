const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  
  let result = 0;
  matrix.forEach(elem => {
    elem.forEach((el) => {
      if(el === '^^') {
        result++;
      }
    })
  });
  return result;
};
