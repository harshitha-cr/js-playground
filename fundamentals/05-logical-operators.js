/* 
=========================
   OR "||" 

   - Converts to boolean while evaluation
   - OR returns the first truthy value or the last one if no truthy value is found.
========================= 
*/

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder

/**
 - short circuit evaluation - used to choose between values and function calls
 - people use this feature to execute commands only if the condition on the left part is falsy.
 */

true || console.log("not printed");
false || console.log("printed");

/* 
=========================
   AND "&&"

   - AND returns the first falsy value or the last value if none were found.

========================= 
*/
console.log(1 && 2 && null && 3); // null - first falsy value
console.log(1 && 2 && 3); // 3, the last one

/* 
=========================
   NOT "!"

   - COnverts to boolean and returns inverse of it.
   - sometimes used for converting a value to boolean type:

========================= 
*/

console.log(!!"non-empty string"); // true
console.log(!!null); // false

console.log("trying");
console.log(console.log(1) && console.log(2)); // 1 undefined

/* 
=========================
   null Coalescing operator "??"

   - a ?? b  returns the first occuring operand which is not null/undefined
   - short way to choose the first “defined” value from a list.

========================= 
*/
console.log("Null coalescing operator `??`");
let a = null;
let b;
let c = 10;
console.log(a ?? b ?? c);

//how is it different from ||
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0 i.e., height

//You can also 'modify in place' with the nullish coalescing operator:

let num = null;
console.log((num ??= 10)); //10
