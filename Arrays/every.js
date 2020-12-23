/*
    Valida se todos os itens do array respeitam a condição informada
    Retorna um bool
*/

const nomes = ["João", "Maria", "Mateus"];
const todosOsNomesIniciamComLetraM = nomes.every((nome) => nome.trim().charAt(0) === "M")
console.log(`Todos os nomes iniciam com a letra "M"? ${todosOsNomesIniciamComLetraM ? "Sim" : "Não"}`);