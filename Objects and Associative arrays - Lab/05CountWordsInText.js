function countWords(input) {
    let result={};
    for(let line of input){
        let words=line.split(/\W+/).filter(x=>x!=='');
        for(let word of words){
            if (result[word] === undefined) {
                result[word] = 1;
            } else
                result[word] ++;
        }
    }

    console.log(JSON.stringify(result));

}
countWords(["JS devs use Node.js for server-side JS.-- JS for devs"]);
