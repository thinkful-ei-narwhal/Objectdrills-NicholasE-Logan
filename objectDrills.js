// 1 object initializers and methods
"use strict";

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100;
  }
};

console.log(`flour: ${loaf.flour} | hydration: ${loaf.water}`);
console.log(loaf.hydration());

const myObj = {
  foo: "fighters",
  bar: "scuba",
  fum: "fumes",
  quux: "quiz",
  spam: "musabi"
};

function myKeys(myObj) {
  for (const key in myObj) {
    const value = myObj[key];
    console.log(key);
    console.log(value);
  }
}

myKeys(myObj);
