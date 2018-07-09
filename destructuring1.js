const pessoa = {
  nome: "Ana",
  idade: 5,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000
  }
}

// Recupera nome e idade do objeto pessao
const { nome, idade } = pessoa
console.log(nome, idade)

// Recupera nome e idade de pessoa e renomeia para 'n' e 'i'
const { nome: n, idade: i } = pessoa
console.log(n, i)

// Os dois atributos nao existem em pessoa, seus valores padrao seram undefined
// 'bemHumorada' tem um valor padrao definido caso nao encontre um no objeto
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

// Recuperando valore de um objeto interno a outro
const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)