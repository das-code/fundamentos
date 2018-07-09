const saudacao = "Opa" // Contexto lexico 1

function exec() {
  const saudacao = "Fala" // Contexto lexico 2
  return saudacao
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
  nome: "Pedro",
  idade: 15,
  peso: 58,
  endereco: {
    logradouro: "Rua Muito Legal",
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)