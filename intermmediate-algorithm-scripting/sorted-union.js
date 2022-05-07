function uniteUnique(arr) {
    let newArr=[];
    for(let i=0; i<arguments.length; i++){
      let subArr=arguments[i];
      for(let j=0; j<subArr.length; j++){
        let existe=false;
        for(let k=0; k<newArr.length; k++){
          if(newArr[k]==subArr[j]){
            existe=true;
            break;
          }
        }
        if(!existe){
          newArr.push(subArr[j]);
        }  
      }
    }
    console.log(newArr);
    return newArr;
  }
  
  uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);