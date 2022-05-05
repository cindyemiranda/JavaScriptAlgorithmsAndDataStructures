/**
 * Diff Two Arrays
 **/

 function diffArray(arr1, arr2) {
    const newArr = [];
    
      for(let i=0; i<arr1.length; i++){
        let exist=false;
        for(let j=0; j<arr2.length; j++){
          //console.log(arr1[i]+"=="+arr2[j])
          //console.log(arr1[i]==arr2[j])
          if(arr1[i]==arr2[j]){
            exist=true;
            break;
          }
        }
        if(!exist){
          newArr.push(arr1[i]);
        }
      }
   
      for(let i=0; i<arr2.length; i++){
        let exist=false;
        for(let j=0; j<arr1.length; j++){
          //console.log(arr2[i]+"=="+arr1[j])
          //console.log(arr2[i]==arr1[j])
          if(arr2[i]==arr1[j]){
            exist=true;
            break;
          }
        }
        if(!exist){
          newArr.push(arr2[i]);
        }
      }
    
    console.log(newArr);
    return newArr;
  }
  
  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
