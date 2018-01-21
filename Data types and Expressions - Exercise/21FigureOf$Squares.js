function drawSquares(n) {
    let lines=n;
    if(n%2===0){
        lines=n-1;
    }

    let width=(2*n)-1;
    let minusSigns=(width-3)/2;
    let pipeLines=(lines-3)/2;
    if(n===2){
        console.log('+' + '-'.repeat(minusSigns)+ '+' + '-'.repeat(minusSigns)+ '+');
    }else{
        console.log('+' + '-'.repeat(minusSigns)+ '+' + '-'.repeat(minusSigns)+ '+');
        for(let k=1;k<=pipeLines;k++){
            console.log('|'+' '.repeat(minusSigns)+'|'+' '.repeat(minusSigns)+'|');
        }
        console.log('+' + '-'.repeat(minusSigns)+ '+' + '-'.repeat(minusSigns)+ '+');
        for(let i=1;i<=pipeLines;i++){
            console.log('|'+' '.repeat(minusSigns)+'|'+' '.repeat(minusSigns)+'|');
        }
        console.log('+' + '-'.repeat(minusSigns)+ '+' + '-'.repeat(minusSigns)+ '+');
    }

}
drawSquares(6);