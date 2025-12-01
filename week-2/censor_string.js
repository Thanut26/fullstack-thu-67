function censorWord(sentence, wordToCensor) {
    const regex = new RegExp(wordToCensor, 'gi');
    const censorText = sentence.replace(regex, '****');
    return censorText;
}

const originalPost = "JavaScript is fun but sometimes Javascript can be tricky.";
const cleanPost = censorWord(originalPost, "JavaScript");
console.log(cleanPost);