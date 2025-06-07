// lab7.js - prompt for a user name
// Author: Pzipora Shepherd
// Date: 06/04/25

// Declare a variable userName outside my function and use window.prompt() to get the user's name
var userName = window.prompt("Please enter your name:");
console.log("userName =", userName);

// Create a new function
function userNameResult() {

  // split string to array, sort the array, join array back to a string
  var nameSorted = userName.split("").sort().join("");
  console.log("nameSorted =", nameSorted);

  var nameUnsorted = nameSorted.split("").reverse().join("");
  console.log("nameUnsorted =", nameUnsorted);

  // return the userName
  return userName;
}

// Call the function and output the results with document.writeIn() in a <div> with a class that is styled in my css
document.writeln("<div class='user-name'>" + userNameResult() + "</div>");