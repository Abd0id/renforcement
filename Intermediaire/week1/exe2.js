function rotate(arr, n) {
    n = n % arr.length;

    return arr.slice(-n).concat(arr.slice(0, -n));
}
console.log(rotate([1,2,3,4,5], 2)) // => [4, 5, 1, 2, 3]
console.log(rotate([1,2,3,4,5], 0)) // => [1, 2, 3, 4, 5]
console.log(rotate(['a','b','c'], 1)) // => ['c', 'a', 'b']
console.log(rotate([1,2,3,4,5], 7)) // => [4, 5, 1, 2, 3] (7 % 5 = 2)