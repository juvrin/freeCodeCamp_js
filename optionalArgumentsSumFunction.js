function addTogether(...args){
if(args.every (i => typeof(i) == "number") == true){
  if (args.length == 2){
    return args[0]+args[1];
  } else {
    return function addToNum(n) {
      if(typeof(n) == "number"){
      return args[0] + n;
      } else{
        return undefined;
      }
      };
  };
} else{
  return undefined;
}; 
};


// console.log(x.every (i => typeof(i) == "number"));

const sumTwoAnd = addTogether(2)([3]);
console.log(sumTwoAnd);
