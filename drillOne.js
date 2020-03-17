'use strict';

//object creator
function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function () {
      return 'hello';
    }
  };
}

//object updater
const testObj = {
  test: 'stuff'
};

function updateObject(obj) {
  return Object.assign(obj, {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang'
  });
}

console.log(updateObject(testObj));

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    }
  };
  return person;
}
console.log(personMaker().fullName());

//Deleting keys
const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

console.log(keyDeleter(sampleObj));