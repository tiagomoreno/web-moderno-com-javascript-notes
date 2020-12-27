const moduloA = require('../../moduloA')
console.log(moduloA.bemVindo)

const c = require('./pastaC')
console.log(c.ola2)

//Pasta saudação criada dentro de mode_modules
//.. usado apenas como exemplo, não faça isso!
//.. a pasta node_modules é uma pasta padrão que deve ser gerada pelo gerenciador de pacotes npm
//.. não é uma boa prática implementar seus próprios módulos dentro dela
const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)