function printArray(input) {
    let result = [];
    let biggestNum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= biggestNum) {
            biggestNum = input[i];
            result.push(biggestNum);
        }
    }
    console.log(result.join("\n"));
}
printArray([1, 2, 3, 4

]);