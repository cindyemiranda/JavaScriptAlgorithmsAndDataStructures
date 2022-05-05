/**
 * seek and destroy
 */
 function destroyer(arr) {
    let newArr=[];
    for(let i=0; i<arr.length; i++){
      let exist=false;
      for(let j=1; j<arguments.length; j++){
         if(arr[i]==arguments[j]){
           exist=true;
           break;
         } 
      }
      if(!exist){
        newArr.push(arr[i]);
      }
    }
    console.log(newArr);
    return newArr;
  }
  
  destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");