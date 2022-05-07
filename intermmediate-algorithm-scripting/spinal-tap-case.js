function spinalCase(str) {
    let regTextUp=/[A-Z]/;
    let regTextLow=/[a-z]/;
    let newStr="";
    for(let i=0; i<str.length; i++){
       let char=str.charAt(i);
       if(regTextLow.test(char)){
         newStr=newStr+char; 
       }
       else if(regTextUp.test(char)){
         if(i==0){
           newStr=newStr+char.toLowerCase(); 
         }
         else{
           if(newStr.charAt(newStr.length-1)=='-'){
              newStr=newStr+char.toLowerCase();
           }
           else{
              newStr=newStr+"-"+char.toLowerCase();
           }
           
         }
       }
       else{
          newStr=newStr+"-";
       } 
       //console.log(newStr);
    }
    console.log(newStr);
    return newStr;
  }
  
  spinalCase('AllThe-small Things');