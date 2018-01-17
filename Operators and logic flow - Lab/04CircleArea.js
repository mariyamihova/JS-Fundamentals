function findArea(radius) {
    let area = Math.PI*radius*radius;
    console.log(area);
    let areaRounded=area.toFixed(2);
    console.log(areaRounded);
}
findArea(5);