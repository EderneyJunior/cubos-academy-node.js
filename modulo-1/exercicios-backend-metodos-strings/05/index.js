const numeroCartao = '1111222233334444';
const primeiros = numeroCartao.slice(0, 4)
const ultimos = numeroCartao.slice(-4)
const cartaoFormatado = `${primeiros}${ultimos.padStart(12, '*')}`

console.log(cartaoFormatado)