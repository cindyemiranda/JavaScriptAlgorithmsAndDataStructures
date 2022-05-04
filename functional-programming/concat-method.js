function nonMutatingConcat(original, attach) {
    // Only change code below this line
    return original.concat(attach);
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);

  /**
   * Add Elements to the End of an Array Using concat Instead of push
   */
   function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);
  
    // Only change code above this line
  }
  
  const first1 = [1, 2, 3];
  const second1 = [4, 5];
  nonMutatingPush(first1, second1);

  