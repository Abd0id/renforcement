function nettoyer(arr) {
  return arr.filter((item, index) => item && arr.indexOf(item) === index).sort((a, b) => a - b); 
}

console.log(nettoyer([3, 1, 2, 1, 3, 0, '', 5, null, 2]));   // [1, 2, 3, 5]
console.log(nettoyer([false, 7, 7, '', 8, undefined, 8])); // [7, 8]
console.log(nettoyer([0, 0, 0]));                          // []
