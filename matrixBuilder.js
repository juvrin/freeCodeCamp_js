function buildMatrix(rows, cols){
  let arrays = [];
  for (var i = 0; i < rows; i++){
    let array = [];
    for(var j = 0; j < cols ; j++){
      array.push(0);
    };
    arrays.push(array);
  };
return arrays;
};

let test = buildMatrix(2, 3);
console.log(test);