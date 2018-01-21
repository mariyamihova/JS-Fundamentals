function convertToInchesAndFeets(num) {
    let inches=num%12;
    let feets=(num-inches)/12;
    console.log(`${feets}'-${inches}"`);
}
convertToInchesAndFeets(55);