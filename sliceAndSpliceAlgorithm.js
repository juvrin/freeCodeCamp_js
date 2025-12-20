function frankenSplice(arr1,arr2,index){
  let outarr  = arr2.toSpliced(index,0,...arr1);
  return outarr;
};

let test = frankenSplice([1, 2, 3], [4, 5], 1);
console.log(test);

//ALTERNATIEF met slice en splice
function frankenSplice(arr1,arr2,index){
  let arr1Copy = arr1.slice();
  let arr2Copy = arr2.slice();
  arr2Copy.splice(index,0,...arr1Copy);
  return arr2Copy;
};

let arr1 = [1, 2, 3];
let arr2 = [4,5];
let test2 = frankenSplice(arr1, arr2, 1);
console.log(test2);