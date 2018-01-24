function solve(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let x3 = input[4];
    let y3 = input[5];


   let distance12=(findDistance(x1, y1, x2, y2));
   let distance23=(findDistance(x2, y2, x3, y3));
   let distance13=(findDistance(x1, y1, x3, y3));

    if (distance12 + distance23 <= distance23 + distance13) {
        console.log('1->2->3: ' + Number(distance12 + distance23));
    }
    else if (distance12 + distance13 < distance23 + distance13) {
        console.log("2->1->3: " + Number(distance12 + distance13));
    }
    else {
        console.log("1->3->2: " + Number(distance23 + distance13));
    }


    function findDistance(x1, y1, x2, y2) {
        return Math.sqrt((Math.abs(x1 - x2) ** 2) + (Math.abs(y1 - y2) ** 2));
    }
}
solve([5, 1, 1, 1, 5, 4]);
