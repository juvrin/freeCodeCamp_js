function bouncer(arr){
  let outarr = [];
  for(let num of arr){
    console.log(num);
    if(num){
      outarr.push(num);
    };
  };
  return outarr;
};

let test = bouncer([1,null,undefined,5,"hoi"]);
console.log(test);