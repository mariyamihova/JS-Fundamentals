function findUniqueSequences(input) {

    let result=new Map();

    for(let line of input){
        let sequence=JSON.parse(line).map(Number).sort((a,b)=>b-a);
        let arr=`[${sequence.join(", ")}]`;
        if(!result.has(arr)){
            result.set(arr,arr.length);
        }
    }
    function sortArr(arrA,arrB) {
        return result.get(arrA)-result.get(arrB);
    }
    console.log([...result.keys()].sort((a, b) => sortArr(a, b)).join('\n'));
}
findUniqueSequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]);