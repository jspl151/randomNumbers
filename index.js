const getRandomNo = require('./randomNo.js')

const {map,reduce,range} = require('@laufire/utils/collection');

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charLength = chars.length;

const hex = '0123456789abcdef';
const hexLength = hex.length;

const uuidPartLengths = [8, 4, 4, 4, 12];

const getRandomCharacter = () => chars.charAt(getRandomNo(1, charLength + 1));

const getRandomStringReduce = (length) =>
reduce(range(0,length),(acc,cur) => acc+getRandomCharacter(),'');
  
const getRandomHex = (length) => reduce(range(0,length),(acc,cur) => acc + hex.charAt(getRandomNo(1, hexLength + 1)),'');

const getUUIDMap = () => map(uuidPartLengths,length =>
       getRandomHex(length)).join('-');

const main = () => {
  console.log(getRandomNo(0, 15));
  console.log(getRandomCharacter());
  console.log(getRandomHex(4));
  console.log(getRandomStringReduce(5));
  console.log(getUUIDMap());

};

main();
