function printNumber(number) {
    let averageValue=0;

    while(averageValue<=5){
        averageValue=findAverage(number);
        if (averageValue <= 5) {
            number = number + '9';
        }
    }
    return number;
    function findAverage(number) {
        let sum=0;
        for(let i=0;i<number.toString().length;i++){
            sum+=Number(number.toString()[i]);
        }
        return sum/number.toString().length;

    }
}
console.log(printNumber(5835));