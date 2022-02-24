// Armazenando uma funcao em uma variavel
const imprimeSoma = function (a, b) {
  console.log(a + b)
}

imprimeSoma(5, 8)

// Armazenando uma funcao arrou em uma variavel
const soma = (a, b) => {
  return a + b
}

console.log(soma(5, 8))

// Retorno iomplicito
const subtract = (a, b) => a - b

console.log(subtract(2, 5))

const imprime2 = a => console.log(a)
imprime2('Legal!!!')
