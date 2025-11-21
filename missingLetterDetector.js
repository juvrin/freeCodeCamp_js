function fearNotLetter(str){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let beginIndex = alphabet.indexOf(str[0]);
  for(var i = beginIndex; i <= (beginIndex + str.length); i++){
    // console.log(`i: ${i} i-beginIndex: ${i-beginIndex}`);
    if(alphabet[i] === str[i-beginIndex]){
      continue;
    } else {
      return alphabet[i];
    };
    
  };
};

let test = "bcdeg";
console.log(fearNotLetter(test));