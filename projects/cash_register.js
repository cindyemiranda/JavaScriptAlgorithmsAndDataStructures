function checkCashRegister(price, cash, cid) {
    let change=cash-price;
    let sumCid=0.0;
    let aux_cid=[];
    let result={};
    
    for(let i=0; i<cid.length; i++){
      sumCid=sumCid+cid[i][1];
    }
    sumCid=sumCid.toFixed(2);
    if(change>sumCid){
      result.status="INSUFFICIENT_FUNDS";
      result.change=[];
    }
    else if(change==sumCid){
       result.status="CLOSED";
       result.change=cid;
    }
    else{
      result.status="INSUFFICIENT_FUNDS";
      result.change=[];
      let aux=0;
      while(aux<=50){
        
        sumCid=0;
        aux++;
        
        if(cid[8][1]>0){  
          
          if(change>=100){
            let hundred=100;
            while(hundred<cid[8][1]){
              if((change-hundred)<0){
                hundred=hundred-100;
                break;
              }
              else{
                hundred=hundred+100;  
              }
            }
            change=change-hundred;
            change=change.toFixed(2);
            let replacement=cid[8][1]-hundred;
            cid[8][1]=replacement;
            aux_cid.push(["ONE HUNDRED", hundred]);
          }      
        }
        if(cid[7][1]>0){ 
          
          if(change>=20){
            
            let twenties=20;
            while(twenties<cid[7][1]){
              if((change-twenties)<0){
                twenties=twenties-20;
                break;
              }
              else{
                twenties=twenties+20;  
              }
            }
            change=change-twenties;
            change=change.toFixed(2);
            let replacement=cid[7][1]-twenties;
            cid[7][1]=replacement;
             
            aux_cid.push(["TWENTY", twenties]);
          }      
        }
        if(cid[6][1]>0){  
          
          if(change>=10){
            
            let tens=10;
            while(tens<cid[6][1]){
              if((change-tens)<0){
                tens=tens-5;
                break;
              }
              else{
                tens=tens+5;  
              }
            }
            change=change-tens;
            change=change.toFixed(2);
            let replacement=cid[6][1]-tens;
            cid[6][1]=replacement;
            aux_cid.push(["TEN", tens]);
            
            
          }      
        }
        if(cid[5][1]>0){  
          if(change>=5){
            let fives=5;
            while(fives<cid[5][1]){
              if((change-fives)<0){
                fives=fives-5;
                break;
              }
              else{
                fives=fives+5;  
              }
            }
            change=change-fives;
            change=change.toFixed(2);
            let replacement=cid[5][1]-fives;
            cid[5][1]=replacement;
            aux_cid.push(["FIVE", fives]);
            
          }      
        }
        if(cid[4][1]>0){  
          if(change>=1){
            let ones=1;
            while(ones<cid[4][1]){
              if((change-ones)<0){
                ones=ones-1;
                break;
              }
              else{
                ones=ones+1;  
              } 
            }
            change=change-ones;
            change=change.toFixed(2);
            let replacement=cid[4][1]-ones;
            cid[4][1]=replacement;
            aux_cid.push(["ONE", ones]);
            
          }      
        }
        
        if(cid[3][1]>0){  
          
          if(change>=0.25){
            let quarters=0.25;
            while(quarters<cid[3][1]){
              if((change-quarters)<0){
                quarters=quarters-0.25;
                break;
              }
              else{
                quarters=quarters+0.25; 
              }  
            }
            
            change=change-quarters;
            change=change.toFixed(2);
            let replacement=cid[3][1]-quarters;
            cid[3][1]=replacement;
            aux_cid.push(["QUARTER", quarters]);
            }      
        }
        if(cid[2][1]>0){  
          
          if(change>=0.10){
            let dimes=0.10;
            while(dimes<cid[2][1]){
              if((change-dimes)<0){
                dimes=dimes-0.10;
                break;
              }
              else{
                dimes=dimes+0.10; 
              }  
            }
            change=change-dimes;
            let _no_string=dimes.toFixed(2);
            change=change.toFixed(2);
            let replacement=cid[2][1]-dimes;
            cid[2][1]=replacement;
            console.log(typeof dimes);
            aux_cid.push(["DIME", parseFloat(_no_string)]);
            
          }      
        }
        if(cid[1][1]>0){  
          if(change>=0.05){
            let nickels=0.05;
            while(nickels<cid[1][1]){
              if((change-nickels)<0){
                nickels=nickels-0.05;
                break;
              }
              else{
                nickels=nickels+0.05; 
              }
            }
            nickels=nickels.toFixed(1);
            change=change-nickels;
            change=change.toFixed(2);
            let replacement=cid[1][1]-nickels;
            cid[1][1]=replacement;
            aux_cid.push(["NICKEL", nickels]);
            
          }      
        }
        if(cid[0][1]>0){  
          if(change>=0.01){
            let pennys=0.01;
            while(pennys<cid[0][1]){
              if((change-pennys)<0){
                pennys=pennys-0.01;
                break;
              }
              else{
                pennys=pennys+0.01; 
              }
            }
            change=change-pennys;
            change=change.toFixed(2);
            let replacement=cid[0][1]-pennys;
            cid[0][1]=replacement;
            aux_cid.push(["PENNY", pennys]);
          }      
        }
        
        for(let i=0; i<cid.length; i++){
          sumCid=sumCid+cid[i][1];
        }
        sumCid=sumCid.toFixed(2);
        if(sumCid<change){
          result.status="INSUFFICIENT_FUNDS";
          result.change=[];
          break;
        }
        if(change==0){
          
          result.status="OPEN";
          result.change=aux_cid;
          
          break;
        }
      
      }
      
    }
    
    console.log(result);
    return result;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);