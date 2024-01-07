import * as i from "./name1.js";
// import { arrayt11, arrayt12, arrayt13, arrayt14, arrayt15 } from "./get.js";
// file2.js

// Retrieve data from local storage
// file2.js

// Retrieve array data from the session
let array2 = JSON.parse(sessionStorage.getItem("array2")) || [];
let array3 = JSON.parse(sessionStorage.getItem("array3")) || [];
let array4 = JSON.parse(sessionStorage.getItem("array4")) || [];
let array1 = JSON.parse(sessionStorage.getItem("array1")) || [];
let array5 = JSON.parse(sessionStorage.getItem("array5")) || [];
let array6 = JSON.parse(sessionStorage.getItem("array6")) || [];
let Arrayt21 = JSON.parse(sessionStorage.getItem("arrayt21")) || [];
let Arrayt22 = JSON.parse(sessionStorage.getItem("arrayt22")) || [];
let Arrayt23 = JSON.parse(sessionStorage.getItem("arrayt23")) || [];
let Arrayt24 = JSON.parse(sessionStorage.getItem("arrayt24")) || [];
let Arrayt25 = JSON.parse(sessionStorage.getItem("arrayt25")) || [];
let Arrayt26 = JSON.parse(sessionStorage.getItem("arrayt26")) || [];
let lab = JSON.parse(sessionStorage.getItem("lab")) || [];
let lab2 = JSON.parse(sessionStorage.getItem("lab2")) || [];

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);
console.log(array6);
console.log(Arrayt21);
console.log(Arrayt22);
console.log(Arrayt23);
console.log(Arrayt24);
console.log(Arrayt25);
console.log(Arrayt26);
console.log(lab);
console.log(lab2);

// function main1() {
//   let h = i.getRandomValueFromArray(arrayt11);
//   console.log(h);
//   let outputElement = document.getElementById("co1");
//   let message = h;
//   outputElement.textContent = message;

// }

var row1 = [];
var row2 = [];
var row3 = [];
var row4 = [];
var row5 = [];
var row6 = [];
var rowt21 = [];
var rowt22 = [];
var rowt23 = [];
var rowt24 = [];
var rowt25 = [];
var rowt26 = [];
var rowt31 = [];
var rowt32 = [];
var rowt33 = [];
var rowt34 = [];
var rowt35 = [];
var rowt36 = [];
var rowt41 = [];
var rowt42 = [];
var rowt43 = [];
var rowt44 = [];
var rowt45 = [];
var rowt46 = [];

// function ma() {
//   var array11 = i.getSelectedValue()
//   console.log(array11[0],array11[1]);

// }
function main() {
  console.log(array1);

  let arrayt11 = Array.from(array1);

  row1 = i.getRandomArray(arrayt11);
  // let a = [row1[0]];
  // arrayt11 = i.valcheck(a, arrayt11);
  // row1[1] = i.getRandomValueFromArray(arrayt11);
  // let b = [row1[1]];
  // arrayt11 = i.valcheck(b, arrayt11);
  // row1[2] = i.getRandomValueFromArray(arrayt11);
  // let c = [row1[2]];
  // arrayt11 = i.valcheck(c, arrayt11);
  // row1[3] = i.getRandomValueFromArray(arrayt11);
  // let d = [row1[3]];
  // arrayt11 = i.valcheck(d, arrayt11);
  // row1[4] = i.getRandomValueFromArray(arrayt11);

  i.changelab(lab, row1);

  //-----------first row--------------------

  let outputElement = document.getElementById("co1");
  let message = row1[0];
  outputElement.textContent = message;
  let outputElement1 = document.getElementById("co2");
  let message1 = row1[1];
  outputElement1.textContent = message1;
  let outputElement2 = document.getElementById("co3");
  let message2 = row1[2];
  outputElement2.textContent = message2;
  let outputElement3 = document.getElementById("co4");
  let message3 = row1[3];
  outputElement3.textContent = message3;
  let outputElement4 = document.getElementById("co5");
  let message4 = row1[4];
  outputElement4.textContent = message4;

  //----------------secont row-----------
  let arrayt12 = Array.from(array2);

  row2 = i.getRandomArray(arrayt12);
  // a = [row2[0]];
  // arrayt12 = i.valcheck(a, arrayt12);
  // row2[1] = i.getRandomValueFromArray(arrayt12);
  // b = [row2[1]];
  // arrayt12 = i.valcheck(b, arrayt12);
  // row2[2] = i.getRandomValueFromArray(arrayt12);
  // c = [row2[2]];
  // arrayt12 = i.valcheck(c, arrayt12);
  // row2[3] = i.getRandomValueFromArray(arrayt12);
  // d = [row2[3]];
  // arrayt12 = i.valcheck(d, arrayt12);
  // row2[4] = i.getRandomValueFromArray(arrayt12);
  i.changelab(lab, row2);

  outputElement = document.getElementById("co6");
  message = row2[0];
  outputElement.textContent = message;
  outputElement1 = document.getElementById("co7");
  message1 = row2[1];
  outputElement1.textContent = message1;
  outputElement2 = document.getElementById("co8");
  message2 = row2[2];
  outputElement2.textContent = message2;
  outputElement3 = document.getElementById("co9");
  message3 = row2[3];
  outputElement3.textContent = message3;
  outputElement4 = document.getElementById("co10");
  message4 = row2[4];
  outputElement4.textContent = message4;
  //----------------third row-----------
  let arrayt13 = Array.from(array3);
  row3 = i.getRandomArray(arrayt13);
  // a = [row3[0]];
  // arrayt13 = i.valcheck(a, arrayt13);
  // row3[1] = i.getRandomValueFromArray(arrayt13);
  // b = [row3[1]];
  // arrayt13 = i.valcheck(b, arrayt13);
  // row3[2] = i.getRandomValueFromArray(arrayt13);
  // c = [row3[2]];
  // arrayt13 = i.valcheck(c, arrayt13);
  // row3[3] = i.getRandomValueFromArray(arrayt13);
  // d = [row3[3]];
  // arrayt13 = i.valcheck(d, arrayt13);
  // row3[4] = i.getRandomValueFromArray(arrayt13);
  // i.changelab(row3);
  outputElement = document.getElementById("co11");
  message = row3[0];
  outputElement.textContent = message;
  outputElement1 = document.getElementById("co12");
  message1 = row3[1];
  outputElement1.textContent = message1;
  outputElement2 = document.getElementById("co13");
  message2 = row3[2];
  outputElement2.textContent = message2;
  outputElement3 = document.getElementById("co14");
  message3 = row3[3];
  outputElement3.textContent = message3;
  outputElement4 = document.getElementById("co15");
  message4 = row3[4];
  outputElement4.textContent = message4;
  //----------------fourth row-----------
  let arrayt14 = Array.from(array4);
  row4 = i.getRandomArray(arrayt14);
  // a = [row4[0]];
  // arrayt14 = i.valcheck(a, arrayt14);
  // row4[1] = i.getRandomValueFromArray(arrayt14);
  // b = [row4[1]];
  // arrayt14 = i.valcheck(b, arrayt14);
  // row4[2] = i.getRandomValueFromArray(arrayt14);
  // c = [row4[2]];
  // arrayt14 = i.valcheck(c, arrayt14);
  // row4[3] = i.getRandomValueFromArray(arrayt14);
  // d = [row4[3]];
  // arrayt14 = i.valcheck(d, arrayt14);
  // row4[4] = i.getRandomValueFromArray(arrayt14);
  outputElement = document.getElementById("co16");
  message = row4[0];
  outputElement.textContent = message;
  outputElement1 = document.getElementById("co17");
  message1 = row4[1];
  outputElement1.textContent = message1;
  outputElement2 = document.getElementById("co18");
  message2 = row4[2];
  outputElement2.textContent = message2;
  outputElement3 = document.getElementById("co19");
  message3 = row4[3];
  outputElement3.textContent = message3;
  outputElement4 = document.getElementById("co20");
  message4 = row4[4];
  outputElement4.textContent = message4;
  //----------------fivth row-----------
  let arrayt15 = Array.from(array5);
  row5 = i.getRandomArray(arrayt15);
  // a = [row5[0]];
  // arrayt15 = i.valcheck(a, arrayt15);
  // row5[1] = i.getRandomValueFromArray(arrayt15);
  // b = [row5[1]];
  // arrayt15 = i.valcheck(b, arrayt15);
  // row5[2] = i.getRandomValueFromArray(arrayt15);
  // c = [row5[2]];
  // arrayt15 = i.valcheck(c, arrayt15);
  // row5[3] = i.getRandomValueFromArray(arrayt15);
  // d = [row5[3]];
  // arrayt15 = i.valcheck(d, arrayt15);
  // row5[4] = i.getRandomValueFromArray(arrayt15);
  // i.changelab(row5);
  outputElement = document.getElementById("co21");
  message = row5[0];
  outputElement.textContent = message;
  outputElement1 = document.getElementById("co22");
  message1 = row5[1];
  outputElement1.textContent = message1;
  outputElement2 = document.getElementById("co23");
  message2 = row5[2];
  outputElement2.textContent = message2;
  outputElement3 = document.getElementById("co24");
  message3 = row5[3];
  outputElement3.textContent = message3;
  outputElement4 = document.getElementById("co25");
  message4 = row5[4];
  outputElement4.textContent = message4;
  //----------sixth row----------
  let arrayt16 = Array.from(array6);
  row6 = i.getRandomArray(arrayt16);
  // a = [row6[0]];
  // arrayt16 = i.valcheck(a, arrayt16);
  // row6[1] = i.getRandomValueFromArray(arrayt16);
  // b = [row6[1]];
  // arrayt16 = i.valcheck(b, arrayt16);
  // row6[2] = i.getRandomValueFromArray(arrayt16);
  // c = [row6[2]];
  // arrayt16 = i.valcheck(c, arrayt16);
  // row6[3] = i.getRandomValueFromArray(arrayt16);
  // d = [row6[3]];
  // arrayt16 = i.valcheck(d, arrayt16);
  // row6[4] = i.getRandomValueFromArray(arrayt16);
  outputElement = document.getElementById("co26");
  message = row6[0];
  outputElement.textContent = message;
  outputElement1 = document.getElementById("co27");
  message1 = row6[1];
  outputElement1.textContent = message1;
  outputElement2 = document.getElementById("co28");
  message2 = row6[2];
  outputElement2.textContent = message2;
  outputElement3 = document.getElementById("co29");
  message3 = row6[3];
  outputElement3.textContent = message3;
  outputElement4 = document.getElementById("co30");
  message4 = row6[4];
  outputElement4.textContent = message4;
}

function main2() {
  let arrayt21 = Array.from(Arrayt21);
  let newarray = i.getRandomArray(arrayt21);
  i.changelab(lab2, newarray);
  console.log(newarray);
  console.log(row1);

  let a = i.findMatchingIndices(newarray, row1);
  console.log(a);
  console.log(a.length);
  if (a.length == 1) {
    let d = i.swapWithFirst(newarray, [a]);
    console.log(newarray);
  } else if (a.length == 2) {
    let b = i.swapArrayElements(newarray, [a]);
    console.log(newarray);
  } else if (a.length == 0) {
    console.log("array valve enter else ");
  } else {
    console.log("array valve not swap ");
  }

  let outputElement = document.getElementById("c01");
  let message = newarray[0];
  outputElement.textContent = message;
  let outputElement1 = document.getElementById("c02");
  let message1 = newarray[1];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("c03");
  message1 = newarray[2];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("c04");
  message1 = newarray[3];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("c05");
  message1 = newarray[4];
  outputElement1.textContent = message1;
  //------------secont row-------
  let arrayt22 = Array.from(Arrayt22);
  newarray = i.getRandomArray(arrayt22);
  i.changelab(lab2, newarray);
  console.log(newarray);
  console.log(row2);

  a = i.findMatchingIndices(newarray, row2);
  console.log(a);
  console.log(a.length);
  if (a.length == 1) {
    let d = i.swapWithFirst(newarray, [a]);
    console.log(newarray);
  } else if (a.length == 2) {
    let b = i.swapArrayElements(newarray, [a]);
    console.log(newarray);
  } else if (a.length == 0) {
    console.log("array valve enter else ");
  } else {
    console.log("array valve not swap ");
  }
  outputElement = document.getElementById("c06");
  message = newarray[0];
  outputElement.textContent = message;
  outputElement1 = document.getElementById("c07");
  message1 = newarray[1];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("c08");
  message1 = newarray[2];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("c09");
  message1 = newarray[3];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("c010");
  message1 = newarray[4];
  outputElement1.textContent = message1;
  //---------third row------------
  let arrayt23 = Array.from(Arrayt23);
 let newarray3 = i.getRandomArray(arrayt23);
  // i.changelab(lab2, newarray);
  console.log(newarray3);
  console.log(row3);

  a = i.findMatchingIndices(newarray3, row3);
  console.log(a);
  console.log(a.length);
  if (a.length == 1) {
    let d = i.swapWithFirst(newarray3, [a]);
    console.log(newarray3);
  } else if (a.length == 2) {
    let b = i.swapArrayElements(newarray3, [a]);
    console.log(newarray3);
  } else if (a == 0) {
    console.log("array valve enter else ");
  } else {3
    console.log("array valve not swap ");
  }
  outputElement = document.getElementById("c011");
  message = newarray3[0];
  outputElement.textContent = message;
  outputElement1 = document.getElementById("c012");
  message1 = newarray3[1];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("c013");
  message1 = newarray3[2];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("c014");
  message1 = newarray3[3];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("c015");
  message1 = newarray3[4];
  outputElement1.textContent = message1;
  //----------fourth row------------
  let arrayt24 = Arrayt24;
  a = [row4[0]];
  arrayt24 = i.valcheck(a, arrayt24);
  rowt24[0] = i.getRandomValueFromArray(arrayt24);
  a1 = [rowt24[0]];
  arrayt24 = i.valcheck(a1, arrayt24);
  rowt24[1] = i.getRandomValueFromArray(arrayt24);
  outputElement = document.getElementById("c016");
  message = rowt24[0];
  outputElement.textContent = message;
  outputElement1 = document.getElementById("c017");
  message1 = rowt24[1];
  outputElement1.textContent = message1;
  //------fivth row----
  let arrayt25 = Arrayt25;
  a = [row5[0]];
  arrayt25 = i.valcheck(a, arrayt25);
  rowt25[0] = i.getRandomValueFromArray(arrayt25);
  a1 = [rowt25[0]];
  arrayt25 = i.valcheck(a1, arrayt25);
  rowt25[1] = i.getRandomValueFromArray(arrayt25);
  outputElement = document.getElementById("c021");
  message = rowt25[0];
  outputElement.textContent = message;
  outputElement1 = document.getElementById("c022");
  message1 = rowt25[1];
  outputElement1.textContent = message1;
  //------------sixth row---------
  let arrayt26 = Arrayt26;
  a = [row6[0]];
  arrayt26 = i.valcheck(a, arrayt26);
  rowt26[0] = i.getRandomValueFromArray(arrayt26);
  a1 = [rowt26[0]];
  arrayt26 = i.valcheck(a1, arrayt26);
  rowt26[1] = i.getRandomValueFromArray(arrayt26);
  outputElement = document.getElementById("c026");
  message = rowt26[0];
  outputElement.textContent = message;
  outputElement1 = document.getElementById("c027");
  message1 = rowt26[1];
  outputElement1.textContent = message1;
}
function main3() {
  //------------first row-------
  let arrayt31 = ["Lab", "Lab", "Lab"];
  i.changelab(arrayt31);
  let c = [row1[2], rowt21[2]];
  arrayt31 = i.valcheck(c, arrayt31);
  rowt31[2] = i.getRandomValueFromArray(arrayt31);
  let c3 = [rowt31[2], row1[3], rowt21[3]];
  arrayt31 = i.valcheck(c3, arrayt31);
  rowt31[3] = i.getRandomValueFromArray(arrayt31);
  let d3 = [rowt31[2], row1[4], rowt21[4], rowt31[3]];
  arrayt31 = i.valcheck(d3, arrayt31);
  rowt31[4] = i.getRandomValueFromArray(arrayt31);
  let outputElement1 = document.getElementById("03");
  let message1 = rowt31[2];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("04");
  message1 = rowt31[3];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("05");
  message1 = rowt31[4];
  outputElement1.textContent = message1;
  //--------------second row-------
  let arrayt32 = ["RM", "MM"];
  c = [row2[2], rowt22[2]];
  arrayt32 = i.valcheck(c, arrayt32);
  rowt32[2] = i.getRandomValueFromArray(arrayt32);
  c3 = [rowt32[2], row2[3], rowt22[3]];
  arrayt32 = i.valcheck(c3, arrayt32);
  rowt32[3] = i.getRandomValueFromArray(arrayt32);
  d3 = [rowt32[2], row2[4], rowt22[4], rowt32[3]];
  arrayt32 = i.valcheck(d3, arrayt32);
  rowt32[4] = i.getRandomValueFromArray(arrayt32);
  outputElement1 = document.getElementById("08");
  message1 = rowt32[2];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("09");
  message1 = rowt32[3];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("010");
  message1 = rowt32[4];
  outputElement1.textContent = message1;
  //-------third row----------
  let arrayt33 = ["RM", "MM"];
  c = [row3[2], rowt23[2]];
  arrayt33 = i.valcheck(c, arrayt33);
  rowt33[2] = i.getRandomValueFromArray(arrayt33);
  c3 = [rowt33[2], row3[3], rowt23[3]];
  arrayt33 = i.valcheck(c3, arrayt33);
  rowt33[3] = i.getRandomValueFromArray(arrayt33);
  d3 = [rowt33[2], row3[4], rowt23[4], rowt33[3]];
  arrayt33 = i.valcheck(d3, arrayt33);
  rowt33[4] = i.getRandomValueFromArray(arrayt33);
  outputElement1 = document.getElementById("013");
  message1 = rowt33[2];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("014");
  message1 = rowt33[3];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("015");
  message1 = rowt33[4];
  outputElement1.textContent = message1;
  //-------------fourth row------------
  let arrayt34 = ["RM", "Lab", "Lab"];
  c = [row4[2], rowt24[2]];
  arrayt34 = i.valcheck(c, arrayt34);
  rowt34[2] = i.getRandomValueFromArray(arrayt34);
  c3 = [rowt34[2], row4[3], rowt24[3]];
  arrayt34 = i.valcheck(c3, arrayt34);
  rowt34[3] = i.getRandomValueFromArray(arrayt34);
  d3 = [rowt34[2], row4[4], rowt24[4], rowt34[3]];
  console.log(arrayt34);
  arrayt34 = i.valcheck(d3, arrayt34);
  rowt34[4] = i.getRandomValueFromArray(arrayt34);
  // i.changelab(rowt34);
  i.changelab(rowt34);
  outputElement1 = document.getElementById("018");
  message1 = rowt34[2];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("019");
  message1 = rowt34[3];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("020");
  message1 = rowt34[4];
  outputElement1.textContent = message1;

  //-------------fivth row------------
  let arrayt35 = ["RM", "RM"];
  c = [row5[2], rowt25[2]];
  arrayt35 = i.valcheck(c, arrayt35);
  rowt35[2] = i.getRandomValueFromArray(arrayt35);
  c3 = [rowt35[2], row5[3], rowt25[3]];
  arrayt35 = i.valcheck(c3, arrayt35);
  rowt35[3] = i.getRandomValueFromArray(arrayt35);
  d3 = [rowt35[2], row5[4], rowt25[4], rowt35[3]];
  arrayt35 = i.valcheck(d3, arrayt35);
  console.log(arrayt34);
  rowt35[4] = i.getRandomValueFromArray(arrayt35);
  // changelab(rowt35);
  outputElement1 = document.getElementById("023");
  message1 = rowt35[2];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("024");
  message1 = rowt35[3];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("025");
  message1 = rowt35[4];
  outputElement1.textContent = message1;
  //-------------six row------------
  let arrayt36 = ["RM", "RM"];
  c = [row6[2], rowt26[2]];
  arrayt36 = i.valcheck(c, arrayt36);
  rowt36[2] = i.getRandomValueFromArray(arrayt36);
  c3 = [rowt36[2], row6[3], rowt26[3]];
  arrayt36 = i.valcheck(c3, arrayt36);
  rowt36[3] = i.getRandomValueFromArray(arrayt36);
  d3 = [rowt36[2], row6[4], rowt26[4], rowt36[3]];
  arrayt36 = i.valcheck(d3, arrayt36);
  rowt36[4] = i.getRandomValueFromArray(arrayt36);
  // changelab(rowt35);
  outputElement1 = document.getElementById("028");
  message1 = rowt36[2];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("029");
  message1 = rowt36[3];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("030");
  message1 = rowt36[4];
  outputElement1.textContent = message1;
}
function main4() {
  //------------first row-------
  let arrayt41 = ["KK", "MM"];
  let c = [row1[2], rowt21[2]];
  arrayt41 = i.valcheck(c, arrayt41);
  rowt41[2] = i.getRandomValueFromArray(arrayt41);
  let c3 = [rowt41[2], row1[3], rowt21[3]];
  arrayt41 = i.valcheck(c3, arrayt41);
  rowt41[3] = i.getRandomValueFromArray(arrayt41);
  let d3 = [rowt41[2], row1[4], rowt21[4], rowt41[3]];
  arrayt41 = i.valcheck(d3, arrayt41);
  rowt41[4] = i.getRandomValueFromArray(arrayt41);
  let outputElement1 = document.getElementById("t03");
  let message1 = rowt41[2];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("t04");
  message1 = rowt41[3];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("t05");
  message1 = rowt41[4];
  outputElement1.textContent = message1;
  //--------------second row-------
  let arrayt42 = ["KK", "MM"];
  c = [row2[2], rowt22[2], rowt32[2]];
  arrayt42 = i.valcheck(c, arrayt42);
  rowt42[2] = i.getRandomValueFromArray(arrayt42);
  c3 = [rowt42[2], row2[3], rowt22[3], rowt32[3]];
  arrayt42 = i.valcheck(c3, arrayt42);
  rowt42[3] = i.getRandomValueFromArray(arrayt42);
  d3 = [rowt42[2], row2[4], rowt22[4], rowt42[3], rowt32[4]];
  arrayt42 = i.valcheck(d3, arrayt42);
  rowt42[4] = i.getRandomValueFromArray(arrayt42);
  outputElement1 = document.getElementById("t08");
  message1 = rowt42[2];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("t09");
  message1 = rowt42[3];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("t010");
  message1 = rowt42[4];
  outputElement1.textContent = message1;
  //-------third row----------
  let arrayt43 = ["KK", "MM"];
  c = [row3[2], rowt23[2]];
  arrayt43 = i.valcheck(c, arrayt43);
  rowt43[2] = i.getRandomValueFromArray(arrayt43);
  c3 = [rowt43[2], row3[3], rowt23[3]];
  arrayt43 = i.valcheck(c3, arrayt43);
  rowt43[3] = i.getRandomValueFromArray(arrayt43);
  d3 = [rowt43[2], row3[4], rowt23[4], rowt43[3]];
  arrayt43 = i.valcheck(d3, arrayt43);
  rowt43[4] = i.getRandomValueFromArray(arrayt43);
  outputElement1 = document.getElementById("t013");
  message1 = rowt43[2];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("t014");
  message1 = rowt43[3];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("t015");
  message1 = rowt43[4];
  outputElement1.textContent = message1;
  //-------------fourth row------------
  let arrayt44 = ["Lab", "Lab", "Lab"];
  i.changelab(arrayt44);
  c = [row4[2], rowt24[2]];
  arrayt44 = i.valcheck(c, arrayt44);
  rowt44[2] = i.getRandomValueFromArray(arrayt44);
  c3 = [rowt44[2], row4[3], rowt24[3]];
  arrayt44 = i.valcheck(c3, arrayt44);
  rowt44[3] = i.getRandomValueFromArray(arrayt44);
  d3 = [rowt44[2], row4[4], rowt24[4], rowt44[3]];
  arrayt44 = i.valcheck(d3, arrayt44);
  rowt44[4] = i.getRandomValueFromArray(arrayt44);
  console.log(rowt44);
  // i.changelab(rowt34);
  outputElement1 = document.getElementById("t018");
  message1 = rowt44[2];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("t019");
  message1 = rowt44[3];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("t020");
  message1 = rowt44[4];
  outputElement1.textContent = message1;

  //-------------fivth row------------
  let arrayt45 = ["KK", "MM"];
  c = [row5[2], rowt25[2]];
  arrayt45 = i.valcheck(c, arrayt45);
  rowt45[2] = i.getRandomValueFromArray(arrayt45);
  c3 = [rowt45[2], row5[3], rowt25[3]];
  arrayt45 = i.valcheck(c3, arrayt45);
  rowt45[3] = i.getRandomValueFromArray(arrayt45);
  d3 = [rowt45[2], row5[4], rowt25[4], rowt45[3]];
  arrayt45 = i.valcheck(d3, arrayt45);
  rowt45[4] = i.getRandomValueFromArray(arrayt45);
  // changelab(rowt35);
  outputElement1 = document.getElementById("t023");
  message1 = rowt45[2];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("t024");
  message1 = rowt45[3];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("t025");
  message1 = rowt45[4];
  outputElement1.textContent = message1;
  //-------------six row------------
  let arrayt46 = ["KK"];
  c = [row6[2], rowt26[2]];
  arrayt46 = i.valcheck(c, arrayt46);
  rowt46[2] = i.getRandomValueFromArray(arrayt46);
  c3 = [rowt46[2], row6[3], rowt26[3]];
  arrayt46 = i.valcheck(c3, arrayt46);
  rowt46[3] = i.getRandomValueFromArray(arrayt46);
  d3 = [rowt46[2], row6[4], rowt26[4], rowt46[3]];
  arrayt46 = i.valcheck(d3, arrayt46);
  rowt46[4] = i.getRandomValueFromArray(arrayt46);
  // changelab(rowt35);
  outputElement1 = document.getElementById("t028");
  message1 = rowt46[2];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("t029");
  message1 = rowt46[3];
  outputElement1.textContent = message1;
  outputElement1 = document.getElementById("t030");
  message1 = rowt46[4];
  outputElement1.textContent = message1;
}
const refersh1 = document.getElementById("re1");
let re = refersh1.addEventListener("click", main);
const refersh2 = document.getElementById("re2");
re = refersh2.addEventListener("click", main2);
const refersh3 = document.getElementById("re3");
re = refersh3.addEventListener("click", main3);
const refersh4 = document.getElementById("re4");
re = refersh4.addEventListener("click", main4);
// const add1 = document.getElementById("ad1");
// re = add1.addEventListener("click", ma);
