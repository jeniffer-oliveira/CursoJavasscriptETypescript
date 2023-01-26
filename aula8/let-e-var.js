// ECMAscript = é a padronização do Javascript 

var nome = "Jeniffer";
var nome = "Oliveira";
// nesse exemplo, utilizando "var", está redeclarando a variável e não apresenta erro. Já com "let" é gerado erro;

nome = 'Jeniffer'; // cria uma variável global, podendo afetar outras variáveis;

let nome = "Jeniffer";
let nome = "Oliveira";
// nesse exemplo, ocorre erro pois não é possível redeclarar "let";

console.log(nome)
