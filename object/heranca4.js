function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

//Todos os objetos criados a partir de uma mesma função construtora
//   apontam para um mesmo protótipo a partir do atributo __proto__
console.log(obj1.__proto__ === obj2.__proto__)

//Quando você cria um objeto a partir de uma função construtora o seu __proto__ aponta 
//   para o atributo prototype daquela função
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
//Mudando a referencia do prototype de obj3 de Object para MeuObjeto
obj3.__proto__ = MeuObjeto.prototype

obj3.falar()