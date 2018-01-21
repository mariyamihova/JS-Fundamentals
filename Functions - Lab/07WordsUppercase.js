function capitalizeWords(input) {

    let capitalizedInput = input.toUpperCase();
    let words = extractWords();

    words = words.filter(w => w != '');
    console.log(words.join(', '));

    function extractWords() {
        return capitalizedInput.split(/\W+/);
    }

}
capitalizeWords('Hi, how are you?');