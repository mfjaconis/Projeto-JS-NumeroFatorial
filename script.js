// Escreva um programa que calcule o fatorial de um número e exiba o resultado no console.



let resultado = 1

function verificar() {
    let numero = parseInt(document.getElementById("numero").value)

    while (numero > 0) {
        resultado *= numero
        numero--;

        document.getElementById("resposta").innerHTML = `O fatorial do número digitado é ${resultado}`
    }
}


