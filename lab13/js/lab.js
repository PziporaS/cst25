/*
   lab.js - This simple JavaScript/jQuery script creates a loop.

   Requirements: jQuery must be loaded for this script to work.

   Author: Pzipora Shepherd
   Date: 2025
*/


// Function to create a loop
function fizzBuzzBoom() {
  // Loop through numbers 1 to 200
  for (let i = 1; i <= 200; i++) {
    let output = "";
  
    if (i % 3 === 0) output += "Fizz!";
    if (i % 5 === 0) output += "Buzz!";
    if (i % 7 === 0) output += "Boom!";

    console.log(output || i);

    $("#output").append('<div class="text"><p>' + output + '</p></div>');
  }
}

// Run the function
fizzBuzzBoom();