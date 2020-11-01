const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max = 1;
        arr.forEach(element => {
            if (Array.isArray(element)) {
                var count = 1;
                count += this.calculateDepth(element);
                if (count > max) {
                    max = count;
                }
            }
        });
        return max;
  }
};