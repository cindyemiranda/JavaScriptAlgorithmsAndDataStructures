const squareList = arr => {
    // Only change code below this line
    let newArr=arr.filter((num)=>{
      let int_num= parseInt(num, 10);
      let float_num = parseFloat(num);
      let isOk=true;
      if(float_num>0){
        if(int_num>=float_num){
          float_num=int_num-float_num;
        }
        if(float_num>int_num){
          float_num=float_num-int_num;
        }
        if(float_num>0){
            isOk=false;
        }
      }
      else{
        isOk=false;
      }
      if(isOk){
        return (int_num*int_num);  
      }
    }).map((num)=>{
      return Math.pow(num,2);
    });
    console.log(newArr);
    return newArr;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);