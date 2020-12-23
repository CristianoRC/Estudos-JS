Array.prototype.sum = function () {
    return this.reduce((somatorio, valorAtual) => { return somatorio + valorAtual }, 0);
}

const numeros = [1, 2, 3, 15]
const soma = numeros.sum();
console.log(soma);