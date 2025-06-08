// index.js - experiment with JavaScript arrays and objects.
// Author: Pzipora Shepherd
// Date: 2025

// Define Variables
myTransport = ["Volkswagen Passat", "bike", "rides from friends"];

// create an object for my main ride
myMainRide = {
    make: "Volkswagen",
    model: "Passat",
    color: "Black",
    year: 2016,
    // we can define a function within our object (called a method)
    // that uses the value of year above (using this.year)
    age: function() {
        return 2025 - this.year;
    }
};

// output
document.writeln("Kinds of transportation I use: " + myTransport + "<br>");
// this little trick allows us to write an object to the document
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
