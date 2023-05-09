for(let i=2;i<=200;i++){
    let count=0;
    for(let j=2;j<=i;i++){
        if(i%j==0){
            count =1;
            break;
        }   
    }
    if(count==0)
        console.log(i)
}

