const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const letraA = []

for (let i of nomes) {
    if (i[0] == 'A' || i[0] == 'a') {
        letraA.push(i)
    }
}

console.log(letraA)