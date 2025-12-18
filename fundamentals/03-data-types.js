/**
 * Data Types
 * - 7 primitive: number, BigInt, strings, boolean, null, undefined, symbol
 * - object
 */

// number - integers, float, Infinity, -Infinity, NaN
let a = NaN;
console.log(typeof a);

let b = 1 / 0; //Infinity
console.log(b); //typeof(b) - number
console.log(undefined);

//strings
let one = "to do";
let two = "things";
let three = `graceful way ${one + " " + two}`;
console.log(three);

//boolean
let isGreater = 4 > 1;
console.log(isGreater);

typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2)

typeof alert; // "function"  (3)

/**
 * (1) Math is a built-in object that provides mathematical operations.
 *
 * (2) typeof null is "object" is an error in typeof. null is not an object.
 *
 * (3) The result of typeof alert is "function", because alert is a function. We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in JavaScript.
 * Functions belong to the object type. But typeof treats them differently, returning "function".
 *
 *
 */
