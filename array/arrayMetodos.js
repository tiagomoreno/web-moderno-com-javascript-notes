const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Coloca o elemento na última posição do array
console.log(pilotos)

pilotos.shift() //remove o elemento da primeira posição do array
console.log(pilotos)

pilotos.unshift('Hamilton') //Coloca o elemento na primeira posição do array
console.log(pilotos)

// splice pode adicionar e remover elementos
//paramentros: posição, quantidade de elementos a remover, elementos que serão adicinados


//adicionar
pilotos.splice(2,0, 'Bottas', 'Massa') //Na posição 2, não remove nenhum elemento, adiciona os elementos Bottas e Massa
console.log(pilotos)

//remover
pilotos.splice(3,1, 'Outro piloto') //Na Posição 3, remove um elemento e adiciona outro
console.log(pilotos)
pilotos.splice(2,1) //Na posição 2 remove um elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array a partir do indice 2 em diante
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)// novo array a partir do indice 1(incluindo a posição) até a posição 4, sem a incluir a posição 4
console.log(algunsPilotos2)