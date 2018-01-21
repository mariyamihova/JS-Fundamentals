function assignProperties(input) {
    let obj = {};

    obj[input[0]] = input[1];
    obj[input[2]] = input[3];
    obj[input[4]] = input[5];

    console.log(obj);
}
assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);
