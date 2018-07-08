// funcao sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Soma: 2 + undefined = NaN
imprimirSoma(2, 3, 4, 5, 6) // Soma os dois primeiros e ingnora o resto
imprimirSoma() // Soma: undefined + undefined = NaN

// Funcao com retorno
function soma(a, b = 1) { // 'b = 1' valor padrao
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // Soma: 2 + 1 = 3
console.log(soma()) // Soma: undefined + 1 = NaN
