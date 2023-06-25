/** @format */

const generateNumber = (value) => {
  var digits = "0123456789";
  let AccountNumber = "";
  for (let i = 0; i < value; i++) {
    AccountNumber += digits[Math.floor(Math.random() * digits.length)];
  }
  return AccountNumber.toString();
};

module.exports = generateNumber;
