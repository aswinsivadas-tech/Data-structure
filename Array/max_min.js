function findMaxMin(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return { max, min };
}

let nums = [98, 67, 12, 89, 3, 6, 25];
let result = findMaxMin(nums);

console.log("Array:", nums);
console.log("Max:", result.max);
console.log("Min:", result.min);
