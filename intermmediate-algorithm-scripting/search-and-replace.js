/**
 * Search and Replace
 */
 function myReplace(str, before, after) {
    let newArr=str.split(' ');
    let newStr="";
    let regTextUpper=/^[A-Z]/;
    for(let i=0; i<newArr.length; i++){
      if(newArr[i]==before){
        if(regTextUpper.test(newArr[i])){
          newArr[i]=after.charAt(0).toUpperCase()+after.substring(1);
        }
        else{
          newArr[i]=after.toLowerCase();
        }
      }
    }
    newStr=newArr.join(" ");
    console.log(newStr);
    return newStr;
  }
  
  myReplace("Let us get back to more Coding", "Coding", "algorithms");