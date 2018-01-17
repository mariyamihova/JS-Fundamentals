function printNums(numbers) {

    for(let num of numbers){
        console.log(Math.log2(num));
    }
}
printNums(['1024','256','1','2']);