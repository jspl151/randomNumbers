const getRandom = () => Math.random();

const getRandomArbitrary = (min,max)=> Math.random() * (max - min) + min;
  
const main = () => {
  const randomNoList = getRandom();
  const randomNoRange = getRandomArbitrary(5,7)
  console.log(randomNoList);
  console.log(randomNoRange);

};

main();