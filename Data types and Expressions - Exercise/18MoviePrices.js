function findPrice(input) {
    let godfather = {
        'monday': 12,
        'tuesday': 10,
        'wednesday': 15,
        'thursday': 12.50,
        'friday': 15,
        'saturday': 25,
        'sunday': 30  };
    let shindlerList = {
        'monday': 8.50,
        'tuesday': 8.50,
        'wednesday': 8.50,
        'thursday': 8.50,
        'friday': 8.50,
        'saturday': 15,
        'sunday': 15  };
    let casablanca = {
        'monday': 8,
        'tuesday': 8,
        'wednesday': 8,
        'thursday': 8,
        'friday': 8,
        'saturday': 10,
        'sunday': 10  };
    let theWizardOfOs = {
        'monday': 10,
        'tuesday': 10,
        'wednesday': 10,
        'thursday': 10,
        'friday': 10,
        'saturday': 15,
        'sunday': 15  };

    let result = '';

    if (input[1].toLowerCase() != 'monday' &&
        input[1].toLowerCase() != 'tuesday' &&
        input[1].toLowerCase() != 'wednesday' &&
        input[1].toLowerCase() != 'thursday' &&
        input[1].toLowerCase() != 'friday' &&
        input[1].toLowerCase() != 'saturday' &&
        input[1].toLowerCase() != 'sunday') {
        result = 'error';
    }else{
        switch (input[0].toLowerCase()){
            case 'the godfather':
                console.log(godfather[input[1].toLowerCase()]);
                break;
            case 'schindler\'s list':
                result = shindlerList[input[1].toLowerCase()];
                break;
            case 'casablanca':
                result = casablanca[input[1].toLowerCase()];
                break;
            case 'the wizard of oz':
                result = theWizardOfOs[input[1].toLowerCase()];
                break;
            default:
                result = 'error';
                break;
        }
    }
    return result;
}
console.log(findPrice(['casablanca', 'sunday']));