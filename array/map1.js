//O map gera um novo array a partir de um array...
//...funciona de forma parecida que o foreach, percorrendo cada elemento do arrray 
//...e a cada iteração executando uma função que foi passada como parâmetro

const nums = [1, 2, 3 ,4 ,5]
let resultado = nums.map(function(e){
    return e * 2 //a function que você passar para o map precisa ter um retorno, ou você gerará um array apenas com valores undefined
})

console.log(resultado)
//O map não tranforma o array atual, ele gera um novo array
console.log(nums)

//
const soma10 = e => e + 10 
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

//Como o retorno do map é um array, você pode ir encadeando maps

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
