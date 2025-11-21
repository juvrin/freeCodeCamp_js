function lcm(a, b) {
  let arrayA = [];
  let arrayB = [];
  for(var i = 0; i <= 100; i++){
    arrayA.push(a*i);
    arrayB.push(b*i);
  };

 const commonItems = arrayA.filter(item => arrayB.includes(item));
return commonItems[1]; 

};
let test = lcm(4, 6);
console.log(test);



// Given two integers, return the least common multiple (LCM) of the two numbers.

// The LCM of two numbers is the smallest positive integer that is a multiple of both numbers. For example, given 4 and 6, return 12 because:

//     Multiples of 4 are 4, 8, 12 and so on.
//     Multplies of 6 are 6, 12, 18 and so on.
//     12 is the smallest number that is a multiple of both.

