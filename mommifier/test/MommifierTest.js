const assert = require('chai').assert;
const Mommifier = require('../app/Mommifier.js');

describe('mommifier words', function () {
    let mommifier = new Mommifier();
    let word;

    it('hmm has 0 vowel', function () {
        word = 'hmm';
        assert.equal(0, mommifier.countVowel(word));
    });

    it('strength has 1 vowels', function () {
        word = 'strength';
        assert.equal(1, mommifier.countVowel(word));
    });

    it('love has 2 vowels', function () {
        word = 'love';
        assert.equal(2, mommifier.countVowel(word));
    });

    it('happiness has 3 vowels', function () {
        word = 'happiness';
        assert.equal(3, mommifier.countVowel(word));
    });

    it('congratulations has 6 vowels', function () {
        word = 'congratulations';
        assert.equal(6, mommifier.countVowel(word));
    });

    it('try retur try', function(){
        word = 'try';
        assert.equal('try', mommifier.convert(word));
    });

    it('happy return happy', function () {
        word = 'happy';
        assert.equal('happy', mommifier.convert(word));
    });

    it('home return hmommymmommy', function () {
        word = 'home';
        assert.equal('hmommymmommy', mommifier.convert(word));
    });

    // it('beautiful return bmommytmommyfmommyl', function () {
    //     word = 'beautiful';
    //     assert.equal('bmommytmommyfmommyl', mommifier.convert(word));

    // });
});