function  roundNums(input) {
    let number = input[0];
    let precision = input[1];

    if (precision > 15) {
        precision = 15;
    }

    let count = 0;
    number=Number(number).toFixed(precision);

    for (let i = number.length - 1; i >= 0; i--) {
        if (number[i] != 0) {
            break;
        } else {
            count++;
        }
    }

    if (count > 0){
        number = Number(number).toFixed(precision - count);
    }

    console.log(number);
}
roundNums([3.1415926535897932384626433832795, 2]);
