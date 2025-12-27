/**
 If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
 */

/**
Node.js core module
Used in backend & CLI programs
Asynchronous
Event-driven
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Who's there? ", (ipName) => {
  if (ipName === "admin") {
    rl.question("Enter password ", (pw) => {
      if (pw === "TheMaster") {
        console.log("welcome home");
      } else if (pw === "") {
        console.log("Cancelled");
      } else {
        console.log("good luck next time, imposter");
      }
      rl.close();
    });
  } else if (ipName === "") {
    console.log("cancelled");
    rl.close();
  } else {
    console.log("idk you, bitch");
    rl.close(); //learn about callback, async, await, promises etc ooof!!
  }
});
