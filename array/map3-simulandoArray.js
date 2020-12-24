//Simulando o map
//Sera pareceido com a simulacao do foreach
//.. a diferença esta que um novo array é criado
//.. e enquanto o array está sendo percorrido, a cada iteração
//.. o novo array receberá como novo elemento o retorno da function passada como parâmetro
Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json)  //converte o JSON em um objeto
const apenasPreco = produto => produto.preco //retorna o valor da variavel produto do objeto produto que foi gerado a partir do json
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)