const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
  ];

const filtroProgramadores = pessoas.filter((pessoa) => {
    return pessoa.profissao == 'Programador' && pessoa.idade > 20
})

console.log(filtroProgramadores)

const filtroJornalista = pessoas.filter((pessoa) => {
    return pessoa.profissao == 'Jornalista' && pessoa.idade > 30
})

console.log(filtroJornalista)

const jovem = pessoas.filter((pessoa) => {
    return pessoa.idade <= 29
})

console.log(jovem)