function captureNums(input) {
    let numbers=[];
    let pattern=/\d+/g;
    let text='';

    for(let i=0;i<input.length;i++){
        text+=input[i];
    }
    let match=pattern.exec(text);

    while(match){
        numbers.push(match[0]);
        match=pattern.exec(text);
    }
    console.log(numbers.join(" "));
}
captureNums(["The300",
"What is that?",
    "I think it’s the 3rd movie.",
    "Lets watch it at 22:45"]);
