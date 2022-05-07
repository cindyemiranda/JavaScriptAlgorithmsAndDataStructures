function fearNotLetter(str) {
    let alphabet="abcdefghijklmnopqrstuvwxyz";
    let result;
    let idx=alphabet.indexOf(str.charAt(0));
    //console.log(idx);
    for(let i=0; i<str.length; i++){
      if(str.charAt(i)!=alphabet.charAt(idx)){
        result=alphabet.charAt(idx);
        break;
      }
      idx++;
    }    
   //console.log(result);
    return result;
  }
  
  fearNotLetter("abcdefghijklmnopqrstuvwxyz");