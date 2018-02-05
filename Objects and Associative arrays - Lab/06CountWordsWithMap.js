function countWords(input) {
    let result = new Map();
    for (let line of input) {
        let words = line.toLowerCase().split(/\W+/).filter(x => x !== '');
        for (let word of words) {
            if (result.has(word)) {
                result.set(word, result.get(word) + 1);
            } else
                result.set(word, 1);
        }
    }
    let allWords = Array.from(result.keys()).sort();
    for (let word of allWords) {
        console.log(`'${word}' -> ${result.get(word)} times`);
    }

}
countWords(["Far too slow, you're far too slow."]);
