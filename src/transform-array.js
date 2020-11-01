const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        switch (true) {
            case arr[i] == '--discard-next' && i != arr.length - 1:
                i++;
                break;
            case arr[i] == '--discard-prev' &&
                i != 0 &&
                arr[i - 2] !== '--discard-next':
                newArr.pop();
                break;
            case arr[i] == '--double-next' && i != arr.length - 1:
                newArr.push(arr[i + 1]);
                break;
            case arr[i] == '--double-prev' &&
                i != 0 &&
                arr[i - 2] != '--discard-next':
                newArr.push(arr[i - 1]);
                break;
            case arr[i] != '--double-next' &&
                arr[i] != '--double-prev' &&
                arr[i] != '--discard-next' &&
                arr[i] != '--discard-prev':
                newArr.push(arr[i]);
                break;
            default:
                break;
        }
    }
    return newArr;
} else {
    throw Error();
}
};
