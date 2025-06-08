// index.js - experiment with anonymous functions and callbacks.
// Author: Pzipora Shepherd
// Date: 05/09/25

// Functions
function isEven(x){
    return (x % 2 == 0);
}

// test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", array);

var isEvenResults = array.map(isEven);
// should return [true, false, true, true, true, true, true]
console.log("Test of evenness of array ", isEvenResults);

var squareRootResults = array.map(function(x){
    return x ** 0.5;
})
// should return [10, 9, 2, 4, 6.48074069840786, 12, 100]
console.log("Squareroot of array:", squareRootResults);

// Your map results data
var mapResults = "<p><s>Go to the console to see the output.</s> The output will appear here!</p>"

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);
$("#output").append("Original array: " + JSON.stringify(array) + "<br>");
$("#output").append("Evenness of array: " + JSON.stringify(isEvenResults) + "<br>");
$("#output").append("Squareroots of array: " + JSON.stringify(squareRootResults));