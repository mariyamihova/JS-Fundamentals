function calculateResult(leftOperand,rightOperand,operator) {
    let result=0;
    switch (operator){
        case '+': result=leftOperand+rightOperand;
        break;
        case '-': result=leftOperand-rightOperand;
        break;
        case '*': result=leftOperand*rightOperand;
        break;
        case '/': result=leftOperand/rightOperand;
        break;
    }
    return result;
}
console.log(calculateResult(-18,1,'*'));