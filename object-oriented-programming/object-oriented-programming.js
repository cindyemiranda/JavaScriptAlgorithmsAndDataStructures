/**
 * Create a Basic JavaScript Object
 */
 let dog = {
    name: "Jungle",
    numLegs: 4
  };

/**
 *  Use Dot Notation to Access the Properties of an Object
*/
  // Only change code below this line
  console.log(dog.name);
  console.log(dog.numLegs);

/**
 * Create a Method on an Object
 */

 let dog1 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function(){return "This dog has "+dog1.numLegs+" legs."}
  
  };
  
  dog1.sayLegs();

/**
 * Make Code More Reusable with the this Keyword
 */

 let dog2 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog2.sayLegs();