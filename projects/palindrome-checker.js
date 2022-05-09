function palindrome(str) {
    let regText=/[a-zA-Z0-9]/;
    let newStr="";
    let isPal=true;
    for (let i=0; i<str.length; i++){
      //console.log(regText.test(str.charAt(i)));
      if(regText.test(str.charAt(i))){
        newStr=newStr+str.charAt(i).toLowerCase();
      }
    }
    let last=newStr.length-1;
    let start=0;
    while(start<newStr.length){
      if(newStr.charAt(last)!==newStr.charAt(start)){
        isPal=false;
        break;
      }
      start++;
      last--;
    }
   //console.log(newStr);
    //console.log(isPal);
    return isPal;
  
  }
  
  palindrome("five|\_/|four");