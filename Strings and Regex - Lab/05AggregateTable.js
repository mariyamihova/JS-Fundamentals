function aggregate(input) {
let towns=[];
let total=0;
    for(let item of input){
        let args=item.split("| ").filter(x=>x!==" ");
        let town=args[1].trim();
        towns.push(town);
        let income=args[2].trim();
        total+=Number(income);
    }
    console.log(towns.join(", "));
    console.log(total);
}
aggregate(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);