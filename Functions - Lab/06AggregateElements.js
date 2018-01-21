function aggregateElements(input) {

    console.log(findSum());
    console.log(findInversedSum());
    console.log(concatenateNums());

    function findSum() {
        let sum=0;
        for(let num of input){
            sum+=num;
        }
        return sum;
    }
    
    function findInversedSum() {
        let inversedSum=0;
        for(let num of input){
            inversedSum+=1/num;
        }
        return inversedSum;
        
    }
    function concatenateNums() {
        return input.join("");

    }
}
aggregateElements([2, 4, 8, 16]);