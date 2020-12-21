let count = 0;

invocation = (arg) => {
  if(!arg){
  let final = count;
  count = undefined; //or null can't be zero
  return final;
  }else {
  count += arg;
  return invocation;
  }
}



/*
invocation = (arg) => {
  var add = (prev) => (curr) => curr ? add(prev + curr) : prev
  return add(0)(arg)
  }
*/
module.exports = invocation;
