function whatIsInAName(arr,src){
let outarr = arr.filter(filterPersons);

function filterPersons(person){
  const keysSrc = Object.keys(src);
  const valuesSrc = Object.values(src);
  const areEqual = keysSrc.every(key => person[key] === src[key]) && valuesSrc.every(value => person[value] === src[value])  ;
  return areEqual;
};

return outarr;
};

let arr= [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }];
let src = { "apple": 1, "cookie": 2 };
let test = whatIsInAName(arr,src);
console.log(test);


