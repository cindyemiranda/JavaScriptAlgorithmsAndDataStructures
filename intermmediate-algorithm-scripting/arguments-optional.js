function addTogether() {
    const [first, second]=arguments;
    
    if(first === undefined || typeof first !== 'number'){
      return undefined;
     }
     else if(second===undefined){
       function addSecond(second){
         
        if(typeof second !=='number'){
           return undefined;
        }
        else{
          return first+second;
        }
       }
       return addSecond;
     }
     else if (typeof(second) !== 'number') {
       return undefined;
     }
     else {
       return first + second;
     }
     
   }
   
   console.log(addTogether("2", 3));