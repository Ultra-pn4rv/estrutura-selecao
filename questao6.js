/*
Questão 6: Como você pode usar uma declaração if, else if, else para 
determinar a estação do ano com base no mês em JavaScript?
*/
let mes = 11;

if(mes ===1 || mes ===2 || mes ===3) {
  console.log("Este mês é verão");
} else if (mes === 4 || mes === 5 || mes === 6) {
  console.log("Este mês é primareva");
} else if (mes === 7 || mes === 8 || mes === 9) {
    console.log("Este mês é outono");
} else if (mes === 10 || mes === 11 || mes === 12) {
    console.log("Este mês é primareva");
} else {
    console.log("Este mes não existe")
}