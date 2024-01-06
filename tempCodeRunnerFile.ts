function findMatchingIndices(arrays) {
  if (arrays.length < 2) {
    console.log("Provide at least two arrays for comparison.");
    return;
  }

  const commonIndices = [];

  // Assuming all arrays have the same length, using the length of the first array
  const arrayLength = arrays[0].length;

  for (let i = 0; i < arrayLength; i++) {
    // Get the element at index i from the first array for comparison
    const elementToCompare = arrays[0][i];
    console.log(elementToCompare);

    // Check if the element exists in the same index across all arrays
    if (arrays.forEach(element => {
      ( element[i] === elementToCompare)
    }));
      
    console.log(arrays[i])
      commonIndices.push(i);
    }
  }

  return commonIndices;


// Example arrays
let array1 = [1, 2, 3, 4, 5];
let array2 = [5, 4, 3, 2, 1];
let array3 = [3, 1, 2, 4, 5];
let arrays=[array1,array2,array3]
// Find indices where corresponding elements are the same
let matchingIndices = findMatchingIndices(arrays);

// Display the result
console.log("Matching Indices:", matchingIndices);
