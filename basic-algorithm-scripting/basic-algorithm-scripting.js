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

  /**
   * Return Largest Numbers in Arrays
   */
   function largestOfFour(arr) {
    let newArr=[];
    for(let i=0; i<arr.length; i++){
      let max=arr[i][0];
      for(let j=0; j<arr[i].length; j++){
        if(arr[i][j]>=max){
          max=arr[i][j];
        }
      }
      newArr.push(max);
    }
    return newArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  /**
   * Confirm the Ending
   */
   function confirmEnding(str, target) {
    let endStr=str.substring((str.length-target.length), str.length);
    //console.log(endStr);
    return (endStr===target);
  }
  
  confirmEnding("Bastian", "n");

  /**
   * Repeat a String Repeat a String
   */
   function repeatStringNumTimes(str, num) {
    let newStr=str;
    if(num>0){
      for(let i=0; i<num-1; i++){
       str=str+newStr;
      }
    }
    else{
      str="";
    }
    
    //console.log(str);
    return str;
  }
  
  repeatStringNumTimes("abc", 3);

  /**
   * Truncate a String
   */
   function truncateString(str, num) {
    if(num>=str.length){
      return str;
    }
    else{
      let newArray= str.substring(0, num);
      newArray=newArray+"...";
     //console.log(newArray);
      return newArray;
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
