/**
 * Using the Test Method
 */
 let myString = "Hello, World!";
 let myRegex = /Hello/;
 var result = myRegex.test(myString); // Change this line

 /**
  * Match Literal Strings
  */
  let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
  let waldoRegex = /Waldo/; // Change this line
  let result1 = waldoRegex.test(waldoIsHiding);

  /**
   * Match a Literal String with Different Possibilities
   */
   let petString = "James has a pet cat.";
   let petRegex = /dog|cat|bird|fish/; // Change this line
   let result2 = petRegex.test(petString);

   /**
    * Ignore Case While Matching
    */
    let myString1 = "freeCodeCamp";
    let fccRegex = /freeCodeCamp/i; // Change this line
    result = fccRegex.test(myString);

    /**
     * Extract Matches
     */
     let extractStr = "Extract the word 'coding' from this string.";
     let codingRegex = /coding/; // Change this line
     let result = extractStr.match(codingRegex); // Change this line

    /**
     * Find More Than the First Match
     */
    let twinkleStar = "Twinkle, twinkle, little star";
    let starRegex = /twinkle/gi; // Change this line
    let result = twinkleStar.match(starRegex); // Change this line

    /**
     * Match Anything with Wildcard Period
     */
    let exampleStr = "Let's have fun with regular expressions!";
    let unRegex = /.un/; // Change this line
    let result = unRegex.test(exampleStr);

     /**
     * Match Single Character with Multiple Possibilities
     */
      let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
      let vowelRegex = /[aeiou]/gi; // Change this line
      let result = quoteSample.match(vowelRegex); // Change this line

      /**
       * Match Letters of the Alphabet
       */
       let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
       let alphabetRegex = /[a-z]/gi; // Change this line
       let result = quoteSample1.match(alphabetRegex); // Change this line

    /**
     * Match Numbers and Letters of the Alphabet
     */
     let quoteSample2 = "Blueberry 3.141592653s are delicious.";
     let myRegex2 = /[h-s2-6]/gi; // Change this line
     let result = quoteSample.match(myRegex); // Change this line

    /**
     * Match Single Characters Not Specified
     */
     let quoteSample3 = "3 blind mice.";
     let myRegex3 = /[^aeiou^0-9]/gi; // Change this line
     let result = quoteSample.match(myRegex); // Change this line


   /**
   * Match Characters that Occur One or More Times
   */
   let difficultSpelling = "Mississippi";
   let myRegex1 = /s+/g; // Change this line
   let result = difficultSpelling.match(myRegex1);

   /**
    * Match Characters that Occur Zero or More Times
    */
   // Only change code below this line
   let chewieRegex = /Aa*/; // Change this line
   // Only change code above this line

   let result = chewieQuote.match(chewieRegex);

   /**
    * Find Characters with Lazy Matching
    */
    let text = "<h1>Winter is coming</h1>";
    let myRegex4 = /<[h]*?1>/; // Change this line
    let result = text.match(myRegex4);

    /**
     * Find One or More Criminals in a Hunt
     */
     let reCriminals = /C+/; // Change this line
     /*
     const text="CC"
     console.log(text.match(reCriminals));
     */

     /**
      * Match Beginning String Patterns
      */
      let rickyAndCal = "Cal and Ricky both like racing.";
      let calRegex = /^Cal/; // Change this line
      let result = calRegex.test(rickyAndCal);

      /**
       * Match Ending String Patterns
       */
   let caboose = "The last car on a train is the caboose";
   let lastRegex = /caboose$/; // Change this line
   let result = lastRegex.test(caboose);

   /**
    * Match All Letters and Numbers
    */
   let quoteSample4 = "The five boxing wizards jump quickly.";
   let alphabetRegexV2 = /\w/g; // Change this line
   let result = quoteSample.match(alphabetRegexV2).length;

   /**
    * Match Everything But Letters and Numbers
    */
   let quoteSample5 = "The five boxing wizards jump quickly.";
   let nonAlphabetRegex = /\W/g; // Change this line
   let result = quoteSample.match(nonAlphabetRegex).length;

   /**
    * Match All Numbers
    */
   let movieName = "2001: A Space Odyssey";
   let numRegex = /\d/g; // Change this line
   let result = movieName.match(numRegex).length;

   /**
    * Match All Non-Numbers
    */
   let movieName1 = "2001: A Space Odyssey";
   let noNumRegex = /\D/g; // Change this line
   let result = movieName.match(noNumRegex).length;

   /**
    * Restrict Possible Usernames
    */
      let username = "JackOfAllTrades";
      const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
      let result = userCheck.test(username);

   /**
    * Match Whitespace
    */
   let sample = "Whitespace is important in separating words";
   let countWhiteSpace = /\s+/g; // Change this line
   let result = sample.match(countWhiteSpace);

   /**Match Non-Whitespace Characters
    * 
    */
   let sample1 = "Whitespace is important in separating words";
   let countNonWhiteSpace = /\S/g; // Change this line
   let result = sample.match(countNonWhiteSpace);

   /**
    * Specify Upper and Lower Number of Matches
    */
    let ohStr = "Ohhhh no";
    let ohRegex = /Oh{3,6}\sno/gi; // Change this line
    let result = ohRegex.test(ohStr);
    console.log(result);

/**
 * Specify Only the Lower Number of Matches
 */  
  let haStr = "Hazzzzah";
  let haRegex = /Haz{4,}ah/; // Change this line
  let result = haRegex.test(haStr);

  /**
  * Specify Exact Number of Matches
  */
  let timStr = "Timmmmber";
  let timRegex = /Tim{4}ber/; // Change this line
  let result = timRegex.test(timStr);

  /**
   * Check for All or None
   */
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

/**
* Positive and Negative Lookahead
*/
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

/**
 * Check For Mixed Grouping of Characters
 */
 let myString3 = "Eleanor Roosevelt";
 let myRegex5 = /(eleanor|Franklin\sD.)\sRoosevelt/i; // Change this line
 let result = myRegex.test(myString); // Change this line
 // After passing the challenge experiment with myString and see how the grouping works

/**
 * Reuse Patterns Using Capture Groups
 */
 let repeatNum = "42 42 42 42";
 let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
 let result = reRegex.test(repeatNum);
 console.log(repeatNum.match(reRegex))

 /**
  * se Capture Groups to Search and Replace
  */
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText ='$3 $2 $1'; // Change this line
let result = str.replace(fixRegex, replaceText);

/**
 * Remove Whitespace from Start and End
 */
 let hello = "   Hello, World!  ";
 let wsRegex = /^\s+|\s+$/g; // Change this line
 let result = hello.replace(wsRegex, ''); // Change this line
 console.log("|"+result+"|");