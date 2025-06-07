/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Pzipora Shepherd
   Date: 2025
*/

// add button to challenge, problem and results sections
$(".special-secions").append("<button class='button-special'>Make Special</button>");

// add a click listener to the challenge button
$(".special-secions button").click(function(){
    // now add (or subtract) the "special" class to the section
    $(this).parent().toggleClass("special");
});