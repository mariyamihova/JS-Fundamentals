function findSmallestNums(input) {
    console.log(input.sort((a, b) => a - b)
        .slice(0, 2)
        .join(' '));
}
findSmallestNums([3, 0, 10, 4, -1, 3]);