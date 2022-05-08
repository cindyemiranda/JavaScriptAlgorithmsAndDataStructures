function smallestCommons(arr) {
    let newArr=arr.sort(function(a, b) {
    return a - b;
    });
    let idx=1;
    let smallest=0;
    while(smallest==0){
      let divisible=true;
      for(let i=newArr[0]; i<=newArr[1]; i++){
       // console.log(idx % i);
        if(idx % i !== 0){
          divisible=false;
          break;
        }
      }
      if(divisible){
        smallest=idx;
        break;
      }
      idx++;
    }
    console.log(smallest);
    return smallest;
  }
  
  smallestCommons([23, 18]);