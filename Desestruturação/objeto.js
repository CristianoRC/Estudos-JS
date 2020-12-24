const pessoa = { nome: "Cristiano", idade: 22, email: "contato@cristianoprogramador.com" };
const { email } = pessoa;
console.log(email)

console.log("--------------------------------")

const { email: contato } = pessoa;
console.log(contato);