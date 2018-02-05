function printTable(input) {
    let html = '<table>\n';

    for (let line of input) {
        html += '<tr>\n';
        let obj = JSON.parse(line);
        html += `<td>${obj.name}</td>\n`;
        html += `<td>${obj.position}</td>\n`;
        html += `<td>${obj.salary}</td>\n`;


        html += '<tr>\n';
    }

    html += '</table>';

 return html

}
console.log(printTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]));
