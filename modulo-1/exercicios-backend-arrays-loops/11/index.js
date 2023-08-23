const original = [5, 7, 13, 17, 26, 343, 118, 245];
const entre = []

for (let i of original) {
    if (i >= 10 && i <= 20 || i > 100) {
        entre.push(i)
    }
}

console.log(entre)