/**
 * Use the some Method to Check that Any Elements in an Array Meet a Criteria
 */

 function checkPositive(arr) {
    // Only change code below this line
     const positive=arr.some(function(value){
       return value>=0;
     }); 
    return positive;
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);