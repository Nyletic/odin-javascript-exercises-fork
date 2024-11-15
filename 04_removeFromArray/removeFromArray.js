const removeFromArray = function (array, ...args) {
  // gospodsko rjesenje
  //return array.filter((val) => !args.includes(val));

  //  moje rjesenje
  let filteredArr = array;
  for (const arg of [...args]) {
    filteredArr = filteredArr.filter((value) => value !== arg);
  }

  return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
