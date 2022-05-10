function rot13(str) {
    let srtAlph="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let strResult="";
    for(let i=0; i<str.length; i++){
      let idx=srtAlph.indexOf(str.charAt(i));
      
      if(idx!=-1){
        idx=idx+13;
        strResult=strResult+srtAlph.charAt(idx % srtAlph.length);
      }
      else{
        strResult=strResult+str.charAt(i);
      }
    }
    console.log(strResult);
    return strResult;
  }
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");