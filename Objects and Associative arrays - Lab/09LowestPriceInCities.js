function printPrice(input) {

    let result=new Map();

    for(let line of input){
        let data=line.split(/\s*\|\s*/);
        let product={};
        product.town=data[0];
        product.name=data[1];
        product.price=Number(data[2]);

        if(!result.has(product.name)|| result.get(data[1]).price>data[2]){
            result.set(data[1],product);
        }

    }
    for (let [key, value] of result) {

            console.log(`${key} -> ${value.price} (${value.town})`);

    }
}
printPrice([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]);
