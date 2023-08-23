const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2700000; //emCentavos

//seu código aqui

if (totalDeRendimentos > 2855970 && !portadoraDeDoenca && !aposentada) {
    console.log('PEGA LEÃO')
} else {
    if (aposentada || portadoraDeDoenca) {
        console.log('ISENTA')
    } else if (totalDeRendimentos < 2855970) {
        console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE')
    }
}