const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = []
const adultos = []

for (let usu of usuarios) {
    if (usu.idade >= 18) {
        adultos.push(usu)
    }  else {
        jovens.push(usu)
    }
}

console.log(jovens)
console.log(adultos)