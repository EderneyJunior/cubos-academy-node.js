//const arrayA = [5, 32, 3, 44, 1];
//const arrayB = [57, 4, 21, 2, 13];

const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];

for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] < arrayB[i]) {
        console.log(arrayA[i])
    } else {
        console.log(arrayB[i])
    }
}