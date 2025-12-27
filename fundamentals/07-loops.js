const prompt = require("prompt-sync")();

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 2; j++) {
//     // if (i == 2) continue;
//     if (i == 3) break;
//     console.log(`hi i=${i}  j=${j}`);
//   }
//   console.log(`hi from outer loop ${i}`);
// }

//break only breaks the nearest loop, not entire loop structure.
//continue skips current iteration

/**
 * Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

 - The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
 */
let num;
do {
  num = prompt("Enter a number: ");
} while (num <= 100 && num);
