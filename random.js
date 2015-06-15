// Math.random() devuelve número aleatorio entre 0 y 1.
// Fichero original de github.com/jquemada/random

var numero = Math.random();

var str = (numero > 0.5 ? " MAYOR que 0.5" : " MENOR que 0.5");

console.log('\n' + numero + str + '\n');
