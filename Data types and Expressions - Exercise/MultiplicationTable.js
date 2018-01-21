function printTable(num) {
    let result = '<table border="1">';

    for (let i = 0; i <= num; i++) {
        result += '<tr>';
        for (let k = 0; k <= num; k++) {
            if (i == 0 && k == 0) {
                result += '<th>x</th>';
            } else if (i == 0 && k != 0) {
                result += `<th>${k}</th>`;
            }else if (i != 0 && k == 0) {
                result += `<th>${i}</th>`;
            } else if (i != 0 && k > 0) {
                result += `<td>${i * k}</td>`
            }
        }
        result += '</tr>';
    }
    result += '</table>'
    return result;
}
