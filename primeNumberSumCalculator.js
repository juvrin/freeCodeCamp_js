function sumPrimes(num){
  if(num <= 1){
    return 0;
  }
  
  let testArr = [];
  let outArr = [];
  let totalSum = 0;
  for (let i = 2; i <= num; i ++){
    testArr.push(i);
  };
  outArr = testArr.filter(isPrime);
  totalSum = outArr.reduce(getSum);
  console.log(outArr);
  return totalSum;
 };


 function isPrime(num){
   for(let i = 2; i < num; i++){
    if(num % i === 0){
      return false
    };
  };
  return true
 };


function getSum(total, num) {
  return total + Math.round(num);
};
  



let test = sumPrimes(0);
console.log(test);
