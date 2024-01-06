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
export {
  valcheck,
  getRandomValueFromArray,
  changelab,
  getSelectedValue,
  valcheck1,
};
