/* ----- var hoisting ----- */

console.log(a); // undefined (not ReferenceError)
var a = 10;

/**
 * Internally JS treats it like:
 * var a;
 * console.log(a);
 * a = 10;
 */

/* ----- let & const hoisting ----- */

// console.log(b); ReferenceError
let b = 20;

/* ----- Temporal Dead Zone (TDZ) ----- */

/**
 * TDZ = time between entering scope and declaration
 * Accessing variable in TDZ throws ReferenceError
 */

{
  console.log(x);
  TDZ;
  let x = 5;
  console.log(x); // 5
}

/* ----- Function hoisting ----- */

// Function declaration (fully hoisted)
sayHi(); // works

function sayHi() {
  console.log("Hi!");
}

// Function expression (NOT hoisted)
// greet(); TypeError / ReferenceError

const greet = function () {
  console.log("Hello");
};
