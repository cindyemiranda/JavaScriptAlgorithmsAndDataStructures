function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    let sourceKeys=Object.keys(source);
    for(let i=0; i<collection.length; i++){
      let contiene=true;
      for(let j=0; j<sourceKeys.length; j++){
        if(collection[i].hasOwnProperty(sourceKeys[j])){
          if(collection[i][sourceKeys[j]]!==source[sourceKeys[j]]){
            contiene=false;
          }
  
        }
        else{
          contiene=false;
          break;
        }
      }
      if(contiene){
        arr.push(collection[i])
      }
    }
  
    // Only change code above this line
    console.log(arr);
    return arr;
  }
  
  whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});