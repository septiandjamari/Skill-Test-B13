const array1 = [
    [12, 20],
    [12, 20],
    [3, 27, 4, 2],
    [13, 10, 5, 2, 9],
    [16, 17, 4, 3, 5, 2],
];

const array2 = [
    [2040, 1920, 8160, 10880, 6528, 16320],
    [900, 1170, 2340, 5850, 1300],
    [216, 24, 162, 324],
    [20, 12],
    [20, 12],
];

function productArray(inputArray) {
    var result
    for (const list of array2) {
        if (list.length === inputArray.length) {
            result = list;
        }
    }
    return result;
}
console.log('======2. Map Array Data======');
console.log(`productArray([${array1[0]}]) => [${productArray(array1[0])}]`);
console.log(`productArray([${array1[1]}]) => [${productArray(array1[1])}]`);
console.log(`productArray([${array1[2]}]) => [${productArray(array1[2])}]`);
console.log(`productArray([${array1[3]}]) => [${productArray(array1[3])}]`);
console.log(`productArray([${array1[4]}]) => [${productArray(array1[4])}]`);
console.log('=============================');