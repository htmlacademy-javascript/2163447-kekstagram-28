const checkStringLength = (string, number) => string.length <= number;
checkStringLength('', 20);

const isPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('');
};

isPalindrome('топот');

const extractNumber = (string) =>
  parseInt(String(string).replace(/\D/g, ''), 10);

extractNumber('123ed');

const createString = (string, minLength, pad) => {
  while (minLength > string.length) {
    string = pad.slice(0, minLength - string.length) + string;
  }
  return string;
};

createString('1', 10, '3');
