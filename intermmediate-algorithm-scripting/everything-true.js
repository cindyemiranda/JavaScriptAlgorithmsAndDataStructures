function truthCheck(collection, pre) {
    let allIsTrue=true;
    for(let i=0; i<collection.length; i++){
      if(collection[i][pre]=== undefined || !collection[i][pre]){
        allIsTrue=false;
      }
    }
    console.log(allIsTrue);
    return allIsTrue;
  }
  
  truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id");