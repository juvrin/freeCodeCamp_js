function largestOfAll(arrays){
  let output = [];
  for (var i = 0; i < arrays.length; i++){
    output.push(Math.max(...arrays[i]));
  };
  return output;
};
let test = largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(test);