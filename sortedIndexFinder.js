function getIndexToIns(arr,num){
  let sortedArr = arr.sort((a,b) => a-b);
  const isLowest = (element) => element >= num;
  return sortedArr.findIndex(isLowest) != -1 ? sortedArr.findIndex(isLowest):arr.length;
};

let test = getIndexToIns([3, 10, 5], 11)
console.log(test);