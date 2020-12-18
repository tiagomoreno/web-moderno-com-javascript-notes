//Exemplo de callback no browser
//Executar código diretamente no browser no modo de desenvolvedor
let qtd = 1
document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('O evento ocorreu! '+qtd)
    qtd++
}