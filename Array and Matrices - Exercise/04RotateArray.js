function printArray(input) {

    let count = input.pop() % input.length;

    for (let i = 0; i < count; i++) {
        let temp = input[input.length - 1];
        for (let j = input.length - 1; j >= 1; j--) {
            input[j] = input[j - 1];
        }
        input[0] = temp;
    }
    console.log(input.join(" "));
}
printArray(["banana", "orange", "coconut", "apple", 15]);
