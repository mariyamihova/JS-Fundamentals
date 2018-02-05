function printComponents(input) {

    let result=new Map();

    for(let line of input){
        let data=line.split(/\s*\|\s*/);
        let system=data[0];
        let component=data[1];
        let subcomponent=data[2];

        if(!result.get(system)){
            result.set(system,new Map());
        }
        if(!result.get(system).get(component)){
            result.get(system).set(component,[]);
        }
        result.get(system).get(component).push(subcomponent);
    }

    function orderSystems(a,b) {

        let aComponents=result.get(a).size;
        let bComponents=result.get(b).size;

            if(aComponents<bComponents){
                return 1;
            }
            if(aComponents>bComponents){
                return -1;
            }

            return a.toLowerCase().localeCompare(b.toLowerCase());

            }

            let orderedSystems=Array.from(result.keys()).sort((a,b)=>orderSystems(a,b));

    for(let system of orderedSystems){
        console.log(system);
        let components=Array.from(result.get(system).keys()).sort((c,d)=>result.get(system).get(d).length-result.get(system).get(c).length);
        for(let component of components){
            console.log(`|||${component}`);
            for(let subcomponent of result.get(system).get(component)){
                console.log(`||||||${subcomponent}`);
            }
        }
    }

}
printComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);