const assert = require ('assert').strict;


function fibonacci(n){
    let res = [];
    res[0]= 0;
    res[1]= 1;
    
    for(let i=2;i<=n;i++){
        res[i]= res[i-2] + res[i-1];
    }
  return res[n];
    
}
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
//0  1  2  3  4  5  6   7   8   9  10   11
// Tambien podria haber una funcion recursiva, es decir, hacerlo como lo tengo en el papel, puedo llamar a la misma guncion
//que he creado, dentro de mi funcion, pero tengo que tener un condicionanate, es decir, me tengo que hacegurar que la funcion acabará. En este caso con un if(n=0 y n=1)

assert.equal(fibonacci(0), 0);
assert.equal(fibonacci(1), 1);
assert.equal(fibonacci(2), 1);
assert.equal(fibonacci(5), 5);
assert.equal(fibonacci(6), 8);
assert.equal(fibonacci(11), 89);