function printData(input) {

    let result = [];

    for (let line of input) {
        let data = line.split((/\s*\/\s*/));
        let name = data[0];
        let level = Number(data[1]);
        let items = [];
        if (data[2] !== undefined) {
            items = data[2].split(", ");
        }

        let obj = {name: name, level: level, items: items};
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}
printData(['Jake / 1000 / Gauss, HolidayGrenade',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
