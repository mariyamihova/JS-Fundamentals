function capitalizeWords(text) {
    let splittedText=text.split(" ");
    let newWords=[];
    for(let i=0; i<splittedText.length;i++){
        let word=splittedText[i];
        let newWord='';
        for(let j=0;j<word.length;j++){
            if(j===0){
                newWord=word[0].toUpperCase();
            }else{
                newWord+=word[j].toLowerCase();
            }
        }
        newWords.push(newWord);
    }
    console.log(newWords.join(" "));
}
capitalizeWords("Capitalize these words");
