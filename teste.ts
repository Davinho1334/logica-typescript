const tela = require('readline-sync')
const nome:string = tela.question('qual o nome')
const anoNasc:number = tela.question('quando tu nasceu')
const idade:number = 2026 - anoNasc
console.log('oi'+ nome + 'sua idade é' + idade + 'anos')


