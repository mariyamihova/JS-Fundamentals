function printTable(number) {
    let result = '<table border="1">';
    for(let i=0;i<=number;i++){
        result+='<tr>';
        let index=i;
        for(let k=0;k<=number;k++){
            if(i==0&&k==0){
                result+='<th>x</th>';
            }else if(i==0&&k!=0){
                result+=`<th>${k}</th>`;
            }else if(i!=0&&k==0){
                result += `<th>${i}</th>`;
            }else if(i!=0 && k>0){
                result += `<td>${index}</td>`;
            }
            if(k>=1){
                index+=i;
            }
        }
        result+='</tr>';
    }
    result+='</table>'
    return result;
}
console.log(printTable(5));
