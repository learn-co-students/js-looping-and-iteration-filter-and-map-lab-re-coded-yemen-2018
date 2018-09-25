// Code your solution here:
function driversWithRevenueOver(driver,revenue){
 return driver.filter(function(driver){
    
    return driver.revenue>revenue;
  })
  
}

function driverNamesWithRevenueOver(driver,revenue){

  let d1= driver.filter(function(driver){
    
  
   
   return  driver.revenue>revenue;
      
      
    });
    let d2= d1.map(function(d1){
       
       return d1.name;
     });
    
    return d2;
}



function exactMatch(driver,prop){
  let test
  return driver.filter(function(driver){
    for(let key in prop){
     test= driver[key]===prop[key];
    }
     return test;
  });
  
}

function exactMatchToList(driver,prop){
let test;
  let m1= driver.filter(function(driver){
    for(let key in prop){
     test= driver[key]===prop[key];
    }
     return test;
    });
    let m2= m1.map(function(m1){
       
       return m1.name;
     });
    
    return m2;
}