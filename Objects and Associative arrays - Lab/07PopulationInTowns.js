function printPopulation(input) {

    let result = new Map();

    for (let line of input) {
        let data = line.split(/\s*<->\s*/);
        let town = data[0];
        let population = Number(data[1]);
        if (result.has(town)) {
            result.set(town, result.get(town) + population);
        } else {
            result.set(town, population)
        }
    }
    for (let [key, value] of result) {
        console.log(`${key} : ${value}`);
    }


}
printPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Sofia <-> 1200000'
]);