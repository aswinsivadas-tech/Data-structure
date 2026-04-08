function reverseArray(arr) {
    return arr.reverse();
}

let nums = [1, 2, 3, 4, 5];
console.log("Original:", nums);
console.log("Reversed:", reverseArray([...nums]));
         
