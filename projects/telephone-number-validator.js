function telephoneCheck(str) {
    let regTel=/(^1{1}\s\d{3}\-\d{3}\-\d{4}$)|(^1{1}\s\(\d{3}\)\s\d{3}\-\d{4}$)|(^1{1}\s\d{3}\s\d{3}\s\d{4}$)|(^\d{10}$)|(^1{1}\d{10}$)|(^\d{3}(\s|\-)\d{3}(\s|\-)\d{4}$)|(^\(\d{3}\)\d{3}(\s|\-)\d{4}$)|(^1{1}\(\d{3}\)\d{3}(\s|\-)\d{4}$)/g;
    let checked=regTel.test(str);
    console.log(str.match(regTel));
    console.log(checked);  
    return checked;
  }
  
  telephoneCheck("11 555-555-5555");