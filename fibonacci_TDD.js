const assert = require('assert');

function fibonacci(n){
    if(n===0){
        return 1;
    }
    return n;
}

console.log('Fibbonaci TDD en mi Github');

assert.equal(fibonacci(0),1);
assert.equal(fibonacci(1),1);
assert.equal(fibonacci(2),2);