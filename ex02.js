const fibonacci = (lista, count = 1, ultimo = 0) => {
  if (count < lista) {
    return fibonacci(lista, count + ultimo, count);
  }
  if (count === lista) {
    return true;
  }
  return false;
};
console.log(fibonacci(10));
console.log(fibonacci(55));
console.log(fibonacci(89));
console.log(fibonacci(534));
