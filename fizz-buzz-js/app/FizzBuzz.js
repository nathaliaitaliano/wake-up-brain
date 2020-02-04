module.exports = class FizzBuzz {
    convert(number) {
        if((number % 3 === 0) && (number % 5 === 0)) {
            return 'fizzBuzz';
        }
        if(number % 5 === 0) {
            return 'buzz';
        }
        if(number % 3 === 0) {
            return 'fizz';
        }
        return number;
    }
};
