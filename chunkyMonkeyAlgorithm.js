// Write a function named chunkArrayInGroups that takes an array as first argument 
// and a number as second argument. The function should split the array into 
// smaller arrays of length equal to the second argument and returns them as a 
// two-dimensional array.

function chunkArrayInGroups(arr, num){
  let arrays = [];
  const numRows = Math.ceil(arr.length/num);
  
  for (var i = 0; i < numRows; i++){
    let array = [];
    for(var j = 0 + (i * num); j < Math.min((i * num) + num, arr.length) ; j++){
      array.push(arr[j]);
    };
    arrays.push(array);
  };
return arrays;
};


let test = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
console.log(test);