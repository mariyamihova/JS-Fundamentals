function matchWords(text){
    let result=text.match(/[A-Za-z0-9_]+/g);
    console.log(result.join("|"));

}
matchWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');

