function printFormat(input) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>\n<quiz>');

    for(let i=0;i<input.length;i++){
        if(i%2==0){
            console.log(`  <question>\n    ${input[i]}\n  </question>`)
        }else{
            console.log(`  <answer>\n    ${input[i]}\n  </answer>`)
        }
    }
    console.log('</quiz>');
}
printFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]);
