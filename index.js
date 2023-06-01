const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const getRandomNos = (min,max)=> Math.floor(Math.random() * (max - min) + min);


const getRandomCharacter = () => {
  const charLength= chars.length ;
  let result = '';
  result = chars.charAt(getRandomNos(1,charLength+1));
  
  return result;
}

const getRandomString = (length) => {
  const charLength= chars.length ;
  let RandomString = '';
  for( i=0;i < length;i++ )
  RandomString += getRandomCharacter(); 
  
  return RandomString;
}
  

const main = () => {
  console.log(getRandomNos(0,9));
  console.log(getRandomCharacter());
  console.log(getRandomString(4));
};

main();
