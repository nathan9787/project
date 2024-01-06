function findMatchingIndices(arrays) {
  if (arrays.length < 2) {
    console.log("Provide at least two arrays for comparison.");
    return;
  }

  const commonIndices = [];

  // Find the minimum length among all arrays
  const minLength = Math.min(...arrays.map((array) => array.length));

  for (let i = 0; i < minLength; i++) {
    // Get the element at index i from the first array for comparison
    const elementToCompare = arrays[0][i];

    // Check if the element exists in the same index across all arrays
    let elementExistsInAllArrays = true;

    for (let j = 1; j < arrays.length; j++) {
      console.log(arrays)
      if (arrays[j][i] !== elementToCompare) {
        
        if (elementExistsInAllArrays) {
          commonIndices.push(i);
          break
        }
      }
    }

    return commonIndices;
  }
}
// Example arrays with different lengths
let array1 = [1, 2, 3, 4, 5];
let array2 = [5, 4, 3, 2, 1];
let array3 = [3, 1, 2, 4, 5, 6, 7];
let array4 = [1, 2, 3, 4, 5, 6];

// Find indices where corresponding elements are the same
let matchingIndices = findMatchingIndices([array1, array2, array3, array4]);

// Display the result
console.log("Matching Indices:", matchingIndices);
