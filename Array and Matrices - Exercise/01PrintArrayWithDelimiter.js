function printArray(input) {
    let delimiter=input[input.length-1];
    input.pop();
    console.log(input.join(delimiter));
}
printArray(["one", "two", '-']);