function flatten(arr) {
    let result = [];

    for (let element of arr) {
        if (Array.isArray(element)) {
            result = result.concat(flatten(element));
        } else {
            result.push(element);
        }
    }

    return result;
}
console.log(flatten([1,[2,3],[4,[5,6]]])) // => [1, 2, 3, 4, 5, 6]
console.log(flatten([[1,[2]],[[[3]],4]])) // => [1, 2, 3, 4]
console.log(flatten([1,2,3])) // => [1, 2, 3]

