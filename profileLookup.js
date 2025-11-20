let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

//thank you stackoverflow: https://stackoverflow.com/questions/76625236/freecodecamp-challenge-basic-javascript-profile-lookup-solution
function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] === name) {
      if (contacts[i][prop]) {
      return contacts[i][prop]
      } else {
        return "No such property"
      }
    }
  }
  return "No such contact"
  // Only change code above this line
}


  



let test = lookUpProfile("Bob", "potato")
console.log(test);


    // You should create a function named lookUpProfile that takes a name and a property as arguments.
    // You should retrieve contact information from the provided contacts array.
    // 1) If the function receives a contact name and the property exists on the related contact,
    //  then the property's value should be returned.
    // 2) If the name passed to the function does not match any contacts in the contacts array, 
    // then the function should return "No such contact".
    // 3) If the property does not exist on a found contact, then the function should return "No such property".

    // contactname = valid AND property exists
    // contactname = valid BUT property doesn't exist
    // contactname is not valid


    //  else {
    //     if (contacts[i]["firstName"] == name && contacts[i][prop] == false){
    //       output2 = "No such property";
    //       option = 2;
    //     } else if(contacts[i]["firstName"] != name){
    //       output3 = "No such contact";
    //       option = 3;
    // };