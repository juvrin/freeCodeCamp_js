function truthCheck(collection, pre) {
  return collection.every(coll => coll[pre]);
}

let test = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name");

console.log(test);