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