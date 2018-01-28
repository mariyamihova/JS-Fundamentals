function generateUsernames(input) {
let result=[];
    for(let item of input){
        let username='';
        let args=item.split("@");
        username+=args[0]+".";
        let secondPart=args[1].split(".");
        for(let i=0; i<secondPart.length;i++){
            username+=secondPart[i][0]
        }
        result.push(username);
    }
    console.log(result.join(", "));
}
generateUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);