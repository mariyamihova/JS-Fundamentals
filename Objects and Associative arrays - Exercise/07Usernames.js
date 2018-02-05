function printName(input) {

    let result = new Set();

    for (let name of input) {
        result.add(name);
    }
    let arr = Array.from(result);
    console.log(arr.sort(function(a,b){
        if(a.length<b.length){
            return -1;
        }
        if(a.length>b.length){
            return 1;
        }
        return a.localeCompare(b);

    }
        ).join("\n"));

}
printName(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
);