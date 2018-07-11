let num1 = 1
let num2 = 2

num1++ // Posfixed nao tem precedencia matematica
console.log(num1)

--num1 // Prefixed tem precedencia matematica
console.log(num1)

console.log(++num1 === num2--) // num2 so sera decrementado depois da comparacao
console.log(num1 === num2)