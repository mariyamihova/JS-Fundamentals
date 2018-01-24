function printNums(input) {
    let k=input.shift();
    console.log(input.slice(0,k).join(' '));
    console.log(input.slice(input.length-k,k+1).join(' '));

}
printNums([2, 7, 8, 9]);
