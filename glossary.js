function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}


//===== check if first word contains all letters of second word
function mutation(arr){
  let str1Array = arr[0].toLowerCase().split("");
  let str2Array = arr[1].toLowerCase().split("");
  let count = 0;
  for (const char of str2Array){
    if (str1Array.includes(char)) {
      count++;
    }
  };

  if (count === str2Array.length){
    return true;
  } else {
    return false;
  }
  
};

let test = mutation(["Hello","hey"]) //should give false, ["alien", "line"] should give true
console.log(test);