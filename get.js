// Start a new session
sessionStorage.clear();

// console.log(arrays);
let array1 = [];
let array2 = [];
let array3 = [];
let array4 = [];
let array5 = [];
let array6 = [];
let arrayt21 = [];
let arrayt22 = [];
let arrayt23 = [];
let arrayt24 = [];
let arrayt25 = [];
let arrayt26 = [];
let arrays = [array1, array2, array3, array4, array5, array6];

// let arrayt11 = [];
// let arrayt12 = [];
// let arrayt13 = [];
// let arrayt14 = [];
// let arrayt15 = [];
// let arrayt16 = [];

function getlap() {
  let lab = document.getElementById("TextBox3").value;
  let num = document.getElementById("Dropdown2").value;
  if (num == 3) {
    for (let i = 1; i <= num; i++)
      array1.push(document.getElementById("TextBox3").value);
    console.log(array1);
  } else if (num == 5) {
    for (let i = 1; i <= 3; i++)
      array1.push(document.getElementById("TextBox3").value);
    console.log(array1);

    for (let i = 1; i <= 2; i++)
      array2.push(document.getElementById("TextBox3").value);
    console.log(array2);
  } else if (num == 4) {
    for (let i = 1; i <= 2; i++)
      array1.push(document.getElementById("TextBox3").value);
    console.log(array1);

    for (let i = 1; i <= 2; i++)
      array2.push(document.getElementById("TextBox3").value);
    console.log(array2);
  } else if (num == 6) {
    for (let i = 1; i <= 3; i++)
      array1.push(document.getElementById("TextBox3").value);
    console.log(array1);

    for (let i = 1; i <= 3; i++)
      array2.push(document.getElementById("TextBox3").value);
    console.log(array2);
  } else {
    for (let i = 1; i <= num; i++)
      array1.push(document.getElementById("TextBox3").value);
    console.log(array1);
  }
  sessionStorage.setItem("lab", JSON.stringify(lab));
}
function getlap1() {
  let lab = document.getElementById("TextBoxt23").value;
  let num = document.getElementById("Dropdownt22").value;
  if (num == 3) {
    for (let i = 1; i <= num; i++)
      arrayt21.push(document.getElementById("TextBoxt23").value);
    console.log(arrayt21);
  } else if (num == 5) {
    for (let i = 1; i <= 3; i++)
      arrayt21.push(document.getElementById("TextBoxt23").value);
    console.log(arrayt21);

    for (let i = 1; i <= 2; i++)
      arrayt22.push(document.getElementById("TextBoxt23").value);
    console.log(arrayt22);
  } else if (num == 4) {
    for (let i = 1; i <= 2; i++)
      arrayt21.push(document.getElementById("TextBoxt23").value);
    console.log(arrayt21);

    for (let i = 1; i <= 2; i++)
      arrayt22.push(document.getElementById("TextBoxt23").value);
    console.log(arrayt22);
  } else if (num == 6) {
    for (let i = 1; i <= 3; i++)
      arrayt21.push(document.getElementById("TextBoxt23").value);
    console.log(arrayt21);

    for (let i = 1; i <= 3; i++)
      arrayt22.push(document.getElementById("TextBoxt23").value);
    console.log(arrayt22);
  } else {
    for (let i = 1; i <= num; i++)
      arrayt21.push(document.getElementById("TextBoxt23").value);
    console.log(arrayt21);
  }
  sessionStorage.setItem("lab2", JSON.stringify(lab));
}

function getinput() {
  // let subject = document.getElementById("TextBox1").value;

  // let dropdownValue = document.getElementById("Dropdown1").value;
  // let val = parseInt(dropdownValue);

  const Subject = document.getElementById("TextBox").value;
  const Teacher = document.getElementById("TextBox2").value;
  const Hours = document.getElementById("Dropdown1").value;

  // Disable the button to prevent multiple clicks
  // document.getElementById("ad1").disabled = false;

  // Create the object
  // Object.assign(userObject,{
  //   const userObject={
  //   subject: Subject,
  //   teacher: Teacher,
  //   hours: Hours,
  // };
  // for (let i = arrays[0]; i < arrays.length; i++)
  console.log(Hours);
  let val = parseInt(Hours);
  switch (val) {
    case 1:
      console.log(array1.length);
      if (array1.length <= 4) array1.push(Teacher);
      else if (array2.length <= 4) array2.push(Teacher);
      else if (array3.length <= 4) array3.push(Teacher);
      else if (array4.length <= 4) array4.push(Teacher);
      else if (array5.length <= 4) array5.push(Teacher);
      else if (array6.length <= 4) array6.push(Teacher);
      else console.log("value not push");

      break;
    case 2:
      if (array1.length <= 4) {
        array1.push(Teacher);
        if (array2.length <= 4) array2.push(Teacher);
        else array3.push(Teacher);
      } else if (array2.length <= 4) {
        array2.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
      } else if (array3.length <= 4) {
        array3.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
      } else if (array4.length <= 4) {
        array4.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
      } else if (array5.length <= 4) {
        array5.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array6.length <= 4) {
        array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        // if (array3.length <= 4) array3.push(Teacher);
      } else console.log("value not push");
      break;
    case 3:
      if (array1.length <= 4) {
        array1.push(Teacher);
        if (array2.length <= 4) array2.push(Teacher);
        else array3.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
      } else if (array2.length <= 4) {
        array2.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
      } else if (array3.length <= 4) {
        array3.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
      } else if (array4.length <= 4) {
        array4.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array5.length <= 4) {
        array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array6.length <= 4) {
        array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      }
      // if (array3.length <= 4) array3.push(Teacher);
      else console.log("value not push");
      break;
    case 4:
      if (array1.length <= 4) {
        array1.push(Teacher);
        if (array2.length <= 4) array2.push(Teacher);
        else array3.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
      } else if (array2.length <= 4) {
        array2.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
      } else if (array3.length <= 4) {
        array3.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array4.length <= 4) {
        array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array5.length <= 4) {
        array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array6.length <= 4) {
        array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      }
      // if (array3.length <= 4) array3.push(Teacher);
      else console.log("value not push");

      break;
    case 5:
      if (array1.length <= 4) {
        array1.push(Teacher);
        if (array2.length <= 4) array2.push(Teacher);
        else array3.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array5.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
      } else if (array2.length <= 4) {
        array2.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array3.length <= 4) {
        array3.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array4.length <= 4) {
        array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array5.length <= 4) {
        array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array6.length <= 4) {
        array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      }
      // if (array3.length <= 4) array3.push(Teacher);
      else console.log("value not push");
      break;
    case 6:
      if (array1.length <= 4) {
        array1.push(Teacher);
        if (array2.length <= 4) array2.push(Teacher);
        else array3.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array2.length <= 4) {
        array2.push(Teacher);
        if (array2.length <= 4) array2.push(Teacher);
        else array3.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array3.length <= 4) {
        array3.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array4.length <= 4) {
        array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array5.length <= 4) {
        array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array6.length <= 4) {
        array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      }
      break;

    default:
      console.log("hai");
      break;
  }
  console.log(array1);
  console.log(array2);
  console.log(array3);
  console.log(array4);
  console.log(array5);
  console.log(array6);

  // array2.push(Teacher);
  // array3.push(Teacher);
  // array4.push(Teacher);
  // array5.push(Teacher);
  // array6.push(Teacher);
  // console.log(userObject);
  // Object1.pushedObject = userObject;
  // console.log(Object1);

  // Display or further process the created object

  // Store array data in the session
  sessionStorage.setItem("array1", JSON.stringify(array1));
  sessionStorage.setItem("array2", JSON.stringify(array2));
  sessionStorage.setItem("array3", JSON.stringify(array3));
  sessionStorage.setItem("array4", JSON.stringify(array4));
  sessionStorage.setItem("array5", JSON.stringify(array5));
  sessionStorage.setItem("array6", JSON.stringify(array6));
}
function getinput1() {
  // let subject = document.getElementById("TextBox1").value;

  // let dropdownValue = document.getElementById("Dropdown1").value;
  // let val = parseInt(dropdownValue);

  const Subject = document.getElementById("TextBoxt2").value;
  const Teacher = document.getElementById("TextBoxt22").value;
  const Hours = document.getElementById("Dropdownt21").value;

  // Disable the button to prevent multiple clicks
  // document.getElementById("ad1").disabled = false;

  // Create the object
  // Object.assign(userObject,{
  //   const userObject={
  //   subject: Subject,
  //   teacher: Teacher,
  //   hours: Hours,
  // };
  // for (let i = arrays[0]; i < arrays.length; i++)
  console.log(Hours);
  let val = parseInt(Hours);
  switch (val) {
    case 1:
      console.log(arrayt21.length);
      if (arrayt21.length <= 4) arrayt21.push(Teacher);
      else if (arrayt22.length <= 4) arrayt22.push(Teacher);
      else if (arrayt23.length <= 4) arrayt23.push(Teacher);
      else if (arrayt24.length <= 4) arrayt24.push(Teacher);
      else if (arrayt25.length <= 4) arrayt25.push(Teacher);
      else if (arrayt26.length <= 4) arrayt26.push(Teacher);
      else console.log("value not push");

      break;
    case 2:
      if (arrayt21.length <= 4) {
        arrayt21.push(Teacher);
        if (arrayt22.length <= 4) arrayt22.push(Teacher);
        else arrayt23.push(Teacher);
      } else if (arrayt22.length <= 4) {
        arrayt22.push(Teacher);
        if (arrayt23.length <= 4) arrayt23.push(Teacher);
        else arrayt24.push(Teacher);
      } else if (arrayt23.length <= 4) {
        arrayt23.push(Teacher);
        if (arrayt24.length <= 4) arrayt24.push(Teacher);
        else arrayt25.push(Teacher);
      } else if (arrayt24.length <= 4) {
        arrayt24.push(Teacher);
        if (arrayt25.length <= 4) arrayt25.push(Teacher);
        else arrayt26.push(Teacher);
      } else if (arrayt25.length <= 4) {
        arrayt25.push(Teacher);
        if (arrayt26.length <= 4) arrayt26.push(Teacher);
      } else if (arrayt26.length <= 4) {
        arrayt26.push(Teacher);
        if (arrayt26.length <= 4) arrayt26.push(Teacher);
        // if (array3.length <= 4) array3.push(Teacher);
      } else console.log("value not push");
      break;
    case 3:
      if (array1.length <= 4) {
        array1.push(Teacher);
        if (array2.length <= 4) array2.push(Teacher);
        else array3.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
      } else if (array2.length <= 4) {
        array2.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
      } else if (array3.length <= 4) {
        array3.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
      } else if (array4.length <= 4) {
        array4.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array5.length <= 4) {
        array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array6.length <= 4) {
        array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      }
      // if (array3.length <= 4) array3.push(Teacher);
      else console.log("value not push");
      break;
    case 4:
      if (array1.length <= 4) {
        array1.push(Teacher);
        if (array2.length <= 4) array2.push(Teacher);
        else array3.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
      } else if (array2.length <= 4) {
        array2.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
      } else if (array3.length <= 4) {
        array3.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array4.length <= 4) {
        array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array5.length <= 4) {
        array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array6.length <= 4) {
        array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      }
      // if (array3.length <= 4) array3.push(Teacher);
      else console.log("value not push");

      break;
    case 5:
      if (array1.length <= 4) {
        array1.push(Teacher);
        if (array2.length <= 4) array2.push(Teacher);
        else array3.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array5.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
      } else if (array2.length <= 4) {
        array2.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array3.length <= 4) {
        array3.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array4.length <= 4) {
        array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array5.length <= 4) {
        array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array6.length <= 4) {
        array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      }
      // if (array3.length <= 4) array3.push(Teacher);
      else console.log("value not push");
      break;
    case 6:
      if (array1.length <= 4) {
        array1.push(Teacher);
        if (array2.length <= 4) array2.push(Teacher);
        else array3.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array2.length <= 4) {
        array2.push(Teacher);
        if (array2.length <= 4) array2.push(Teacher);
        else array3.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array3.length <= 4) {
        array3.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array3.length <= 4) array3.push(Teacher);
        else array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array4.length <= 4) {
        array4.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array4.length <= 4) array4.push(Teacher);
        else array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array5.length <= 4) {
        array5.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array5.length <= 4) array5.push(Teacher);
        else array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      } else if (array6.length <= 4) {
        array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
        if (array6.length <= 4) array6.push(Teacher);
      }
      break;

    default:
      console.log("hai");
      break;
  }
  console.log(arrayt21);
  console.log(arrayt22);
  console.log(arrayt23);
  console.log(arrayt24);
  console.log(arrayt25);
  console.log(arrayt26);

  // array2.push(Teacher);
  // array3.push(Teacher);
  // array4.push(Teacher);
  // array5.push(Teacher);
  // array6.push(Teacher);
  // console.log(userObject);
  // Object1.pushedObject = userObject;
  // console.log(Object1);

  // Display or further process the created object

  // Store array data in the session
  sessionStorage.setItem("arrayt21", JSON.stringify(array1));
  sessionStorage.setItem("arrayt22", JSON.stringify(array2));
  sessionStorage.setItem("arrayt23", JSON.stringify(array3));
  sessionStorage.setItem("arrayt24", JSON.stringify(array4));
  sessionStorage.setItem("arrayt25", JSON.stringify(array5));
  sessionStorage.setItem("arrayt26", JSON.stringify(array6));
}

function redirectToStudentPage() {
  // Check a condition here, for example, if the user has clicked a specific button.
  // In this example, assuming a hypothetical button with the id "finalButton" triggers the redirect.
  let conditionMet = true; // Update this based on your condition.

  if (conditionMet) {
    // Redirect to the student page
    window.location.href = "./student.html";
  } else {
    console.log("Condition not met. Keep accumulating values.");
  }
}

let input = document.getElementById("ad1");
input.addEventListener("click", getinput);
// input = document.getElementById("adt21");
// input.addEventListener("click", getinput1);

let input1 = document.getElementById("ad2");
input1.addEventListener("click", getlap);
// input1 = document.getElementById("adt22");
// input1.addEventListener("click", getlap1);

// Assuming there's a button triggering the final redirect
const finalButton = document.getElementById("sub1");
finalButton.addEventListener("click", redirectToStudentPage);
