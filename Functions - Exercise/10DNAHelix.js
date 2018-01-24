function printHelix(rows) {
    let chain = "ATCGTTAGGG";
    let index = 0;
    for (let i = 0; i < rows; i++) {
        let currentRow = i % 4;

        if (currentRow === 0) {
            console.log('**' + chain[index++ % chain.length] + chain[index++ % chain.length] + '**')
        } else if (currentRow === 1 || currentRow === 3) {
            console.log('*' + chain[index++ % chain.length] + '--' + chain[index++ % chain.length] + '*');
        } else {
            console.log(chain[index++ % chain.length] + '----' + chain[index++ % chain.length]);
        }
    }
}
printHelix(20);