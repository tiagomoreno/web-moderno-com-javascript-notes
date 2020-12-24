const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json)  //converte o JSON em um objeto
const apenasPreco = produto => produto.preco //retorna o valor da variavel produto do objeto produto que foi gerado a partir do json
const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)