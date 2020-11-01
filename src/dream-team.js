const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  var arr = [];
  if(!Array.isArray(members)){
    return false;
  }
  members.forEach(item => {
    if(typeof item == 'string'){
      item = item.replace(/\s+/g,'');
      arr.push(item[0].toUpperCase());
    }
  });
  var str = arr.sort().join('');
  return str;
};
