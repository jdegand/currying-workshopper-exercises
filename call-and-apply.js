/*

var update = function(name, age, tShirtSize) {
  this.name = name;
  this.age = age;
  this.tShirtSize = tShirtSize;
};

var person = { name: 'Kishor', age: 28, tShirtSize: 'L' };

var callAndApply = {
      caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
        return Function.prototype.call(person, update, nameArg, ageArg, tShirtSizeArg )
      },
      applier: function (object, method, argumentsArr) {
        return Function.prototype.apply(person, update, argumentsArr)
      }
    };

*/

var callAndApply = {
      caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
        method.call(object, nameArg, ageArg, tShirtSizeArg )
      },
      applier: function (object, method, argumentsArr) {
       method.apply(object, argumentsArr)
      }
    };


    module.exports = callAndApply;
