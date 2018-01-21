function calculateDistance(input) {
    let distanceA=(input[0]/3.6)*input[2];
    let distanceB=(input[1]/3.6)*input[2];

    console.log(Math.abs(distanceA-distanceB));

}
calculateDistance([11,10,120]);