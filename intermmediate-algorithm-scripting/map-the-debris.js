function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let newArr= arr.map(function(collect){
        let a=Math.pow(collect["avgAlt"]+earthRadius,3);
        a=a/GM;
        a=Math.sqrt(a);
        a=2*Math.PI*a;
        a=Math.round(a);
        return {name:collect["name"], orbitalPeriod: a};
    });
    console.log(newArr);
    return newArr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);