/**
 * Convert Celsius to Fahrenheit
 */
function convertToF(celsius) {
   let fahrenheit=(celsius*(9/5))+32;
   return fahrenheit;
}
convertToF(30);

/**
 * Reverse a String
 */
function reverseString(str) {
    let newArr=[];
    for(let i=0; i<str.length; i++ ){
        newArr.unshift(str[i]);
    }
    console.log(newArr);
    str="";
    for(let i=0; i<newArr.length; i++ ){
        str=str+newArr[i];
    }
    console.log(str);
    return str;

}
reverseString("hello");

/**
 * Factorialize a Number
 */
 function factorialize(num) {
    let result=1;
    for(let i=1; i<=num; i++){
      result=result*i;
    }
    return result;
  }
  
  factorialize(5);

  /**
   * Find the Longest Word in a String
   */
   function findLongestWordLength(str) {
    let max_length=0;
    let idx=0;
    let idx1=str.indexOf(' ', idx);;
    //console.log(idx1);
    while(idx1!=-1){
      let strAux=str.substring(idx,idx1);
      idx=idx1+1;
      idx1=str.indexOf(' ', idx);
      if(idx1==-1){
        strAux=str.substring(idx,str.length);
      }
      if(max_length<strAux.length){
        max_length=strAux.length;
      }
    }
    //console.log(max_length);
    return max_length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

