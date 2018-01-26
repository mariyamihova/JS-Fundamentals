function sortArray(input) {
    input.sort().sort(function (a, b) {
        return a.length - b.length;
    });

    console.log(input.join("\n"));
}

sortArray(["test",
    "omen",
    "Deny",
    "Default"
]);