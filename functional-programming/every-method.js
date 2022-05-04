/**
 * Use the every Method to Check that Every Element in an Array Meets a Criteria
 * @param {*} arr 
 * @returns 
 */

function checkPositive(arr) {
    // Only change code below this line
    let positive=arr.every(function(value){
      return value>=0;
    })
    return positive;
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);