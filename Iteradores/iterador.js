const fila = ["Primeiro", "Segundo", "Terceiro", "Quarto", "Quinto"];
const consumidorDaFila = fila[Symbol.iterator]();
let atual = consumidorDaFila.next();
do {
    console.log(atual.value);
    atual = consumidorDaFila.next();
} while (!atual.done)

