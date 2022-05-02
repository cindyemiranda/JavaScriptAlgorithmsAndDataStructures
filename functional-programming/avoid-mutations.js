/**
 * Avoid Mutations and Side Effects Using Functional Programming
 */
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  let localFixedValue=fixedValue+1;
  return localFixedValue
  // Only change code above this line
}
