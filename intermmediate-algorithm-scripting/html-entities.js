function convertHTML(str) {
    let newStr=str.replaceAll("&","&amp;");
    newStr=newStr.replaceAll("\"","&quot;");
    newStr=newStr.replaceAll("<","&lt;");
    newStr=newStr.replaceAll(">","&gt;");
    newStr=newStr.replaceAll("\'","&apos;");
    console.log(newStr);
    return newStr;
  }
  
  convertHTML("abc");