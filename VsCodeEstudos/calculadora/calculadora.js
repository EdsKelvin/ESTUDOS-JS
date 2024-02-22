const entrada1 = prompt("Digite seu 1 numero: ")
const entrada2 = prompt("Digite seu 2 numero: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const mais = x + y
const menos = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
    "Resultados!\n" +
    "\nSoma: " + mais +
    "\nMenos: " + menos +
    "\nVezes: " + multiplicacao +
    "\nDivisao: " + divisao

)