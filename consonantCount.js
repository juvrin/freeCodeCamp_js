function hasConsonantCount(text, target) {
  const vowels = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]
  let count = 0;
  for (let char of text.toLowerCase()){
    if (vowels.includes(char)){
      count++;
    };
  };
  return count === target;
}

let test = hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24);
console.log(test);