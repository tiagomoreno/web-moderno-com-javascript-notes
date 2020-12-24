//Simulação de foreach

Array.prototype.forEach2 = function(callback){ // eu sei que vou receber uma função e a estou chamando de callback
    //For para percorrer cada elemento do array
    for (let i = 0; i < this.length; i++){ //o This se refere ao próprio array
        //Para cada interação do for:
        //   A função callback que foi passada como parâmetro será executada
        //   tendo como parameto o valor, a chave, e o próprio array
        callback(this[i], i, this) //a função callback será executada a partir dessse momento, em seguida seguirá a próxima iteração do for
    }

}
const aprovados =  ['Agatha', 'Aldo', 'Daniel', 'Raquel']


aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
 })