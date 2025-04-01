// Trocar valores de variáveis //

/*let a = 'vermelho';
let b ='Azul';

let c = a; // Armazena 'vermelho' temporariamente em c
a = b;  // A variável 'a' agora recebe 'azul'
b = c; // A variável 'b' recebe o valor armazenado em 'c' ('vermelho')

console.log(a);
console.log(b);

// Alternativa usando destruição de array
// Uma maneira mais moderna de fazer essa troca em JavaScript é com destructuring assignment:

let a = 'vermelho';
let b = 'azul';

[a, b] = [b, a]; // Troca os valores sem precisar de uma variável auxiliar

console.log(a); // azul
console.log(b); // vermelho*/

let a = 'vermelho';
let b = 'azul';

let resultado = [a,b] = [b,a];

console.log(resultado);

