const carro = {
    ligado: false,
    valocidade: 0,
    ligar: function () {
        if (this.ligado) {
            console.log('Este carro já está ligado.')
        } else {
            this.ligado = true
            this.status()
        }
    },
    desligar: function () {
        if (!this.ligado) {
            console.log('Este carro já está desligado.')
        } else {
            if (this.valocidade == 0){
                this.ligado = false
                this.status()
            } else {
                console.log('Para desligar o carro ele precisa estar parado')
            }
        }
    },
    acelerar: function () {
        this.start()
        if(!this.ligado) {
            console.log('Não é possível acelerar um carro desligado.')
        } else {
            this.valocidade += 10
            this.status()
        }
    },
    desacelerar: function () {
        if(!this.ligado) {
            console.log('Não é possível desacelerar um carro desligado.')
        } else {
            this.valocidade -= 10
            this.stop()
            this.status()
        }
    },
    status: function () {
        const liadoOuNao = this.ligado == true ? 'ligado' : 'desligado'
        console.log(`Carro ${liadoOuNao}. Velocidade: ${this.valocidade}`)
    }, 
    start: function () {
        if (!this.ligado) {
            this.ligado = true
        }
    },
    stop: function () {
        if (this.valocidade == 0) {
            this.ligado = false
        }
    }
}

carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desacelerar()