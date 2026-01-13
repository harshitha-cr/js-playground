/* 
=========================
   Function declaration: 
   - declared as a statement in the main code flow.
   - The function declaration is hoisted.

   During the compilation phase, the JavaScript interpreter effectively moves the entire function declaration (both the name and the body) to the top of its containing scope.


   Function Expression: 
   - the function is created as a part of an expression.
   - They are treated as variable declaration


   Arrow Functions:
   - Without curly braces: (...args) => expression
   - With curly braces: (...args) => { body } 
   - It returns the expression value automatically if no curly braces are present.
   - if we use curly braces, then we need an explicit "return"
========================= 
*/

// ------------------- Function Declaration -----------------------

sayHello();
console.log(sayHello); //[Function: sayHello]

function sayHello() {
  console.log("hello from declaration");
}

// ------------------- Function Expression -----------------------

// sayHi(); // sayHi variable is hoisted, not the function. TypeError: sayHi is not a function

// console.log(sayHi); //if defined with "let", access before declaration => ReferenceError
// console.log(sayHi); //if defined with "var", access before declaration => undefined

var sayHi = function () {
  console.log("hi from expression");
};

// ------------------- Arrow Function -----------------------

let sum = (a, b) => a + b; //no return statement required
console.log(sum(2, 3));

let diff = (a, b) => {
  let ans = a - b;
  return ans;
}; //return statement required
console.log(diff(2, 3));

let hi = () => {
  console.log("hi");
}; //arrow func with no args
hi();
