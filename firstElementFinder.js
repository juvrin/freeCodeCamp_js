function findElement(arr,func){
  let output = undefined;
  for(var i = 0;i < arr.length;i++){
    if(func(arr[i]) == true){
      output = arr[i];
      break;
    };
  };
  return output;
};

let test = findElement([], function(num) { return num > 0; });

console.log(test);