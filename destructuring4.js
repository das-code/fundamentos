function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const array = [50, 40]

console.log(rand(array)) // min = array[0], max = aray[1]
console.log(rand([50, 100])) // min = 50, max = 100
console.log(rand([955])) // min = 955, max = default
console.log(rand([, 10])) // min = default, max = 10
console.log(rand([])) // min = default, max = default
