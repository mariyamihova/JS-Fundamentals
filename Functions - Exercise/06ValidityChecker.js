function checkValidity(input) {
    let x1=input[0];
    let y1=input[1];
    let x2=input[2];
    let y2=input[3];

    console.log(isvalid(x1,y1,0,0));
    console.log(isvalid(x2,y2,0,0));
    console.log(isvalid(x1,y1,x2,y2));

    function isvalid(x1,y1,x2,y2) {
        if (Math.sqrt((Math.abs(x1 - x2) ** 2) + (Math.abs(y1 - y2) ** 2)) % 2 === 0 ||
            Math.sqrt((Math.abs(x1 - x2) ** 2) + (Math.abs(y1 - y2) ** 2)) % 2 === 1) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        }

        return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }
}
checkValidity([2, 1, 1, 1]);
