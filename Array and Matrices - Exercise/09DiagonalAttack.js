function diagonalAttack(matrixRows) {

    let matrix = matrixRows
        .map(row => row.split(' ').map(Number)
        );

    let primarySum = 0;
    let secondarySum = 0;

    for (let r = 0; r < matrix.length; r++) {
        primarySum += matrix[r][r];
        secondarySum += matrix[r][matrix.length - r - 1];
    }

    if (primarySum === secondarySum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let colum = 0; colum < matrix.length; colum++) {
                if (colum !== row && colum !== matrix.length - row - 1) {
                    matrix[row][colum] = primarySum;
                }
            }
        }
    }
    return matrix.map(row => row.join(' ')).join('\n');

}
console.log(diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
));