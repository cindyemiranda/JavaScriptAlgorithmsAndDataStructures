var myName;
/*
storing-values-with-the-assignment-operator
*/
// Setup
var a;
a=7;
// Only change code below this line
/*
assigning-the-value-of-one-variable-to-another
*/
// Setup
var a;
a = 7;
var b;
// Only change code below this line
b=a;

/**Initializing Variables with the Assignment Operator */
var xux=9;

/**Declare String Variables */
var myFirstName="Cindy";
var myLastName="Miranda";

/**Understanding Uninitialized Variables */
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line
a=5;
b=10;
c="I am a";
a = a + 1;
b = b + 5;
c = c + " String!";

/**Understanding Case Sensitivity in Variables */
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/**Explore Differences Between the var and let Keywords */
/** So unlike var, when you use let, a variable with the same name can only be declared once. */
let catName = "Oliver";
let catSound = "Meow!";

/** Declare a Read-Only Variable with the const Keyword */
// const are read-only

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

/**Add Two Numbers with JavaScript */
const sum = 10 + 10;

/**Subtract One Number from Another with JavaScript */
const difference = 45 - 33;

/**Multiply Two Numbers with JavaScript */
const product = 8 * 10;
/**Divide One Number by Another with JavaScript */
const myVar = 16 / 2;
/** Increment a Number with JavaScript*/
let myVar1 = 87;
// Only change code below this line
myVar1 ++;
/**Decrement a Number with JavaScript */
let myVar2 = 11;
myVar2--;

/**Create Decimal Numbers with JavaScript */
const ourDecimal = 5.7;

// Only change code below this line
let myDecimal= 23.6878;
/**Multiply Two Decimals with JavaScript */
const product1 = 2.0 * 2.5;
/**Divide One Decimal by Another with JavaScript */
const quotient1 = 4.4 / 2.0; // Change this line
/**Finding a Remainder in JavaScript */
const remainder = 11 % 3;
/**Compound Assignment With Augmented Addition */
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a +=12;
b +=9;
c +=7;
/**Compound assignemet with augmented substraction */

a -= 6;
b -= 15;
c -= 1;
/**Compound Assignment With Augmented Multiplication */

a *= 5;
b *=3;
c *=10;
/** Compound Assignment With Augmented Division */

a /= 12;
b /= 4;
c /= 11;

/**Escaping Literal Quotes in Strings */
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

/**Quoting Strings with Single Quotes */
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

/**Escape Sequences in Strings */
const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

/**Concatenating Strings with Plus Operator */
const myStr4 = "This is the start. "+"This is the end."; // Change this line

/**Concatenating Strings with the Plus Equals Operator */
let myStr5 = "This is the first sentence. ";
myStr5 += "This is the second sentence."

/**Constructing Strings with Variables */
const myName = "Cindy";
const myStr6 = "Hello, I am "+myName+". Nice to meet you!";

/**Appending Variables to Strings */
const someAdjective = "amazing";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;

/**Find the Length of a String */
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

/**Use Bracket Notation to Find the First Character in a String */
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName1[0]; // Change this line

/**Use Bracket Notation to Find the Nth Character in a String*/
const thirdLetterOfLastName = lastName[2]; // Change this line

/**Use Bracket Notation to Find the Last Character in a String */
const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line

/**Use Bracket Notation to Find the Nth-to-Last Character in a String */
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

/**Word Blanks */
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The "+myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb; // Change this line

/**Store Multiple Values in one Variable using JavaScript Arrays */
const myArray = ["One string", 89];

/**Nest one Array within Another Array */
const myArray1 = [["One string", 33],["Two strings", 55]];

/**Access Array Data with Indexes */
const myArray3 = [50, 60, 70];
const myData= myArray[0];

/**Modify Array Data With Indexes */
const myArray4 = [18, 64, 99];
// Only change code below this line
myArray4[0] = 45;

/**Access Multi-Dimensional Arrays With Indexes */
const myArray5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData1 = myArray5[2][1];

/**Manipulate Arrays With push() */
const myArray6 = [["John", 23], ["cat", 2]];
myArray6.push(["dog",3]);

/**Manipulate Arrays With pop() */
const myArray7 = [["John", 23], ["cat", 2]];
const removedFromMyArray=myArray7.pop();

/**Manipulate Arrays With shift() */
const myArray8 = [["John", 23], ["dog", 3]];
const removedFromMyArray1 = myArray8.shift();

/**Manipulate Arrays With unshift() */
const myArray9 = [["John", 23], ["dog", 3]];
myArray9.shift();
myArray9.unshift(["Paul", 35]);

/**Shopping List */
const myList = [];
myList.push(["Milk",4]);
myList.push(["Rice",2]);
myList.push(["Apple",5]);
myList.push(["Bread",10]);
myList.push(["Bananas",44]);

/**Write Reusable JavaScript with Functions */
function reusableFunction(){
    console.log("Hi World");
}
reusableFunction();

/**Passing Values to Functions with Arguments */
function functionWithArgs(num1, num2){
    console.log(num1+num2)
}
 functionWithArgs(43,45);

/**Return a Value from a Function with Return */
function timesFive(num){
  return num*5;
}
const answer= timesFive(11);

/**Global Scope and Functions */
// Declare the myGlobal variable below this line
let myGlobal=10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal=5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/**Local Scope and Functions */
function myLocalScope() {
// Only change code below this line
   const myVar="red";
   console.log('inside myLocalScope', myVar);
 }
 myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

/**Global vs. Local Scope in Functions */
const outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
  const outerWear="sweater";
  // Only change code above this line
  return outerWear;
}
myOutfit();

/**Understanding Undefined Value returned from a Function */
let sum1 = 0;
function addThree() {
  sum1 = sum1 + 3;
}
// Only change code below this line
function addFive(){
  sum1=sum1+5;
}
// Only change code above this line
addThree();
addFive();

/**Assignment with a Returned Value */
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
// Only change code below this line
processed=processArg(7);

/**Stand in Line*/
function nextInLine(arr, item) {
// Only change code below this line
arr.push(item);
item=arr[0];
arr.shift();
return item;
// Only change code above this line
}
// Setup
const testArr = [1, 2, 3, 4, 5];
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/**Understanding Boolean Values */
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

/**Use Conditional Logic with If Statements */
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if(wasThatTrue){
    return "Yes, that was true";
  }  
  if(!wasThatTrue){
    return "No, that was false";
  }
  // Only change code above this line
}

/**Comparison with the Equality Operator */
function testEqual(val) {
  if (val==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

/**Comparison with the Strict Equality Operator */
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

/**Practice comparing different values */
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");

/**Comparison with the Inequality Operator */
function testNotEqual(val) {
  if (val!=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

/**Comparison with the Strict Inequality Operator */
function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

/**Comparison with the Greater Than Operator */
function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}
testGreaterThan(10);

/**Comparison with the Greater Than Or Equal To Operator*/
function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
testGreaterOrEqual(10);

/**Comparison with the Less Than Operator */
function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}
testLessThan(10);

/**Comparison with the Less Than Or Equal To Operator */
function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
testLessOrEqual(10);

/**Comparisons with the Logical And Operator*/
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}
testLogicalAnd(10);

/**Comparisons with the Logical And Operator*/
function testLogicalAnd(val) {
  // Only change code below this line

  if (val<=50 && val>=25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

/**Comparisons with the Logical Or Operator*/
function testLogicalOr(val) {
  // Only change code below this line

  if (val<10 || val>20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

/**Introducing Else Statements */
function testElse(val) {
  let result = "";
  // Only change code below this line
  if (val > 5) {
    result = "Bigger than 5";
  }
  else {
    result = "5 or Smaller";
  }
  // Only change code above this line
  return result;
}
testElse(4);

/**Introducing Else If Statements */
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  else if (val < 5) {
    return "Smaller than 5";
  }
  else{
    return "Between 5 and 10";
  }
}

testElseIf(7);

/**Logical Order in If Else Statements */
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
/**Chaining If Else Statements */
function testSize(num) {
  // Only change code below this line
  if(num<5){
    return "Tiny";
  }
  else if(num<10){
    return "Small";
  }
  else if(num<15){
    return "Medium";
  }
  else if(num<20){
    return "Large";
  }
  else if(num>=20){
    return "Huge";
  }
  else{
    return "Change Me";
  }
}

testSize(7);

/**Golf Code */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes==1){
    return names[0];
  }
  else if(strokes<=(par-2)){
    return names[1];
  }
  else if(strokes==(par - 1)){
    return names[2];
  }
  else if(strokes==par){
    return names[3];
  }
  else if(strokes==(par + 1)){
    return names[4];
  }
  else if(strokes==(par + 2)){
    return names[5];
  }
  else if(strokes>=(par + 3)){
    return names[6];
  }
  else{
    return "Change Me";
  }
  
  // Only change code above this line
}

golfScore(5, 4);

/**Selecting from Many Options with Switch Statements */
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case 1:
      answer="alpha";
      break;
    case 2:
      answer="beta";
      break;
    case 3:
      answer="gamma";
      break;
    case 4:
      answer="delta";
      break;
  }


  // Only change code above this line
  return answer;
}

caseInSwitch(1);

/**Adding a Default Option in Switch Statements */
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case 'a':
      answer="apple";
      break;
    case 'b':
      answer="bird";
      break;
    case 'c':
      answer="cat";
      break;
    default:
      answer="stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

/**Multiple Identical Options in Switch Statements */
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
      answer="Low";
      break;
    case 4:
    case 5:
    case 6:
      answer="Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer="High";
      break;
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

/**Replacing If Else Chains with Switch */

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);

/**Returning Boolean Values from Functions */
function isLess(a, b) {
  // Only change code below this line
  
  return a<b;
  // Only change code above this line
}
isLess(10, 15);

/**Return Early Pattern for Functions*/
function abTest(a, b) {
  // Only change code below this line
  if(a<0 || b<0){
    return undefined;
  }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

/**Counting Cards */
let count = 0;

function cc(card) {
  // Only change code below this line
  
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count +=1;
      break;
    case 7:
    case 8:
    case 9:
      count +=0;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count-=1;
      break;
  }
  if(count>0){
    return count + " Bet";
  }
  else{
    return count + " Hold";
  }

  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

/**Build JavaScript Objects */
const myDog = {
  // Only change code below this line
  name:"Sancho",
  legs:4,
  tails:1,
  friends:["Tiger", "Ushio"]

  // Only change code above this line
};

/**Accessing Object Properties with Dot Notation */
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

/**Accessing Object Properties with Bracket Notation */
const testObj1 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj1["an entree"];   // Change this line
const drinkValue = testObj1["the drink"];    // Change this line

/**Accessing Object Properties with Variables */
// Setup
const testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj2[playerNumber];   // Change this line

/**Updating Object Properties */
const myDog1 = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog1.name="Happy Coder";

/**Add New Properties to a JavaScript Object */
const myDog2 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog2.bark="woof";

/**Delete Properties from a JavaScript Object */
const myDog3 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog3.tails;
// Only change code below this line

/**Using Objects for Lookups */
// Setup
function phoneticLookup(val) {
  let result = "";
  const lookup={
     alpha: "Adams",
     bravo: "Boston",
     charlie:"Chicago",
     delta: "Denver",
     echo: "Easy",
     foxtrot: "Frank"
  };
  
  result=lookup[val];
  return result;
}

phoneticLookup("charlie");

/**Testing Objects for Properties */
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }
  else{
    return "Not Found";
  }
}

/**Manipulating Complex Objects */
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Nightwish",
    "title": "Sleeping Sun",
    "release_year": 1998,
    "formats":["CD", "LP"]
  }
];
