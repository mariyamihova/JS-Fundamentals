function calculateInterest(input) {
    let principalSum=input[0];
    let interestRate=input[1];
    let periodInMonths=input[2];
    let timeInyears=input[3];

    let frequency=12/periodInMonths;
    let result=principalSum*(1+((interestRate/100)/frequency))**(frequency*timeInyears);

    console.log(result.toFixed(2));
}
calculateInterest([1500, 4.3, 3, 6]);