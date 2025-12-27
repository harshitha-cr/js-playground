/**
 *
 * Addition +,
 * Subtraction -,
 * Multiplication *,
 * Division /,
 * Remainder %,
 * Exponentiation **.
 *
 */

/* 
=========================
   String concatenation with binary +
========================= 
*/
console.log("1" + 2); // "12"
console.log(2 + "1"); // "21"
console.log(2 + 2 + "1"); // "41" and not "221"
console.log("1" + 2 + 2); // "122" and not "14"

/* 
=========================
   Unary +
========================= 
*/
let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
console.log(+apples + +oranges); // 5

// the longer variant
// console.log( Number(apples) + Number(oranges) ); // 5

/* 
=========================
   Unary -
========================= 
*/
let one = 1;
let nOne = -one;
console.log(nOne);

/* 
=========================
   Assignment operator: 

   - The call x =  value writes value into x and returns it.
========================= 
*/
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);

console.log(a); // 3
console.log(c); // 0
//the result of expression (a = b + 1) is the value which was assigned to a (that is 3).

/* 
=========================
   Modify in-place
========================= 
*/
let n = 2;
n *= 3 + 5; // right part evaluated first, same as n *= 8
console.log(n); // 16

/* 
=========================
   Increment/Decrement

   - Their precedence is higher than most other arithmetical operations.
   - ++a => Increment and return the value
   - a++ => Return the value then increment
========================= 
*/
let counter = 0;
console.log(++counter); // 1

let counter1 = 0;
console.log(counter1++); // 0

/* 
=========================
   Comparisons
========================= 
*/

// other types converted to numbers
console.log("2" > 1); // true, string '2' becomes a number 2
console.log("01" == 1); // true, string '01' becomes a number 1

// Strict equality compares without type-cpnversion
console.log(0 === false); // false, because the types are different

/* 
=========================
   Comparisons with null & undefined
========================= 
*/
console.log(null > 0); // (1) false
console.log(null == 0); // (2) false
console.log(null >= 0); // (3) true

/**
 * Mathematically, that’s strange. The last result states that “null is greater than or equal to zero”, so in one of the comparisons above it must be true, but they are both false.

The reason is that an equality check == and comparisons > < >= <= work differently. 

* - Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

* - equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.
 */

console.log(undefined > 0); // false (1)
console.log(undefined < 0); // false (2)
console.log(undefined == 0); // false (3)

// Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
// The equality check (3) returns false because undefined only equals null, undefined, and no other value.

console.log("trying");
console.log(null === undefined); //false
console.log(null == undefined); //true

console.log(null > undefined); // (0>NaN) => NaN => false

console.log(null == "\n0\n"); //null equals(==) itself and undefined only => false
console.log(null >= "\n0\n"); //(0 >= 0) => true
