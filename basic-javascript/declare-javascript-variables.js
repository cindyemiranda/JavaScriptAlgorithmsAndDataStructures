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