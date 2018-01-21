function printTriangle(count){
    function printStars(n) {
        console.log("*".repeat(n));
        
    }
    for(let i=1;i<=count;i++){
        printStars(i);
    }
    for(let k=count-1;k>0;k--){
        printStars(k);
    }
    
}
printTriangle(2);