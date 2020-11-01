const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  if(disksNumber == null || turnsSpeed == null){
    throw 'Not implemented';
}

let turns = Math.pow(2,disksNumber)-1;
let seconds =Math.floor(turns/(turnsSpeed/3600)) ;
let hanoi = {
    turns: turns,
    seconds: seconds
}

return hanoi;
};
