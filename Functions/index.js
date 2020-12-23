/*
    Construtor de função, aqui da para "ver" a função como um tipo no JS
*/

const olaMundo = new Function("nome", 'console.log(`Olá Mundo ${nome}`)');
olaMundo("Cristiano")