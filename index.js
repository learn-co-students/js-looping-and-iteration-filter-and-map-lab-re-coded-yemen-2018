// Code your solution here:
function driversWithRevenueOver(drivers, arg){
  let newarr=[];
  
  for (let x of drivers){
  if(x.revenue > arg)
  
  newarr.push(x);
}
 
  return newarr;
}

function driverNamesWithRevenueOver(drivers, arg){
  let newarr=[];
  
  for (let x of drivers){
  if(x.revenue > arg)
  
  newarr.push(x.name);
}
 
  return newarr;
}


function exactMatch(drivers,arg){
  let newarr=[];
  
  for (let x of drivers){
  if( x.revenue === arg.revenue || x.name === arg.name)
  
  newarr.push(x);
}
  return newarr;
}


function exactMatchToList(drivers,arg){
  let newarr=[];
  
  for (let x of drivers){
  if( x.revenue === arg.revenue || x.name === arg.name)
  
  newarr.push(x.name);
}
  return newarr;
}