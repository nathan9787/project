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
changelab()