
function concat(array1, array2) {
  let concatenate = [];
  array1.forEach(element => {
    concatenate.push(element);
  });
  array2.forEach(element => {
    concatenate.push(element);
  });
  return concatenate;
}

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);
