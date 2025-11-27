function pairElement(str){
  let arr2d = [];
  for(let char of str){
    
    let arr = [];
    if(char == "A"){
      arr = ["A", "T"];
    };
    if (char == "T"){
      arr = ["T", "A"];
    };
    if (char == "C"){
      arr = ["C", "G"];
    };
    if (char == "G"){
      arr = ["G", "C"];
    };
    arr2d.push(arr);
  };
  return arr2d;
};

let test = pairElement("ATCGA");
console.log(test);