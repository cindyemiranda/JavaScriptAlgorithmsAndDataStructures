function sumFibs(num) {
    let result=0;
    let seq1=1;
    let seq2=1;
    let sequence=0;
    if(seq2<=num){
      result=result+seq1;
      result=result+seq2;
      
    }
    while(seq2<=num){
      let aux=seq2;
      seq2=seq2+seq1;
      seq1=aux;
      if(seq2<=num){
        if(seq2 % 2 !== 0){
          result=result+seq2;
        }
      }
      else{
        break;
      }
    }
    console.log(result);
    return result;
  }
  
  sumFibs(75025);