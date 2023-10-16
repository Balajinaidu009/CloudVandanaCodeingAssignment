function reverseWordsInSentence(sentence) {
    var words = sentence.split(' ')
    var reversedWords = [];
    for(const word of words) {
        const characters = word.split('');
        const reversedWord = characters.reverse().join('');
        reversedWords.push(reversedWord);
        }
        var reversedSentence = reversedWords.join(' ');
      return reversedSentence;
    }
    var inputSentence = "This is a sunny day";
    inputSentence=inputSentence.replace("i","h")
    inputSentence=inputSentence.replace("h","i")
    const reversedSentence = reverseWordsInSentence(inputSentence);
    console.log(reversedSentence)