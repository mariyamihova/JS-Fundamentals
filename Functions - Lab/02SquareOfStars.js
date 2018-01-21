function printSquare(count) {
    function printStars(count) {
        console.log("* ".repeat(count));

    }

    for (let i = 1; i <= count; i++) {
        printStars(count);
    }
}
printSquare(5);