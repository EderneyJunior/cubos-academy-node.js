const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

/* a. Adicione uma tv, dois cabos usb e uma webcam para o José

b. Adicione dois notebooks para o Carlos

c. Adicione um teclado, dois cabos usb, um carregador, um mouse e um monitor para a Patricia

d. Adicione cinco webcams para o Renato

e. Adicione uma webcam, dois cabos usb e um monitor para o Roberto */

jose.carrinho.push({})
jose.carrinho[0]['item'] = tv
jose.carrinho[0]['quantidade'] = 1

jose.carrinho.push({})
jose.carrinho[1]['item'] = caboUsb
jose.carrinho[1]['quantidade'] = 2

jose.carrinho.push({})
jose.carrinho[2]['item'] = webcam
jose.carrinho[2]['quantidade'] = 1

carlos.carrinho.push({})
carlos.carrinho[0]['item'] = notebook
carlos.carrinho[0]['quantidade'] = 2

patricia.carrinho.push({})
patricia.carrinho[0]['item'] = teclado
patricia.carrinho[0]['quantidade'] = 1

patricia.carrinho.push({})
patricia.carrinho[1]['item'] = caboUsb
patricia.carrinho[1]['quantidade'] = 2

patricia.carrinho.push({})
patricia.carrinho[2]['item'] = carregador
patricia.carrinho[2]['quantidade'] = 2

patricia.carrinho.push({})
patricia.carrinho[3]['item'] = mouse
patricia.carrinho[3]['quantidade'] = 1

patricia.carrinho.push({})
patricia.carrinho[4]['item'] = monitor
patricia.carrinho[4]['quantidade'] = 1

renato.carrinho.push({})
renato.carrinho[0]['item'] = webcam
renato.carrinho[0]['quantidade'] = 5

roberto.carrinho.push({})
roberto.carrinho[0]['item'] = webcam
roberto.carrinho[0]['quantidade'] = 1

roberto.carrinho.push({})
roberto.carrinho[1]['item'] = caboUsb
roberto.carrinho[1]['quantidade'] = 2

roberto.carrinho.push({})
roberto.carrinho[2]['item'] = monitor
roberto.carrinho[2]['quantidade'] = 1