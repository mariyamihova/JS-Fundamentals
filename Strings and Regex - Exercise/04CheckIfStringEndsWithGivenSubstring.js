function checkString(str, substr) {

    if(str.endsWith(substr)){
        console.log("true");
    }else{
        console.log("false");
    }
}
checkString('This is Houston, we have…',
'We have…');
