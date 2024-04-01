/*
Questão 5: Como você pode usar uma declaração if, else if, else para verificar 
se um número é par, ímpar ou zero em JavaScript?
*/
let numero = 9
if (numero % 2 === 0) {
    console.log("este numero é par")
} else if (numero % 2 !== 0) {
    console.log("este numero é ímpar")
} else {
    console.log("este numero é zero")
}