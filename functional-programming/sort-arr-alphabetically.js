function alphabeticalOrder(arr) {
    // Only change code below this line
    let newArr= arr.sort(function(a,b){
        return a === b? 0: a > b ?1 : -1;
    });
    console.log(newArr);
    return newArr;
    // Only change code above this line
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

  /**
   * Return a Sorted Array Without Changing the Original Array
   */

   const globalArray = [5, 6, 3, 2, 9];

   function nonMutatingSort(arr) {
     // Only change code below this line
       let newArray= arr.slice(0);
       newArray = newArray.sort(function(a ,b){
        return a === b? 0: a > b ?1 : -1;
     });
     console.log(newArray);
     return newArray;
     // Only change code above this line
   }
   
   nonMutatingSort(globalArray);