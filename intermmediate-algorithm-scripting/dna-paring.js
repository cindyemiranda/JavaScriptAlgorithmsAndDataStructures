function pairElement(str) {
    let newArr=[];
    for(let i=0; i<str.length; i++){
      let subArr=[];
      subArr.push(str[i]);
      switch (str[i]){
        case "A":
          subArr.push("T");
          break;
        case "T":
          subArr.push("A");
          break;
        case "C":
          subArr.push("G");
          break;
        case "G":
          subArr.push("C");
          break;
      }
      newArr.push(subArr);
    }
    console.log(newArr);
    return newArr;
  }
  
  pairElement("CTCTA");