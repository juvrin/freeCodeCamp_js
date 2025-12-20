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


// ALTERNATIEF
// function titleCase(str){
//     let words = str.split(" ");
//     let finalArr = [];
//     for (let word of words){
//         let tempArr = [];
//         tempArr.push(word[0].toUpperCase())
//         tempArr.push(word.slice(1,word.length).toLowerCase())
//         finalArr.push(tempArr.join(""));
//     }
//     return finalArr.join(" ");
// };

// let test2 = titleCase("SUCK oN tHIS!");
// console.log(test2);