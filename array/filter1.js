//No filter, um array maior que o original não pode ser retornado
//...Sempre será retornado um array maior ou de tamanho igual ao original

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
    {nome: 'Carro medio', preco: 30000, fragil: false},
    {nome: 'Taça de Cristal', preco: 3200, fragil: true}
]

console.log(produtos.filter(function(p){
    return p.preco > 2000

}))

//Criterios: filtro para produtos de valor maior que 500 e filtro para produtos frágeis

let produtoCaro = produto => (produto.preco > 500)
let produtoFragil = produto => produto.fragil

let resultado = produtos.filter(produtoCaro).filter(produtoFragil)

console.log(resultado)
