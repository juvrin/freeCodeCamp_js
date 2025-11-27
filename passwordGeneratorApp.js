function generatePassword(length){
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
  let passwordArr = [];
  for(let i = 0; i < length; i++){
    let randNum =  Math.floor(Math.random() * (length + 1));
    passwordArr.push(chars[randNum]);
  };
  let password = passwordArr.join('')
  return password;
};

let password = generatePassword(10);
console.log(password);

console.log(`Generated password: ${password}`)