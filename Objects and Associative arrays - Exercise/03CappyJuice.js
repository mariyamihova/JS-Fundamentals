function findBottles(input) {
    let result = new Map();
    let output=new Map();
    for (let line of input) {
        let data = line.split(/\s*=>\s*/)
        let juice = data[0];
        let quantity = Number(data[1]);
        if (!result.has(juice)) {
            result.set(juice, quantity)
        } else {
            result.set(juice, result.get(juice) + quantity);
        }
        if (result.get(data[0]) >= 1000) {
            if (!output.has(data[0])) {
                output.set(data[0], result.get(data[0]));
            } else {
                output.set(data[0], output.get(data[0]) + (result.get(data[0]) - output.get(data[0])));
            }
        }

    }
    for (let [juice, quantity] of output) {
        if (quantity >= 1000) {
            let bottles = Math.floor(quantity / 1000);
            console.log(`${juice} => ${bottles}`);
        }
    }
}
findBottles(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'

]);
