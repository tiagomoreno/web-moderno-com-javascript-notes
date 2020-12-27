console.log(module.exports === this)
console.log(module.exports === exports)

//O this e o exports são duas refêrencias para o mesmo objeto que o Module.exports aponta
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)
exports = {
    nome: 'Teste'
}

console.log(module.exports)
module.exports = {publico: true}