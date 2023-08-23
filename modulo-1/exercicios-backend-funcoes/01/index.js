const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "e"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let acertos = 0

    for (let p of prova.questoes) {
        if (p.resposta === p.correta) {
            acertos++
        }
    }

    return acertos
}

const quantidadeAcertos = corrigirProva(prova)
console.log(`O aluno(a) ${prova.aluno} acertou ${quantidadeAcertos} questões e obteve nota ${quantidadeAcertos * 2}`)