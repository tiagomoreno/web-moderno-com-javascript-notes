const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`) //mascara
}
fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})

fabricantes.forEach(function(fabricante, indice){
    console.log(fabricante, indice)
})

fabricantes.forEach(fab => console.log(fab))
fabricantes.forEach((fab, ind) => console.log(fab, ind))
