/*
   lab.js - This simple JavaScript/jQuery script creates a function that depends on conditionals.

   Requirements: jQuery must be loaded for this script to work.

   Author: Pzipora Shepherd
   Date: 2025
*/


// Function to determine the house
function sortingHat(str) {
  // Count the length of the string
  let length = str.length;

  // Use modulus to determine the house
  let mod = length % 4;

  // Assign houses based on the mod value
  if (mod == 0) {
    return "Gryffindor";
  } else if (mod == 1) {
    return "Hufflepuff";
  } else if (mod == 2) {
    return "Ravenclaw";
  } else if (mod == 3) {
    return "Slytherin";
  }
}

// click listener for button
$("#button").click(function(){
  // get value of input field and assign it to a variable name
  let name = $("#input").val();
  console.log(name);

  // get the length of the house name
  let nameLength = name.length;
  console.log(nameLength);

  // get the house
  let house = sortingHat(name);
  console.log(house);

  // add the house to output div
  $("#output").html('<div class="text"><p>The Sorting Hat has sorted you into ' + house + '</p></div>');
});