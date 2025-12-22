const myFunction = (a, v) => {
  if (Array.isArray(v) == true) {
    console.log(`v:${v}`);
    console.log(`a:${a}`);
    return a.concat(flatten(v))
  } else {
    a.push(v);
    return a;
  };
};
const flatten = arr => arr.reduce(myFunction, [])
let test2 = flatten([1, {"foo": "bar"}, [2]]);