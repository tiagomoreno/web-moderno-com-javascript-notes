//Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco:1.99, tag:'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'

//O que não é possível nesse cenário é adicionar novos atributos
produto.descricao = 'Borracha escolar branca'
//Destruir atributos pode
delete produto.tag

console.log(produto)

//Object.seal
const pessoa = {nome:'Juliana', idade:35}
Object.seal(pessoa)

//Não é possível adicionar ou excluir atributos, 
// mas é possível alterar os existentes

console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
pessoa.idade = 29
delete pessoa.nome
console.log(pessoa)

// Object.freeze = selado + valores constantes

Object.freeze(pessoa)
pessoa.idade = 30
console.log('Freeze:', Object.isFrozen(pessoa))
console.log(pessoa)

//As propriedades são cumultativas
console.log('Selado:', Object.isSealed(pessoa))