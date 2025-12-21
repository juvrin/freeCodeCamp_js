function smallestCommons(inputArr){

  // Find the min and max of inputArr in case they weren't in order
  let min = Math.min(...inputArr);
  let max = Math.max(...inputArr);
  let arr = [];
  let multipleOfMax = [];

  // Create an array of all numbers in between min and max
    for(let j = min;j <= max; j ++){
      arr.push(j);
    };

  // Fill an array with the max value times the product of all the numbers in arr
  for (let i = min; i <= arr.reduce((a, b) => a * b); i++) {
    multipleOfMax.push(max * i);
  };

  
  for (let res of multipleOfMax) {
    if (arr.every(num => res % num === 0)) {
      return res;
    };
  };
};

let test = smallestCommons([1,5]);
console.log(test);



