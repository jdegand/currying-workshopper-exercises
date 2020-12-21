//const curry = a => b => c => d => a + b + c + d;
function curry(add, totalArgs) {
  totalArgs = totalArgs || add.length
         return function recursor(){
             return arguments.length < totalArgs?recursor.bind(this, ...arguments): add.call(this, ...arguments);
         }
}

var add = curry((a,b,c,d)=> a+b+c+d)

// https://theanubhav.com/2019/02/03/js-currying-in-interview/#add234-and-add234-usage-in-same-function

module.exports = curry;
