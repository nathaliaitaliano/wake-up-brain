const assert = require('chai').assert;
const FizzBuzz = require('../app/FizzBuzz.js');

describe('fizz buzz', function() {
    const fizzBuzz = new FizzBuzz();

   it('return fizz if number is multiple of 3', function() {
       const result = fizzBuzz.convert(3);
       assert.equal(result, 'fizz');
    });

   it('return buzz if number is multiple of 5', function() {
       const result = fizzBuzz.convert(5);
       assert.equal(result, 'buzz');
    });

   it('return fizzBuzz if number ir multiple of 3 an 5', function() {
      const result = fizzBuzz.convert(15);
      assert.equal(result, 'fizzBuzz');
   });

   it('return number if is not multiple of 3 nor 5', function() {
      const result = fizzBuzz.convert(4);
      assert.equal(result, 4);
   });

});
