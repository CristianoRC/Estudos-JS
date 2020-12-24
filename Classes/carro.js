class Carro {
    constructor(modelo, cor, ano) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.portasTravadas = false;
    }

    travarPortas() {
        this.portasTravadas = true;
        console.info("Portas travadas")
    }

    destravarPortas() {
        this.portasTravadas = false;
        console.info("Portas destravadas")
    }

    andar() {
        if (this.portasTravadas)
            console.info("Carro andando")
        else {
            this.exibirErroDePortasDestravadas();
            this.travarPortas();
            this.andar();
        }
    }

    exibirErroDePortasDestravadas() {
        console.warn("Você não pode andar com as portas destravadas");
    }
}

var carro = new Carro("Tesla Model 3", "Azul", 2020);
carro.travarPortas();
carro.destravarPortas();
console.log("---------------------------------------");
carro.andar();