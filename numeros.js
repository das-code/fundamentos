const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.18
const avaliacao2 = 6.25

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Aredonda para um determinado numero de casas
console.log(media.toString()) // Converte o valor para uma string
console.log(typeof media) // Retorna o tipo do valor
