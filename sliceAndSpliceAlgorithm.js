function frankenSplice(arr1,arr2,index){
  let outarr  = arr2.toSpliced(index,0,...arr1);
  return outarr;
};

let test = frankenSplice([1, 2, 3], [4, 5], 1);
console.log(test);