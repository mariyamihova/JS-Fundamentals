function calculateOccurrence(text,word) {
    text=text.toLowerCase();
    word=word.toLowerCase();

    let pattern = `\\b${word}\\b`;
    let regex = text.match(new RegExp(pattern, 'g'));


    console.log(regex?regex.length:0);

}
calculateOccurrence('The waterfall was so high, that the child couldn’t see its peak.',
'the');
