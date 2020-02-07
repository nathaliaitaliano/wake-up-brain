module.exports = class Mommifier {
    countVowel(word) {
        const vowels = ["a", "e", "i", "o", "u"];
        const wordLetters = word.split("");
        let wordVowels = [];

        for(let i = 0; i < wordLetters.length; i++) {
            if(wordLetters[i] === vowels[0]) {
                wordVowels = wordVowels.concat(wordLetters[i]);
            }
            if(wordLetters[i] === vowels[1]) {
                wordVowels = wordVowels.concat(wordLetters[i]);
            }
            if(wordLetters[i] === vowels[2]) {
                wordVowels = wordVowels.concat(wordLetters[i]);
            }
            if(wordLetters[i] === vowels[3]) {
                wordVowels = wordVowels.concat(wordLetters[i]);
            }
            if(wordLetters[i] === vowels[4]) {
                wordVowels = wordVowels.concat(wordLetters[i]);
            }
        }
        return wordVowels.length;
    }

    convert(word) {
        const vowels = ["a", "e", "i", "o", "u"];
        const wordLetters = word.split("");
        let lettersQuantity = wordLetters.length;
        let vowelsQuantity = this.countVowel(word);
        let newWord;
        let mommy = "mommy";

        if((vowelsQuantity*100)/lettersQuantity >= 30) {
            for(let i = 0; i < wordLetters.length; i++) {
                if(wordLetters[i] === vowels[0]) {
                    wordLetters[i] = mommy;
                }
                if(wordLetters[i] === vowels[1]) {
                    wordLetters[i] = mommy;
                }
                if(wordLetters[i] === vowels[2]) {
                    wordLetters[i] = mommy;
                }
                if(wordLetters[i] === vowels[3]) {
                    wordLetters[i] = mommy;
                }
                if(wordLetters[i] === vowels[4]) {
                    wordLetters[i] = mommy;
                }
            }
            return newWord = wordLetters.join("");
        }
        return word;
    }
};