const endereços = [
    { cep: '00111222', rua: "Rua dos Artistas" },
    { cep: '00111333', rua: "Rua Augusta" },
    { cep: '00222444', rua: "Avenida Paralela" },
    { cep: '11222333', rua: "Rua Carlos Gomes" },
  ];

  const cep = `11222333`

  function localizarRua(cep, enderecos) {
    const endereco = enderecos.find((endereco) => {
        return endereco.cep === cep
    })
    console.log(endereco.rua)
  }

localizarRua(cep, endereços)