let arry = ["lab", "sr", "ds", "am", "lab"];
function changelab() {
  console.log(arry);
  let a = arry.indexOf("lab");
  console.log(a);
  let b = arry.lastIndexOf("lab");
  console.log(b);
  arry.splice(b, 1);
  console.log(arry);
  arry.splice(a, 0, "lab");
  console.log(arry);
}
changelab();
function valcheck(array, originalArray) {
  let myArray =originalArray;
  let specificElement = array;

  // Move specific element to the front
  myArray.unshift(myArray.splice(myArray.indexOf(specificElement), 1)[0]);

  // Move specific element to the end
  // myArray.push(myArray.splice(myArray.indexOf(specificElement), 1)[0]);

  console.log(myArray);

  return originalArray;
}
let a = [];
a[0] = 1;
a[1] = null;
a[3] = 3;
let b = [5, 4, 3];
let c = valcheck(a, b);
console.log(c);
