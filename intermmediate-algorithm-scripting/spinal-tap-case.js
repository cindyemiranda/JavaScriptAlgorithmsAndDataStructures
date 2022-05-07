function spinalCase(str) {
    let arr= str.split(/\W/);
    let newStr=arr.join("-");
    newStr=newStr.toLowerCase();
    console.log(newStr);
    return newStr;
  }
  
  spinalCase('This Is Spinal Tap');