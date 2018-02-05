function extractWords(input) {

    let result=new Set();

    for(let line of input){
        let words=line.split(/\W+/).filter(x=>x!=='');
        for(let word of words) {
            result.add(word.toLowerCase());
        }
    }
    let arr=Array.from(result);
    console.log(arr.join(', '));
    // for(let [key,value] of result.entries()){
    //     console.log(value)
    // }
    //console.log(result);

}
extractWords(["JS devs use Node.js for server-side JS.JS devs use JS.-- JS for devs --"]);