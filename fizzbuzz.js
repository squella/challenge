const assert = require ('assert').strict;

function fizzBuzz(x){
    
    if ((x % 15) === 0){
        return 'Fizz Buzz';
    }
    else if (x % 3 === 0){
        return 'Fizz';
    }
    else if (x % 5 === 0){
        return 'Buzz';
    }
    return x;
}

assert.equal(fizzBuzz(1), 1);
assert.equal(fizzBuzz(3), 'Fizz');
assert.equal(fizzBuzz(5), 'Buzz');
assert.equal(fizzBuzz(15),'Fizz Buzz');
assert.equal(fizzBuzz(2), 2);
assert.equal(fizzBuzz(225),'Fizz Buzz');
assert.equal(fizzBuzz(9),'Fizz');
assert.equal(fizzBuzz(76.25),76.25);
assert.equal(fizzBuzz(25), 'Buzz');