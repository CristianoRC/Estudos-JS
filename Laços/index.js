/*
    for of só funciona com variáveis que podem ser iteradas
*/

const numeros = [1, 2, 3, 4]
for (const numero of numeros) {
    console.log(numero)
}

const pessoa = { nome: "Cristiano", idade: 22 }

/*
 Isso aqui daria o erro: TypeError: pessoa is not iterable
 for (const prop of pessoa)
    console.log(prop)


 O for in é um pouco mais antigo, e deixa fazer a interação em vários tipos
 */

console.log("-------")
for (const key in pessoa) {
    console.log(`chave: ${key} - valor: ${pessoa[key]}`);
}
