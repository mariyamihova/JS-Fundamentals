function printTowns(input) {
    input.shift();
    let result=[];
    for(let town of input){
        let data=town.split('|');
        let name=data[1].trim();
        let latitude=data[2].trim();
        let longitude=data[3].trim();

        let obj={Town:name,Latitude:Number(latitude),Longitude:Number(longitude)};
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}
printTowns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
//[{"Town":"Sofia","Latitude":42.69,"Longitude":23.32},