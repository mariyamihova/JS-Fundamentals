function printArray(input) {
    let n = Number(input[input.length - 1]);
    input.pop();
    let result = [];
    for (let i = 0; i < input.length; i += n) {
        result.push(input[i]);
    }
    console.log(result.join("\n"));
}
printArray([5, 20, 31, 4, 20, 2]);
