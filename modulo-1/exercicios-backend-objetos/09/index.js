const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Antonio" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Carlos" },
]

for (let cont = 0; cont < participantes.length; cont ++) {
    
    if(participantes[cont].nome == 'Carlos') {
        console.log(`Galera... O Carlos está na posição ${cont + 1}, corre lá!`)
        break
    }
}