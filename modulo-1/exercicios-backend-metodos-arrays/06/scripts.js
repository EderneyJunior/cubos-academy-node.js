const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function encontarPets(lista, pet) {
    let posicao = -1
    for (let item = 0; item <  lista.length; item++) {
        if (lista[item].pets.indexOf(pet) != -1) {
            posicao = item
        }
    }

    if (posicao == -1) {
        console.log(`Que pena ${pet}, não encontramos seu dono(a)`)
    } else {
        nomeDoDono = lista[posicao].nome
        console.log(`O dono(a) do(a) ${pet} é o(a) ${nomeDoDono}`)
    }
}

encontarPets(usuarios, 'Naninha')