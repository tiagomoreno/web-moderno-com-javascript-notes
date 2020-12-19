function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())

//Chamamento da função através do objeto, a função usará o escopo do objeto
console.log(produto.getPreco())

//Exemplo com Call Apply 
//A função usará como contexto o primeiro argumento passado

const carro = {preco: 4990, desc: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//No call os parametros após o primeiro são colocados de forma 'normal', separados por virgula
//No apply os argumentos após o primeiro são passados através de um vetor

console.log(getPreco.call(carro, 0.17, "$"))
console.log(getPreco.apply(global,[0.19, "$"]))