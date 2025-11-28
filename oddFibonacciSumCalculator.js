function sumFibs(num){
  let fibArr = [0,1,1];
  let oddSum = 2;
  let fibNum = 0;
  let i = 3;
  while (fibNum <= num){
    fibNum = fibArr[i-2] + fibArr[i-1];
    fibArr.push(fibNum);
    i++; 
    if(fibNum % 2 != 0){
        oddSum += fibNum;
        };     
  };
  return oddSum - fibNum;
};


let test2 = sumFibs(4000000);
console.log(test2);


