function convertToRoman(num) {
 
    let str_result="";
    let newArr=""+num;
    let pos=1;
    let idx=newArr.length-1;
    while (idx>=0){
     
       if(pos==1){
         switch(newArr.charAt(idx)){
           case '1':
           str_result="I"+str_result;
           break;
           case '2':
           str_result="II"+str_result;
           break;
         case '3':
           str_result="III"+str_result;
           break;
         case '4':
           str_result="IV"+str_result;
           break;
         case '5':
           str_result="V"+str_result;
           break;
         case '6':
           str_result="VI"+str_result;
           break;
         case '7':
           str_result="VII"+str_result;
           break;
         case '8':
           str_result="VIII"+str_result;
           break;
         case '9':
           str_result="IX"+str_result;
           break;
   
         }
       }
       else if(pos==2){
         switch(newArr.charAt(idx)){
           case '1':
           str_result="X"+str_result;
           break;
           case '2':
           str_result="XX"+str_result;
           break;
         case '3':
           str_result="XXX"+str_result;
           break;
         case '4':
           str_result="XL"+str_result;
           break;
         case '5':
           str_result="L"+str_result;
           break;
         case '6':
           str_result="LX"+str_result;
           break;
         case '7':
           str_result="LXX"+str_result;
           break;
         case '8':
           str_result="LXXX"+str_result;
           break;
         case '9':
           str_result="XC"+str_result;
           break;
         }
       }
       else if(pos==3){
         switch(newArr.charAt(idx)){
           case '1':
           str_result="C"+str_result;
           break;
           case '2':
           str_result="CC"+str_result;
           break;
         case '3':
           str_result="CCC"+str_result;
           break;
         case '4':
           str_result="CD"+str_result;
           break;
         case '5':
           str_result="D"+str_result;
           break;
         case '6':
           str_result="DC"+str_result;
           break;
         case '7':
           str_result="DCC"+str_result;
           break;
         case '8':
           str_result="DCCC"+str_result;
           break;
         case '9':
           str_result="CM"+str_result;
           break;
         }
       }
       if(pos==4){
         switch(newArr.charAt(idx)){
           case '1':
           str_result="M"+str_result;
           break;
           case '2':
           str_result="MM"+str_result;
           break;
         case '3':
           str_result="MMM"+str_result;
           break;
         }
       }
      
      
      
      idx--;
      pos++;
      
    }
    console.log(str_result);
    return str_result;
   }
   
   convertToRoman(3999);