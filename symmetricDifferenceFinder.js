function diffArray(arr1,arr2){
  const overlappingItems = arr1.filter(value => arr2.includes(value));
  let arr3 = arr1.concat(arr2);
  const result  = arr3.filter(value => !overlappingItems.includes(value));
  console.log(result);

  return result;
};



let test = diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// console.log(test);
