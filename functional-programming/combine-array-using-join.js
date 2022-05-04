/**
 * 
 * @param {Combine an Array into a String Using the join Method} str 
 * @returns 
 */
 function sentensify(str) {
    // Only change code below this line
    const newArr=str.split(/\W/);
    // Only change code above this line
    return newArr.join(" ");
  }
  
  sentensify("May-the-force-be-with-you");