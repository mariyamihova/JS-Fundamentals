function checkNumber(number) {
    let remainder=number%2;
    if(remainder===0){
        console.log("even");
    }else if(Math.abs(remainder)===1){
        console.log("odd");
    }else{
        console.log("invalid");
    }
}
//checkNumber(14.98);