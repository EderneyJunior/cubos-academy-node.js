const usuarios = [
    {
        nome: "João",
        pets: [],
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

for (let pet of usuarios) {
    if (pet.pets.length == 0) {
        console.log(`Sou ${pet.nome} e não tenho pets`)
    } else if (pet.pets.length == 1) {
        console.log(`Sou ${pet.nome} e tenho 1 pet`)
    } else {
        console.log(`Sou ${pet.nome} e tenho ${pet.pets.length} pets`)
    }
}