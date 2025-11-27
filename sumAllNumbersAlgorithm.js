function sumAll(arr){
let min = (Math.min(...arr));
let max = (Math.max(...arr));
let sum = 0;
for(let i = min; i <= max; i++){
  sum += i;
  };
  return sum;
};

let test =  sumAll([1, 4]);
console.log(test);