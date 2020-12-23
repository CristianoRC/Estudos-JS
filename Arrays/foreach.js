const letras = ["A", "B", "C"]

letras.forEach((letra) => {
    letras.push("Z");//Esse cara sera ignorado no looping.
    console.log(letra);
})

console.log("-----------------");
letras.forEach((letra) => console.log(letra));