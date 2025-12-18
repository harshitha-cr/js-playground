/**
 * Topic: Variables
 *
 */

/* 
=========================
   VARIABLES
========================= 
*/

// var - global scope
function dummy() {
  if (true) {
    var msgg = "hi from function only";
  }
  console.log(msgg); //works
}
// console.log(msgg); //ReferenceError
dummy();

//var - allows re-declarations
var a = 10;
var a = "hi";

// let - block scoped, re-assignment allowed
// console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
let foo = 10;
foo = "hii";

//const - block-scoped, no re-assignment
const haha = "jiji";
// haha = 10;  //TypeError: Assignment to constant variable.
console.log(haha);
