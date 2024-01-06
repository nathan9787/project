function findMatchingIndices(input,...arrays) {
  if (arrays.length <= 0) {
        console.log("Provide at least two arrays for comparison.");
        return;
    }

    const commonIndices = [];

    // Assuming all arrays have the same length, using the length of the first array
    const arrayLength = arrays[0].length;
    // console.log(arrayLength)

    for (let i = 0; i < arrayLength; i++) {
        // Get the element at index i from the first array for comparison
        const elementToCompare = input[i];
        console.log(elementToCompare)
        // Check if the element exists in the same index across all arrays
        arrays.forEach(element => {
            console.log(element)
            
            
            for (let i = 1; i <= 5; i++)
                 
            if (element[i] == elementToCompare) {
                
                commonIndices.push(i);
                console.log(commonIndices)
            }
        });
            
    
        

    }
    return commonIndices;
}

// Example arrays
let array1 =["SR","Lab","Lab","DS","AM"]
let array2 = ["am", "am", "AM", "DS", "KD"];
// let array3 = [3, 1, 2, 4, 5];

// Find indices where corresponding elements are the same
let matchingIndices = findMatchingIndices(array1, array2);

// Display the result
console.log("Matching Indices:", matchingIndices);
