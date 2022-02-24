const nome = 'Rebeca'

const concaten = 'olá ' + nome + '!'

const template = `
    olá
    ${nome}!`

console.log(nome, template)

// expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
