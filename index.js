const getRandomNo = require('./randomNo.js')

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charLength = chars.length;

const hex = '0123456789abcdef';
const hexLength = hex.length;

const uuidPartLengths = [8, 4, 4, 4, 12];

const getRandomCharacter = () => chars.charAt(getRandomNo(1, charLength + 1));

const getRandomString = (length) => {
  let randomString = '';
  for (let i = 0; i < length; i++)
    randomString += getRandomCharacter();

  return randomString;
}

const getRandomHex = (length) => {
  let randomHex = '';
  for (let i = 0; i < length; i++)
    randomHex += hex.charAt(getRandomNo(1, hexLength + 1));

  return randomHex;
}

const getUUID = () => {
  let uuid = uuidPartLengths.map((uuidLength) => {
    for (let i = 0; i < uuidLength; i++)

      return getRandomHex(uuidLength);
  });

  return uuid.join('-');
}

const main = () => {
  console.log(getRandomNo(0, 15));
  console.log(getRandomCharacter());
  console.log(getRandomString(4));
  console.log(getRandomHex(4));
  console.log(getUUID());

};

main();
