function checkString(word) {
    //let splitString = word.split("");
    //let reverseString=splitString.reverse();
    let newWord=word.split("").reverse().join("");

    if(newWord===word){
        console.log('true');
    }else{
        console.log('false');
    }
}
checkString("racecar");