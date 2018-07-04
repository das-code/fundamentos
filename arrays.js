const valores = [1, 2, 3, 4, 5]
console.log(valores)

console.log(valores[0], valores[3])
console.log(valores[5]) // Index nao exite, retorna undefined

valores[5] = 6 // Adicionando dinamicamente um valor a um array
console.log(valores[5])

console.log(valores.length) // Retorna o tamanho do array

valores.push({id: 3}, false, null, 'texto') // Adiciona valores ao array
console.log(valores)

valores.pop() // Renove o ultimo valor do array
delete valores[0] // Remove determinado valor do array
console.log(valores)

console.log(typeof valores)