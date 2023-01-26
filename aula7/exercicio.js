const nome = "Jeniffer";
const sobrenome = "Oliveira";
const idade = "20";
const peso = "50";
const alturaEmM = "1.50";
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);

anoNascimento = 2023 - idade;

// + pode ser usado para unir valores

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} KG.`);
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)