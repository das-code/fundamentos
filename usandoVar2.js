var numero = 1

{
  var numero = 2
  console.log("Dentro: " + numero)
}
// VAR nao tem contexto de bloco, so contexto de funcao
console.log("Fora: " + numero)