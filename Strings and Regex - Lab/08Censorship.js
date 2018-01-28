function censorWords(text,input) {
let newText='';
    for(let item of input){
        let newWord="-".repeat(item.length);
       while(text.indexOf(item)>-1){
            text=text.replace(item,newWord);
       }
    }
    console.log(text);
}
censorWords('roses are red, violets are blue', [', violets are', 'red']);