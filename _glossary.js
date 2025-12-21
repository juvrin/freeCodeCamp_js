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

//====== generate random number between 2 numbers - zonder max
const randomNumZonderMax = Math.floor(Math.random() * (max - min)) + min;

//====== generate random number between 2 numbers - met max
// let op: de max waarde is niet een mogelijkheid op deze manier. daarvoor moet je doen: 
const randomNumMetMax =  Math.floor(Math.random() * (max - min + 1)) + min


//=================================================
//===== VERSCHIL FOR..OF en FOR...IN LOOPS ========
//=================================================
let person = {
    name:"Alice",
    age:30
};
let numbers = [1,2,3,4,5];

//==== for ... in loop: loop over properties of objects ======
console.log("\ndit geeft de waarden");
for (prop in person){
    console.log(person[prop]);
};

console.log("\ndit geeft de keys");
for (prop in person){
    console.log(prop);
};


//==== for ... of loop: loop over iterables i.e. strings, arrays, arrays of objects, etc ======
console.log("\ndit geeft de waarden");
for (const num of numbers){
    console.log(num);
};

//for...in is not recommended to loop over arrays
// console.log("\ndit geeft de indices");
// for (const num in numbers){
//     console.log(num);
// };


//=================================================
//===== sort() met nummers ========
//=================================================
const numbers1 = [414, 200, 5, 10, 3];

numbers1.sort((a, b) => a - b);


//======= convert string to array: 3 ways ========
let test1 = "SUCK oN tHIS!";
console.log(test1);
let test2 = Array.from(test1);
let test3 = Array.prototype.slice.call(test1);
let test4 = [...test1]
console.log(`Array.from(): ${test2}`);
console.log(`Slice: ${test3}`);
console.log(`Spread operator: ${test4}`);

//======= create shallow copy of array: 3 ways ========
const originalArray = [1,2,3,4];
const copyArray1 = [].concat(originalArray);
const copyArray2 = originalArray.slice();
const copyArray3 = [...originalArray];