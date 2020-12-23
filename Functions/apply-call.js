/*
São formas de mudar o this da função que será eexecutada
O Call apenas chama, e o Apply chama e passa os parâmetros
*/

//call
const time = {
	nome: "Ola Mundo",
	jogadores: ["J1", "J2", "J3"]
}


const exibirJogadores = function () {
	this.jogadores.forEach((jogador) => {
		console.log(`O jogador ${jogador} faz parte do time ${this.nome}`)
	});
}

exibirJogadores.call(time);
console.log("================================");
// Apply


const exibirJogadores2 = function (data) {
	this.jogadores.forEach((jogador) => {
		console.log(`O jogador ${jogador} faz parte do time ${this.nome} - ${data}`)
	});
}

exibirJogadores2.apply(time, ["23/12/2020"])