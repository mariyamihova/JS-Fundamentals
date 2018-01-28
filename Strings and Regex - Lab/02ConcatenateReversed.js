function concatenate(input) {
    let reversedArr=input.reverse();
    let result='';
    for(let i=0;i<reversedArr.length;i++){
        result+=reversedArr[i].split('').reverse().join('');
    }
    console.log(result);
}
concatenate(['race', 'car']);