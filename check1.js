function valcheck(array, originalArray) {

    array.forEach((i) => {
        // console.log(i);
        // console.log(originalArray);
        let a = originalArray.indexOf(i);
        // console.log(a);
        originalArray.splice(a, 1);
        // console.log(originalArray);
    })
    return originalArray;

}

function getRandomValueFromArray(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function main() {
    let array1 = [4, 2];
    let originalArray1 = [1, 2, 3, 4, 5]
    let tabvalues = valcheck(array1, originalArray1);
    console.log(tabvalues);
    let randomValue = getRandomValueFromArray(tabvalues);
    console.log(randomValue);
    let a = []
    let array = [randomValue];
    console.log(array);

    console.log(originalArray1);
    let originalArray11 = valcheck(array, originalArray1);
    console.log(originalArray11);
    let array10 = [2, 1];
    let array22 = [1,7];
    console.log(array22);
    let tabvalues1 = valcheck(array10, array22);
    console.log(tabvalues1);
    

}
main()
// const randomValue2=(tabvalues) => {
//     if (arr.length === 0) {
//         return undefined; // Return undefined for an empty array
//     }
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     return arr[randomIndex];
// }

