const texto = "Aprenda programar do zero na Cubos Academy";
const array = texto.split(' ')
let url = ''

for (let i = 0; i < array.length; i++) {
    url += i == 0 ? `${array[i]}` : `${array[i].padStart(array[i].length + 1, '-')}`
}

url = url.toLowerCase()
console.log(url)