function solveEquation(a, b, c) {
    let discriminant = (b ** 2) - (4 * a * c);

    if (discriminant > 0) {
        let firstRoot = ((0 - b) + Math.sqrt(discriminant)) / (2 * a);
        let secondRoot = ((0 - b) - Math.sqrt(discriminant)) / (2 * a);
        console.log(Math.min(firstRoot, secondRoot));
        console.log(Math.max(firstRoot, secondRoot));
    } else if (discriminant === 0) {
        let root = ((0 - b) / (2 * a));
        console.log(root);
    } else {
        console.log("No");
    }
}
solveEquation(6, 11, -35);