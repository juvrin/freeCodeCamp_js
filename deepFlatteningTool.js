const myFunction = (a, v) => {
  if (Array.isArray(v) == true) {
    return a.concat(steamrollArray(v))
  } else {
    a.push(v);
    return a;
  }
}

const steamrollArray = arr => arr.reduce(myFunction, [])


let test = steamrollArray([[["a"]], [["b"]]]);
console.log(test);
// let test2 = steamrollArray([1, {"foo": "bar"}, [2]]);