function calculateDistance(input) {

    let x1 = input[0];
    let y1 = input[1];
    let z1 = input[2];
    let x2 = input[3];
    let y2 = input[4];
    let z2 = input[5];

    let distance = Math.sqrt(findDistance(x1, x2) + findDistance(y1, y2) + findDistance(z1, z2));

    function findDistance(num1, num2) {
        let dif = Math.abs(num1 - num2);
        let difPow = dif * dif;
        return difPow;
    }

    console.log(distance);

}
calculateDistance([1, 1, 0, 5, 4, 0]);
