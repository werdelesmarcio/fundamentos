const valor // não inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)

const produtos = {}
console.log(produtos.preco)
console.log(produtos)

produtos.preco = 3.50
console.log(produtos)

produtos.preco = undefined // evitar atribuir undefined
console.log(!!produtos.preco)
