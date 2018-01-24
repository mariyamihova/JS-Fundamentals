function printNums(n,k) {

    let result=[1];

    for(let i=1;i<n;i++){
        let sum=0;
        let start=Math.max(0,i-k);

        for(let m=start;m<i;m++){
            sum+=result[m];
        }
        result[i]=sum;
    }
console.log(result.join(' '));
}

printNums(6,2);
