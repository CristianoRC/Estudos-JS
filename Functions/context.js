/*
Neste exemplo o time não existe no contexto, o this está ligado a Function e não a classe
Para resolver o problema, basta usar uma arrow Functions ou Usando o Bind
const time = {
    nome: "Ola Mundo",
    jogadores: ["J1", "J2", "J3"],
    exibirJogadores: function () {
        this.jogadores.forEach(function (jogador) {
            console.log(`O jogador ${jogador} faz parte do time ${this.nome}`)
        });
    }
}
time.exibirJogadores();

const time = {
    nome: "Ola Mundo",
    jogadores: ["J1", "J2", "J3"],
    exibirJogadores: function () {
        this.jogadores.forEach((jogador) => {
            console.log(`O jogador ${jogador} faz parte do time ${this.nome}`)
        });
    }
}
time.exibirJogadores();
*/

const time = {
    nome: "Ola Mundo",
    jogadores: ["J1", "J2", "J3"],
    exibirJogadores: function () {
        this.jogadores.forEach(function (jogador) {
            console.log(`O jogador ${jogador} faz parte do time ${this.nome}`);
        }.bind(this));
    }
}
time.exibirJogadores();