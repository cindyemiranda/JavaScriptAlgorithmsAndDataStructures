/**
 * Sum All Numbers in a Range
 */
 function sumAll(arr) {
    arr=arr.sort(function(a,b){
      return a -b;
    });
    //console.log(arr);
    let sum=0;
    for(let i=arr[0]; i<=arr[1]; i++){
      sum=sum+i;
    }
    //console.log(sum);
    return sum;
  }
  
  sumAll([1, 4]);

  /**
   * Diff Two Arrays
   */

  