let inventory = [
  // {"name":"flour",
  // "quantity":10}
]



function findProductIndex(productName){
  return inventory.findIndex(product => product.name === productName.toLowerCase())
};

// console.log(findProductIndex("flour"));

function addProduct(product){
  product.name = product.name.toLowerCase();
  let index = findProductIndex(product.name);
  if(index !== -1){
    inventory[index].quantity += product.quantity;
    console.log(`${product.name} quantity updated`);
  } else{
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  };
};

// addProduct({name: "barbie", quantity: 5})
// addProduct({name: "FLOUR", quantity: 5})

function removeProduct(productName, productQuantity){
  productName = productName.toLowerCase();
  let index = findProductIndex(productName); 
  if(index == -1){
    return console.log(`${productName} not found`);
  };
  if(inventory[index].quantity < productQuantity){  
    return console.log(`Not enough ${productName} available, remaining pieces: ${inventory[index].quantity}`);
    } else if(inventory[index].quantity - productQuantity == 0){
    inventory.splice(index,1);
  } else {
    inventory[index].quantity -= productQuantity;
    return console.log(`Remaining ${productName} pieces: ${inventory[index].quantity}`);
  };
};

let test = {"name":"sharks", "quantity": 5};


removeProduct("FLOUR", 5);
console.log(inventory);


