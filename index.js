// Code your solution here:
function driversWithRevenueOver(array, rev){
  let match = [];
  
  for (let element of array){
    if (element.revenue > rev){
      match.push(element);
    }
    
  }
  return match;
}

function driverNamesWithRevenueOver(array, rev){
  let match = [];
  
  for (let element of array){
    if (element.revenue > rev){
      match.push(element.name);
    }
    
  }
  return match;
}

function exactMatch(array, name){
  let match = [];
  
  for (let element of array){
    if (element.name === name.name || element.revenue === name.revenue){

      match.push(element);
    }
    
  }
  return match;
}

function exactMatchToList(array, search){
let match = [];
  
  for (let element of array){
    if (element.name === search.name || element.revenue === search.revenue){

      match.push(element.name);
    }
    
  }
  return match;
}







