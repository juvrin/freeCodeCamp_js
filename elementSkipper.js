function dropElements(arr,func){
  let index = 0;
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i]) == true){
      index = i;
      break
    };
  };
  return arr.slice(index);
};

let test = dropElements([0, 1, 0, 1], function(n) {return n === 1;});
console.log(test);

//ALTERNATIEF
function dropElements2(arr,func){
  let outArr = [];
   for(let element of arr){
     if(func(element) == true){
       outArr = arr.slice(arr.indexOf(element));
       break
     };
   }; 
   return outArr;  
};



