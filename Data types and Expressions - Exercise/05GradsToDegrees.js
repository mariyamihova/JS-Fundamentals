function convertToDegrees(grads) {
    grads%=400;
    grads=grads<0 ? grads+=400:grads;
    grads*=360/400;
    console.log(grads);
}
convertToDegrees(-50);