function swapWithFirst(array, index) {
  if (index >= 0 && index < array.length) {
    // Swap the value at the specified index with the value at the first index (index 0)
    [array[0], array[index]] = [array[index], array[0]];
  } else {
    console.log("Invalid index for swapping.");
  }
}

// Example array
let myArray = ["am", "KD", "am", "DS", "AM"];

// Swap value at index 2 with the first index (index 0)
swapWithFirst(myArray, 4);

// Display the updated array
console.log(myArray);
