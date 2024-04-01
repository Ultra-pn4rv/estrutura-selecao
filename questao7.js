/*
Questão 7: Como você pode usar uma declaração if, else if, else para verificar 
se um número é múltiplo de 2, 3 ou 5 em JavaScript?
*/
let numero = 10
if (numero % 2 === 0) {
    console.log("numero multiplo por 2")
} else if (numero % 3 === 0) {
    console.log("numero multiplo por 3") 
} else if (numero % 5 === 0) {
    console.log("numero multiplo por 5")
} else {
    console.log("este numero nao é multiplo a nenhum dos numeros")
}