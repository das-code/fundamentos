const escola = "Cod3r"

console.log(escola.charAt(4)) // Retorna a letra da possicao escolhida
console.log(escola.charCodeAt(3))
console.log(escola.indexOf("3")) // Retorna o index da letra na string

console.log(escola.substring(1)) // Retorna uma string do index ate o final
console.log("Escola ".concat(escola).concat("!")) // Junta varias strings
console.log(escola.replace(3, 'e')) // Troca a letra de uma string de um index

console.log('Ana, Maria, Pedro'.split(',')) // Retorna um array de uma string