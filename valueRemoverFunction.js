function destroyer(arr,...args){
  let result = [];
  let argArr = [];
  for(var i = 0; i < args.length; i++){
    argArr.push(args[i]);
  };
  result = arr.filter((value) => !argArr.includes(value))

return result;
};

let test = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
console.log(test);