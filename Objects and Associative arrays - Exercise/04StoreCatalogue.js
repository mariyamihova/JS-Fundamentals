function printProducts(input) {
    let result=new Map();

    for(let line of input){
        let data=line.split(/\s*:\s*/);
        result.set(data[0],data[1]);
    }
    result=[...result].sort((a,b)=>
    a[0].toLowerCase()> b[0].toLowerCase());

    let letters = [];

    for ([key, value] of result) {

        if (!letters.includes(key[0])) {
            console.log(key[0].toUpperCase());
        }
        letters.push(key[0]);

        console.log(`  ${key}: ${value}`);

    }

}
printProducts(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]);