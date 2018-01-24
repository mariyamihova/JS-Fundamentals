function printNums(input){
   let result= input.filter((num,i)=>i%2===1).map(y=>y*2).reverse();
    console.log(result.join(' '));
}
printNums([10, 15, 12,16]);
