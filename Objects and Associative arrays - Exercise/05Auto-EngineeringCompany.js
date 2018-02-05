function printCarInfo(input) {
    let result=new Map();
    for(let line of input){

        let data=line.split(/\s*\|\s*/);
        let brand=data[0];
        let model=data[1];
        let count=Number(data[2]);

        if(!result.has(brand)){
            result.set(brand,new Map());
        }
        if(!result.get(brand).has(model)){
            result.get(brand).set(model,0);
        }
        result.get(brand).set(model,result.get(brand).get(model)+count);
    }
    for(let [brand,carInfo] of result){
        console.log(`${brand}`);
        for(let[model,count] of carInfo){
            console.log(`###${model} -> ${count}`);
        }
    }
}
printCarInfo(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
   'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);
