function repeatStringNumTimes(str, num){
  if(num <= 0){
    return "";
  };

  let outArray = [];
  for(var i = 0; i < num; i++){
    outArray.push(str);
  };

  let outString = outArray.join("");
  return outString;
};

let test = repeatStringNumTimes("*", 3);
console.log(test);