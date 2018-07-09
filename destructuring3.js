function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = { max: 50, min: 40 }

console.log(rand(obj)) // min = obj.min, max = obj.max
console.log(rand({ min: 955 })) // min = 955, max = default
console.log(rand({})) // min = default, max = default