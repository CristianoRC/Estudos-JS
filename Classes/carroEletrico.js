class CarroEletrico extends Carro {
    constructor(modelo, cor, ano, modeloDoCarregador) {
        super(modelo, cor, ano);
        this.modeloDoCarregador = modeloDoCarregador;
    }
    conectarCarregador(modelo) {
        if (modelo !== this.modeloDoCarregador)
            console.error("Modelo de carregador incopativel")
        else
            console.info("Carregado...")
    }
}

var carro = new CarroEletrico("Audi E-Tron", "Cinza", 2020, "22 kW CA");
carro.conectarCarregador("22 kW CC")