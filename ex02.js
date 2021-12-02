const numero = parseInt(prompt('Entre  com um número positivo: '));
let n1 = 0,
  n2 = 1,
  proxTermo;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

proxTermo = n1 + n2;

while (proxTermo <= numero) {
  // print the next term
  console.log(proxTermo);

  n1 = n2;
  n2 = proxTermo;
  proxTermo = n1 + n2;
}
if (number )