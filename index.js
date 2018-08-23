// Code your solution here:
function driversWithRevenueOver(array, string){
  return array.filter(function(elment){
    return elment.revenue > string;
  });
};
function driverNamesWithRevenueOver(array, string){
  return driversWithRevenueOver(array, string).map(function(elment){
    return elment.name;
  });
};
function exactMatch(array, obj){
  return array.filter(function(elment){
    let flag = false;
    for(const key in obj){
      flag = elment[key] === obj[key];
    }
    return flag;
  });
};
function exactMatchToList (array, obj) {
  return exactMatch(array, obj).map(function (elment) {
      return elment.name;
    });
}
