module.exports = class Mommifier {
    countVowel(word) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        const wordLetters = word.split('');
        let vowelsCount = 0;

        wordLetters.forEach((letter) => {
            if (vowels.indexOf(letter) >= 0) {
                vowelsCount++;
            }
        });
        return vowelsCount;
    }

    convert(word) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let wordLetters = word.split('');
        const lettersQuantity = wordLetters.length;
        const vowelsQuantity = this.countVowel(word);

        if ((vowelsQuantity * 100) / lettersQuantity >= 30) {
            wordLetters.forEach((letter) => vowels.forEach((vowel) => {
                if (letter === vowel) {
                    wordLetters = wordLetters.splice(wordLetters.indexOf(letter), 1, 'mommy');
                }
            }));
            return wordLetters.join('');
        }
        return word;
    }
};