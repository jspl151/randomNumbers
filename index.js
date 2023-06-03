const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const hex = '0123456789abcdef';
const hexLength= hex.length;

const getRandomNos = (min,max)=> Math.floor(Math.random() * (max - min) + min);


const getRandomCharacter = () => {
  const charLength= chars.length ;
  let result = '';
  result = chars.charAt(getRandomNos(1,charLength+1));
  
  return result;
}

const getRandomString = (length) => {
  let RandomString = '';
  for( i=0;i < length;i++ )
  RandomString += getRandomCharacter(); 
  
  return RandomString;
}

const getRandomHex = (length) => {
  let RandomHex = '';
  for( i=0;i < length;i++ )
  RandomHex += hex.charAt(getRandomNos(1,hexLength+1));
  
  return RandomHex;
}

const getUuid = (length) => {
  let RandomHex = '';
  for( i=0;i < length;i++ )
  RandomHex += getRandomHex(length);
  
  return RandomHex;
}

const main = () => {
  console.log(getRandomNos(0,15));
  console.log(getRandomCharacter());
  console.log(getRandomString(4));
  console.log(getRandomHex(4));
  const uuidLength = [8,4,4,4,12] ;
  const uuid = uuidLength.map(getUuid);
  console.log(uuid.join('-'));
  
};

main();
