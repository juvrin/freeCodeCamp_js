function titleCase(str){
  let stringArray = str.toLowerCase().split(" ");
  let outArray = [];
  for(let str of stringArray){
    outArray.push(str.replace(str[0],str[0].toUpperCase()));
  };
  let output = outArray.join(" ")
  return output;
};
let test = titleCase("I'm a little tea pot");
console.log(test);
