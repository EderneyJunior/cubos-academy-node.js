//const filaDeDentro = ["Jose", "Maria", "Joao"];
//const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

while (filaDeDentro.length < 5) {
    if (filaDeFora.length == 0) {
        break
    } else {
    filaDeDentro.push(filaDeFora[0])
    filaDeFora.shift()
    }
}

    console.log(filaDeDentro)
    console.log(filaDeFora)