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

  /**
   * Finders Keepers
   */
   function findElement(arr, func) {
    let num = undefined;
    for(let i=0; i<arr.length; i++){
      if(func(arr[i])){
        num=arr[i];
        break;
      }
    }
    return num;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

  /**
   * Boo who
   */
   function booWho(bool) {
  
    if(bool===true || bool===false){
      return true;
    }
    else{
      return false;
    }
  }
  
  booWho(null);

  /**
   * Title Case a Sentence
   */
   function titleCase(str) {
    str=str.toLowerCase();
    let newStr="";
    let inicial=str.charAt(0);
    inicial=inicial.toUpperCase();
    newStr=newStr+inicial;
    let indxSpace=0;
    for(let i=1; i<str.length; i++){
      if(str.charAt(i)===' '){
        indxSpace=i;
      }
      inicial=str.charAt(i);
      if(indxSpace!=0){
        if(indxSpace==(i-1)){
          inicial=inicial.toUpperCase();
        }
      }
      newStr=newStr+inicial;
    }
    console.log(newStr);
    return newStr;
  }
  
  titleCase("I'm a little tea pot");

  /**
   * Slice and Splice
   */
   function frankenSplice(arr1, arr2, n) {
    let newArr=arr2.slice(0,n);
    newArr.push(...arr1);
    //console.log(arr2.slice(n,arr2.length));
    newArr.push(...arr2.slice(n,arr2.length))
    //console.log(newArr);
    return newArr;
  }
  
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);

  /**
   * Falsy Bouncer
   */
function bouncer(arr) {  
   return arr.filter(Boolean);
}
bouncer([false, null, 0, NaN, undefined, ""]);

/**
 * Where do I Belong
 */
 function getIndexToIns(arr, num) {
  arr=arr.sort(function (a, b) {  return a - b;  });;
  console.log(arr);
  let idx=0;
  for(let i=0; i<arr.length; i++){
    if(num<=arr[i]){
        if(i>0){
          if((num-arr[i-1])<(arr[i]-num)){
            idx=i-1;
            break;
          }
          else{
            idx=i;
            break;
          }
        }
        else{
          if((num-arr[i])<(arr[i+1]-num)){
            idx=i;
            break;
          }
          else{
            idx=i+1;
            break;
          }
        }
    }
    else{
      if(i==arr.length-1){
        idx=arr.length;
      }
    }
  }
  console.log(idx);
  return idx;
}

getIndexToIns([2, 5, 10], 15);

/**
 * Mutations
 */
 function mutation(arr) {
  let str1= arr[0];
  let str2= arr[1];
  let contains=true;
  for(let i=0; i<str2.length; i++){
    contains=false;
    let char2=str2.charAt(i);
    char2=char2.toLowerCase();
    for(let j=0; j<str1.length; j++){
      let char1=str1.charAt(j);
      char1=char1.toLowerCase();
      if(char1==char2){
        contains=true;
        break;
      }
    }
    if(!contains){
      break;
    }
  }
  return contains;
}

mutation(["hello", "hey"]);

/**
 * Chunky Monkey
 */
 function chunkArrayInGroups(arr, size) {
  let newArr=[];
  let arrAux=[];
  let inx=0;
  for(let i=0; i<arr.length; i++){
    if(inx<size){
      arrAux.push(arr[i]);  
    }
    inx++;
    if(inx==size){
      newArr.push(arrAux);
      inx=0;
      arrAux=[];
    }
    //console.log(arrAux);
  }
  if(arrAux.length>0){
    newArr.push(arrAux);
  }
  //console.log(newArr);
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);