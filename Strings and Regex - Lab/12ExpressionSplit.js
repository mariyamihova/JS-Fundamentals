function splitExpression(expression) {
    let elements=expression.split(/[\s.();,]+/);
    console.log(elements.join("\n"));
}
splitExpression('let sum = 4 * 4,b = "wow";');