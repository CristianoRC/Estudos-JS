/*
    Valida se ao menos um elemento satisfaz a condição
    Retorna um Bool
*/

/*
    Valida se todos os itens do array respeitam a condição informada
    Retorna um bool
*/

const nomes = ["João", "Maria", "Mateus"];
const algumNomeIniciaComALetraJ = nomes.some((nome) => nome.trim().charAt(0) === "J")
console.log(`Algum Nome Inicia com a letra "J"? ${algumNomeIniciaComALetraJ ? "Sim" : "Não"}`);