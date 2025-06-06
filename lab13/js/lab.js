/*
   lab.js - This simple JavaScript/jQuery script creates a loop.

   Requirements: jQuery must be loaded for this script to work.

   Author: Pzipora Shepherd
   Date: 2025
*/

// Function to create a the loop
function fizzBuzzBoom() {

  // Declare variables for inputs and get their values, and use the variables to replace hardcoded values in the function
  let maxLoop = $("#max-loop").val();
  //console.log(maxLoop);

  let factorOne = $("#factor-one").val();
  //console.log(factorOne);

  let factorOnePrint = $("#factor-one-print").val();
  //console.log(factorOnePrint);

  let factorTwo = $("#factor-two").val();
  //console.log(factorTwo);

  let factorTwoPrint = $("#factor-two-print").val();
  //console.log(factorTwoPrint);

  let factorThree = $("#factor-three").val();
  //console.log(factorThree);

  let factorThreePrint = $("#factor-three-print").val();
  //console.log(factorThreePrint);

  // Loop through numbers 1 to 200
  for (let i = 1; i <= maxLoop; i++) {
    let output = "";
  
    if (i % factorOne === 0) output += factorOnePrint;
    if (i % factorTwo === 0) output += factorTwoPrint;
    if (i % factorThree === 0) output += factorThreePrint;
  
    // If output is still empty, it means it's not a multiple of 3, 5, or 7
    if (output === "") {
      output = i;
    } else {
      // Add number, equals and exclamation mark for Fizz, Buzz, or Boom
      let newoutput = output += "!";
      output = i + " = " + newoutput;
    }

    //console.log(i);
    //console.log(output || i);
    console.log(output);
    
    $("#output").append('<div class="text"><p>' + output + '</p></div>');
  }
}

// click listener for button
$("#button").click(function(){
  // Empty the output div first
  $("#output").empty();
  // Run the function
  fizzBuzzBoom();
});