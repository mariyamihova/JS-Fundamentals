function printNums(input){
    let result=[];
   for(let i=0;i<input.length;i++){
       if (i%2!==0){
           result.push(input[i]*2);
       }
   }
    result.reverse();
    console.log(result.join(' '));
}
printNums([10, 15, 20, 25]);
