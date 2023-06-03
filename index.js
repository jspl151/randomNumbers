const getRandomNo = require('./randomno.js')

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const hex = '0123456789abcdef';
const hexLength = hex.length;

const getRandomCharacter = () => {
  const charLength = chars.length;
  let result = '';
  result = chars.charAt(getRandomNo(1, charLength + 1));

  return result;
}

const getRandomString = (length) => {
  let randomString = '';
  for (let i = 0; i < length; i++)
    randomString += getRandomCharacter();

  return randomString;
}

const getRandomHex = (length) => {
  let randomHex = '';
  for ( let i = 0; i < length; i++)
    randomHex += hex.charAt(getRandomNo(1, hexLength + 1));

  return randomHex;
}

const getUUID = (length) => {
  let randomHex = '';
  for ( let i = 0; i < length; i++)
    randomHex = getRandomHex(length);

  return randomHex;
}

const main = () => {
  console.log(getRandomNo(0, 15));
  console.log(getRandomCharacter());
  console.log(getRandomString(4));
  console.log(getRandomHex(4));
  const uuidLength = [8, 4, 4, 4, 12];
  const uuid = uuidLength.map(getUUID);
  console.log(uuid.join('-'));

};

main();
