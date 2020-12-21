function invocation(arg){
  let closed = arg;
  return function delay(arg2){
    return closed + arg2;
  }
}

module.exports = invocation;
