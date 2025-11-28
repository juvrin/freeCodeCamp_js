function dropElements(arr,func){
  let index = arr.length;
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i]) == true){
      console.log(func(arr[i]));
      index = i;
      break
    };
  };
  return arr.slice(index);

};
let test = dropElements([1, 2, 3, 4], function(n) {return n > 5;})
console.log(test);



