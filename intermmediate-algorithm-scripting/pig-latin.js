function translatePigLatin(str) {
    let regStarWVowels=/^[aeiou]/;
    let regContVowels=/[aeiou]/;
    let newStr="";
    if(regStarWVowels.test(str)){
      newStr=str+"way";
    }
    else{
       let objStr=str.match(regContVowels);
      if(objStr!==null){
        newStr=str.substring(objStr.index)+str.substring(0, objStr.index)+"ay";
      }
      else{
        newStr=str+"ay";
      }
      
    }
    console.log(newStr);
    return newStr;
    
  }
  
  translatePigLatin("rhythm");