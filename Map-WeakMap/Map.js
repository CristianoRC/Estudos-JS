/*
  Map = Dicionário no C#
  Antes para usar algo parecido com um map, tu usava um objeto normal
  Com a criação do Map, ganhamos funcionalidades como
    * Saber quantos itens temonos no dicionário
    * Remover por chave
    * Inserir por chave-valor
    * Verificar se a chave já está "cadastrada" no dicionário
    * Sua chave pode ser um objeto ou uma função, e não somente strings, int...
*/

var dicionario = new Map();

dicionario.set("cristiano", "Cristiano Cunha");
dicionario.set(1, "Numero 1");

console.log(dicionario.get("cristiano"));
console.log(dicionario.has(1));
console.log(dicionario.size);
dicionario.delete(1);
console.log(dicionario.size);
dicionario.clear();
console.log(dicionario.size);
