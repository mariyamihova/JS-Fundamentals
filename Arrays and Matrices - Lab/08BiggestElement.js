function solve(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        result.push(Math.max.apply(null, matrix[i]));
    }
    console.log(Math.max.apply(null, result));
}
solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
);