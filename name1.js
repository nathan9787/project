function valcheck(array, originalArray) {
  array.forEach((i) => {
    // console.log(i);
    // console.log(originalArray);
    let a = originalArray.indexOf(i);
    // console.log(a);
    if (a >= 0) originalArray.splice(a, 1);
    // console.log(originalArray);
  });
  return originalArray;
}
function getRandomValueFromArray(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
function changelab(trval, arry) {
  let a = arry.indexOf(trval);
  console.log(a);
  let b = arry.lastIndexOf(trval);
  console.log(b);
  let array = arry;

  // Value to find
  let targetValue = trval;
  console.log(targetValue);

  // Count occurrences of the target value
  let count = array.filter((value) => value === targetValue).length;

  console.log(
    `The value ${targetValue} is repeated ${count} times in the array.`
  );
  if (count == 1) {
    arry.splice(b, 1);
    arry.splice(a, 0, "Lab","Lab");
  } else if (count == 2) {
    // arry.splice(b, 1);
    arry.splice(b, 1);
    arry.splice(a, 1, "Lab","Lab");
  } else {
    console.log(count);
    arry.splice(b, 1);
    arry.splice(a, 0, "Lab", "Lab");
  }

  // arry.splice(a, 0, "lab");
}
function getSelectedValue() {
  var inputElement = document.getElementById("myTextBox1");

  // Get the value from the input field
  var inputValue = inputElement.value;

  // Display the value in the console (you can use it as needed)
  // console.log("Input Value:", inputValue);
  // Get the select element by its id
  var selectElement = document.getElementById("myDropdown");

  // Get the selected option's value
  var selectedValue = selectElement.value;

  // Display the selected value in the console (you can use it as needed)
  // console.log("Selected Value:", selectedValue);
  var array1 = [];
  var array2 = [];
  if (selectedValue == 2) {
    array1.push(inputValue);
    array2.push(inputValue);
  }
  return [array1, array2];
}
function valcheck1(array, originalArray) {
  let myArray = originalArray;
  let specificElement = array;

  // Move specific element to the front
  myArray.unshift(myArray.splice(myArray.indexOf(specificElement), 1)[0]);

  // Move specific element to the end
  // myArray.push(myArray.splice(myArray.indexOf(specificElement), 1)[0]);

  console.log(myArray);

  return originalArray;
}
function findMatchingIndices(input, ...arrays) {
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
    console.log(elementToCompare);
    // Check if the element exists in the same index across all arrays
    arrays.forEach((element) => {
      console.log(element);
            
        if (element[i] == elementToCompare) {
          commonIndices.push(i);
          console.log(commonIndices);
            }
    });
  }
return commonIndices;
}
  function swapArrayElements(array, indexPairs) {
    for (const [index1, index2] of indexPairs) {
      if (
        isValidIndex(index1, array.length) &&
        isValidIndex(index2, array.length)
      ) {
        // Swap the values at the specified indices
        [array[index1], array[index2]] = [array[index2], array[index1]];
      } else {
        console.log(`Invalid indices (${index1}, ${index2}) for swapping.`);
      }
    }
  }

  function isValidIndex(index, arrayLength) {
    return index >= 0 && index < arrayLength;
  }


  // Example array

  // Display the updated array
  // console.log(myArray);


  // // Example array
  // let myArray = [1, 2, 3, 4, 5];

  // // Swap values at indices 1 and 3
  // swapArrayElements(myArray, 1, 3);

  // // Display the updated array
  // console.log(myArray);
  function swapWithFirst(array, index) {
    if (index >= 0 && index < array.length) {
      // Swap the value at the specified index with the value at the first index (index 0)
      [array[0], array[index]] = [array[index], array[0]];
    } else {
      console.log("Invalid index for swapping.");
    }
  }

  // Example array


  export {
    valcheck,
    getRandomValueFromArray,
    changelab,
    getSelectedValue,
    valcheck1, findMatchingIndices, swapArrayElements, swapWithFirst
  };

