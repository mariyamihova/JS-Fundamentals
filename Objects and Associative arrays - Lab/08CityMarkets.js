function printIncome(input) {
    let result = new Map();
    for (let line of input) {
        let data = line.split(/\s*->\s*/);
        let town=data[0];
        let product=data[1];
        let[quantity,price]=data[2].split(/\s*:\s*/);
        let income=Number(quantity)*Number(price);
        if(!result.has(town)){
            result.set(town,new Map());
        }
        let oldIncome=result.get(town).get(product);
        if(oldIncome){
            income+=oldIncome;
        }
        result.get(town).set(product,income);
    }

    for (let [town, product] of result) {
        console.log(`Town - ${town}`);
        for(let[prod,income]of product){
            console.log("$$$"+`${prod} : ${income}`)
        }
    }
}
printIncome([
    'Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'
]);
