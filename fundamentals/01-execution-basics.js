/**
 * Topic: Execution Basics
 *
 *
 * - Statements are syntax constructs and commands that perform actions.
 * - JavaScript interprets the line break as an “implicit” semicolon
 * - "use strict" - Enables modern JS behavior
 */

"use strict";
//because of this directive, the below code works in 'modern' way

// Browser
// alert("Hello Browser");

//Console
console.log("Hello Terminal");

// Automatic Semicolon Insertion (ASI)
console.log("Hello");
console.log("World"); // works

// Dangerous ASI
// console.log("Hello")
// [(1, 2)].forEach(console.log);

/**
 * Takeaways:
 * - JS runs top to bottom
 * - alert blocks execution until dismissed
 * - ASI can break code in rare cases
 * - Modern JavaScript supports “classes” and “modules” that enable use strict automatically.
 *
 */
