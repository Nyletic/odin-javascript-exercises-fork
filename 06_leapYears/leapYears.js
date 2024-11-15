const leapYears = function (year) {
  // sve u jednom ifu, odin solution
  //   if (year % 4 === 0 && (!(year % 100 === 0) || year % 400 === 0)) {
  //     return true;
  //   }
  //   return false;

  // ternary solution
  // return year % 400 === 0
  //   ? true
  //   : year % 100 === 0
  //   ? false
  //   : year % 4 === 0
  //   ? true
  //   : false;

  // moje rješenje
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) return true;
      return false;
    }
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
