//Simulação simplificada do método Filter

Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if (callback(this[i], i, newArray)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
    {nome: 'Carro medio', preco: 30000, fragil: false},
    {nome: 'Taça de Cristal', preco: 3200, fragil: true}
]

let produtoCaro = produto => (produto.preco >= 500)
let produtoFragil = produto => produto.fragil

let resultado = produtos.filter2(produtoCaro).filter2(produtoFragil)

console.log(resultado)