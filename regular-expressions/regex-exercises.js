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