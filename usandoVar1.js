{
  {
    {
      var sera = "Sera?"
    }
  }
}

console.log(sera)

// Em escopo de funcao 'var' nao e visivel fora da funcao
function teste() {
  var local = 123
  console.log(local)
}

teste()
// console.log(local) // Erro!