/*
    Tem a mesma funcionalidade e limitações do Args do C#
*/

function listarValores(...valores) {
    for (const valor of valores)
        console.log(valor)
}

listarValores(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)