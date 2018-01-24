function solve(input) {
    let islands = [
        {name: 'Tuvalu', x1: 1, x2: 3, y1: 1, y2: 3},
        {name: 'Tonga', x1: 0, x2: 2, y1: 6, y2: 8},
        {name: 'Samoa', x1: 5, x2: 7, y1: 3, y2: 6},
        {name: 'Tokelau', x1: 8, x2: 9, y1: 0, y2: 1},
        {name: 'Cook', x1: 4, x2: 9, y1: 7, y2: 8},
    ];

    for (let i = 0; i < input.length - 1; i += 2) {
        console.log(isInIsland(input[i], input[i + 1]))
    }

    function isInIsland(x, y) {

        for (let i = 0; i < islands.length; i++) {
            if (x >= islands[i].x1 && x <= islands[i].x2 && y >= islands[i].y1 && y <= islands[i].y2) {
                return islands[i].name
            }
        }
        return "On the bottom of the ocean";
    }
}
solve([6, 4]);