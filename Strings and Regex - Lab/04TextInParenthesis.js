function findWords(text) {

    let words=[];
    let startIndex=text.indexOf('(');

    while (startIndex> -1){
        let endIndex=text.indexOf(')',startIndex);
        if(endIndex=== -1){
            break;
        }
        let word=text.substring(startIndex+1,endIndex);
        words.push(word);
        startIndex=text.indexOf("(",endIndex);
    }
    console.log(words.join(", "));

}
findWords('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');