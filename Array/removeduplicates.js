function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let nums = [11, 22, 33, 22, 44, 11, 55, 66, 33];
console.log("Original:", nums);
console.log("Without Duplicates:", removeDuplicates(nums));
