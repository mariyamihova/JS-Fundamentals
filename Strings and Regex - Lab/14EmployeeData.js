function printData(input) {
    let pattern=/^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;

    for(let item of input)
    {
        let match=pattern.exec(item);
        if(match){
            console.log(`Name: ${match[1]}\n`+
            `Position: ${match[3]}\n`+
            `Salary: ${match[2]} `);
        }
    }
}
printData(['Jeff - 1500 - Staff', 'Ko - 150 - Ne']);
