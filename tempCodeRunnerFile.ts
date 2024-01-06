function swapArrayElements(array, index1, index2) {
  if (
    index1 >= 0 &&
    index1 < array.length &&
    index2 >= 0 &&
    index2 < array.length
  ) {
    // Swap the values at the specified indices
    [array[index1], array[index2]] = [array[index2], array[index1]];
  } else {
    console.log("Invalid indices for swapping.");
  }
}

// Example array
let myArray = [1, 2, 3, 4, 5];

// Swap values at indices 1 and 3
swapArrayElements(myArray, 1, 3);

// Display the updated array
console.log(myArray);
