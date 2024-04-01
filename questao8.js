/*
Questão 8: Como você pode usar uma declaração if, else if, else para 
determinar se uma idade corresponde a bebê, criança, adolescente, adulto ou 
idoso em JavaScript?
*/
let idade = 45
if (idade < 5) {
    console.log("vc é um bebe")
} else if (idade > 5 && idade < 12) {
    console.log("vc é uma criança")
} else if (idade > 12 && idade < 18) {
    console.log("vc é um adolescente")
} else if (idade > 18 && idade < 60) {
    console.log("vc é um adulto") 
} else if (idade > 60) {
    console.log("vc é idoso")
}