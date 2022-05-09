const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
  
    this.getFirstName=function(){
      const newArr=fullName.split(" ");
      console.log(newArr[0]);
      return newArr[0];
    };
  
    this.getLastName= function(){
      const newArr=fullName.split(" ");
      console.log(newArr[1]);
      return newArr[1];
    };
  
    this.getFullName = function() {
      console.log(fullName);
      return fullName;
    };
   
    this.setFirstName=function(first){
      const newArr=fullName.split(" ");
      fullName=first+" "+newArr[1];
    }
  
    this.setLastName=function(last){
      const newArr=fullName.split(" ");
      fullName=newArr[0]+" "+last;
    }
  
    this.setFullName=function(firstAndLast){
      fullName=firstAndLast;
    }
  
    
  };
  
  const bob = new Person('Haskell Curry');
  bob.setFullName("Haskell Curry");
  bob.getFullName();