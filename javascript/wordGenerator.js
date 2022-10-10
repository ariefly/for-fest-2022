function wordGen(length) {
    var result = '';
    var vowel = 'aeiou';
    var consonant = 'bcdfghjklmnpqrstvwxyz';
    var vowelLength = vowel.length;
    var consonantLength = consonant.length;
    for (var i = 0; i < length; i++) {
        result += vowel.charAt(Math.floor(Math.random() *
            vowelLength));
        result += consonant.charAt(Math.floor(Math.random() *
            consonantLength));
    }
    return result;
}

console.log(wordGen());
