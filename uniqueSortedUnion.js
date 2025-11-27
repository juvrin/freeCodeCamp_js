function uniteUnique(arr1, ...arrs){
  const arrayConcat = arr1.concat(...arrs);
  let s = new Set(arrayConcat);
  let a1 = [...s]

  return a1;
};

let test = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(test);