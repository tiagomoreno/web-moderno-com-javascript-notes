console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//Adicionar comportamentos a funções básicas não é muito incomum mas deve ser usado com cautela
String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('Um texto aleatório'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a', 'b','c'].first)

//É possível sobrescrever comportamentos mas não faça isso
String.prototype.toString =  function (){
    return 'Outro texto'
}

//Ao mudar um comportamento padrão você pode provocar muitos resultados inesperados
console.log('Um texto aelatório'.reverse())