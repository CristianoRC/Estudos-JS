/*
É bem parecido com o MAP, só que suas chaves só podem ser objetos
E com isso temos um problemas pode ser que o Garbage Collector passe e leve o objeto embora
ai perderemos a referencia para esse cara.
*/

const weakMap = new WeakMap();
const pessoa = { nome: "Cristiano" };
const pessoa1 = { nome: "Joao" };

weakMap.set(pessoa, "Pessoa 0");
weakMap.set(pessoa1, "Pessoa 1");
