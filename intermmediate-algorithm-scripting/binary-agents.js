function binaryAgent(str) {
    let newArr=str.split(" ");
    let arrStr=[];
    for(let i=0; i<newArr.length; i++){
      
      arrStr.push(String.fromCharCode(parseInt(newArr[i],2)));
    }
    
    let str1=arrStr.join('');
    console.log(str1);
    return str1;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");