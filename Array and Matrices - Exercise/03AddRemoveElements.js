function printArray(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "add") {
            result.push(i + 1);
        }
        if (input[i] === "remove") {
            result.pop();
        }
    }
    if (result.length > 0) {
        console.log(result.join("\n"));
    } else {
        console.log("Empty");
    }

}
printArray(["remove", "remove", "remove"]);