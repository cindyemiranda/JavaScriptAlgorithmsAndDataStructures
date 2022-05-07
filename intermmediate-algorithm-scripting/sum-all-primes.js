function sumPrimes(num) {
    let sum=0;
    for(let i=2; i<=num; i++){
      //console.log(i);
      let count=0;
      for(let j=1; j<=i;j++){
        //console.log("j: "+j);
        //console.log(i%j);
        if(i % j === 0){
          //console.log("divisible");
           count++; 
        }
      }
      //console.log("count: "+count);
      if(count<=2){
        sum=sum+i;
      }
      //console.log("result: "+sum);
    }
    console.log(sum);
    return (sum);
  }
  
  sumPrimes(977);