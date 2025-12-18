// ===== OPTIE 1 =====
// .substr kan ook maar is legacy en verouderd dus niet meer gebruiken
function confirmEnding1(stringCheck, stringAgainst){
  if (stringCheck.slice(-stringAgainst.length) === stringAgainst){
    return true;
  } else{
    return false;
  }
};

// ===== OPTIE 2 met een ternary operator ===== 
function confirmEnding2(stringCheck, stringAgainst){ 
  return stringCheck.slice(-stringAgainst.length) === stringAgainst ? true: false;
};


// ===== OPTIE 3 als arrow function ===== 
let confirmEnding = (a, b) => a.slice(-b.length) === b ? true: false;;

let test = confirmEnding("Bastian", "ian");
console.log(test);

