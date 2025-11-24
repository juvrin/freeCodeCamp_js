function pyramid(str, num, rev){
  let output = "\n";
  let blank = " "; 
  let strRepeat = -1;
  if(rev == false){
    for(var row = 0; row < num; row++){
    let blankRepeat = num - (row + 1);
    output = output + `${blank.repeat(blankRepeat)}${str.repeat(strRepeat + 2 *(row+1))}\n`;
  };
  } else{
    for(var row = num - 1; row >= 0; row--){
    let blankRepeat = num - (row + 1);
    output = output + `${blank.repeat(blankRepeat)}${str.repeat(strRepeat + 2 *(row+1))}\n`;
  };
  };
  
return output;
  
};

let test2 = pyramid("p", 5, true);
console.log(test2);