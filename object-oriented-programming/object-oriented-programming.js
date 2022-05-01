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

  /**
   * Define a Constructor Function
   */
   function Dog(){
    this.name= "Jungle";
    this.color="Black and white";
    this.numLegs=4;
  }

  /**
   * Use a Constructor to Create Objects
   */
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  let hound= new Dog();

/**
 * Extend Constructors to Receive Arguments
 */
 function Dog(name, color) {
    this.name=name;
    this.color=color;
    this.numLegs=4;
  }
  let terrier= new Dog("Cookie", "Yellow");

/**
 * Verify an Object's Constructor with instanceof
 */

 function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse=new House(3);
  
  myHouse instanceof House;

/**
 * Understand Own Properties
 */
 function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  
  for(let property in canary){
    if(canary.hasOwnProperty(property)){
      ownProps.push(property);
    }
  }
  
  console.log(ownProps);
/**
 * Use Prototype Properties to Reduce Duplicate Code
 */
 function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs=4;
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");

/**
 * Iterate Over All Properties
 */
 function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle1 = new Dog("Snoopy");
  
  let ownProps1 = [];
  let prototypeProps = [];
  
  // Only change code below this line
  for(let property in beagle1){
    if(beagle1.hasOwnProperty(property)){
      ownProps1.push(property);
    }
    else{
      prototypeProps.push(property);
    }
  }

/**
 * Understand the Constructor Property
 */
 function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog){
      return true;
    }
    else{
      return false;
    }
  }

  /**
   * Change the Prototype to a New Object
   */
   function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function(){
      console.log("ñam ñam ñam");
    },
    describe: function(){
      console.log("My name is "+this.name+"!");
    }
  
  };