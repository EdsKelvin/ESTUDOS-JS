const fistName = prompt("Digite seu primeiro nome: ")
const secondName = prompt("Digite seu segundo nome:  ")
const whatAreYouStudying = prompt("Digite seu campo de estudo: ")
const yearOfBirth = prompt("Digite seu ano de nascimento: ")

alert(
    "Recruta cadastrado com sucesso!\n" + 
    "\nNome completo: " + fistName + " " + secondName +
    "\nCampo de estudo: " + whatAreYouStudying +
    "\nIdade: " + (2024 - yearOfBirth)
)