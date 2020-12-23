//O Foreach é um metodo que percorre cada indice do array 
// e recebe como parametro uma função que será executada a cada interação
//sendo que esta função pode receber os parâmetros valor, chave, e o próprio array
const aprovados =  ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//
aprovados.forEach(function(nome, indice,array,x){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    console.log(x) //será undefined porque o forEach só aceita três parametros
})

//Você não é obrigado a passar parametros no foreach
aprovados.forEach(nome => console.log(nome)) //usando apenas o parametro nome para receber o valor

//armazenando arrow function e usando no foreach
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)