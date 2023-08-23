const usuários = [
    {
      nome: "André",
      idade: 29,
      habilitado: false,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
  ]

  const entre18E65 = usuários.filter((usuário) => {
    return usuário.idade >= 18 && usuário.idade <= 65
  })

const abilitado = entre18E65.every((habilitacao) => {
    return habilitacao.habilitado
})

abilitado ? console.log(`todos passaram no teste`) : console.log(`todos precisam estar habilitados`)