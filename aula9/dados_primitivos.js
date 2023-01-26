// String, number, undefined, null, boolean, symbol = são os dados primitivos em JSgit a

// todas são strings
const nome = "Jeniffer";
const nome1 = 'Jeniffer';
const nome2 = `Jeniffer`;

// numeros 
const num1 = 10;
const num2 = 10.52;

// declarando variável, quando isso ocorre a variável recebe o valor de undefined, pois não aponta pra nenhum lugar na memoria;
let nomeAluno;
//outro exemplo de valor nulo 
const sobrenomeAluno = null; // é utilizado quando em algum momento você pretende desconfigurar a variável;
// não se pode iniciar uma constante sem valor;

// booleano 
const aprovado = true; //or false, boolean possui apenas dois valores (valor lógico) (verdadeiro ou falso);

console.log(typeof nome);
// mostra o tipo da variável;

console.log( typeof nome, nome);
//mostra o tipo e o valor da variável

// nesse caso, o valor NÃO é uma REFERÊNCIA. É UMA CÓPIA
let a = 2;
const b = a;
console.log(a, b);

a = 3; // apenas o valor de A é alterado
console.log(a, b)

// ---------------------------------------------------------------------------------------------

// tipo de dado passado por referencia
// array
const c = [1,2];
const d = c;

console.log(c, d)
// ambas variáveis terão o mesmo valor

d.push(3); // adicionando novo valor em D
console.log(c, d);
// entretando, o valor é adicionado em C e em D