/**
 * Split a String into an Array Using the split Method
 */

 function splitify(str) {
    // Only change code below this line
    const myArr=str.split(/\W/);
    console.log(myArr);
    return myArr;
    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");