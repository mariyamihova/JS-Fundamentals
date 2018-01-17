function findArea(r,h) {
    let s=Math.sqrt(r*r+h*h);
    console.log("volume = " + Math.PI*r*r*h/3);
    console.log("area = "+ Math.PI*r*(r+s));
}
findArea(3,5);
