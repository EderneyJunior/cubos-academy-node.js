const comentario = "Esse COVID é muito perigoso!";

if ((comentario.toUpperCase()).includes('COVID') || (comentario.toUpperCase()).includes('PANDEMIA')) {
    console.log(`Comentário bloqueado por conter palavras proibidas`)
} else {
    console.log(`Comentário autorizado`)
}