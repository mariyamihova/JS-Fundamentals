function storeCat(input) {
    let result=new Map();

    for(let line of input){
        let data=line.split(/\s*:\s*/);

        let name=data[0];
        let price=Number(data[1]);
        let firstLetter=name[0];

        if(!result.has(firstLetter)){
            result.set(firstLetter,new Map())
        }
        if(!result.get(firstLetter).has(name)){
            result.get(firstLetter).set(name,0)
        }
        result.get(firstLetter).set(name,price);
    }

    let sortedLetters= [...result].sort((a,b)=>
    a[0].localeCompare(b[0]));

    for(let [key,value] of sortedLetters){
        console.log(key);
        let sortedProds=[...value].sort((a,b)=>
        a[0].localeCompare(b[0]));
        for(let [prod,price]of sortedProds){
            console.log(` ${prod}: ${price}`);
        }
    }

}
storeCat(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);