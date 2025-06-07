/*
   lab.js - This simple JavaScript/jQuery experiments with jQuery and AJAX.

   Requirements: jQuery must be loaded for this script to work.

   Author: Pzipora Shepherd
   Date: 2025
*/

// click listener for button
$("#activate").click(function(){
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (from the api docs)
      // https://xkcd.com/info.0.json doesn't work because of a CORS error so I found an api that does
      url: "https://xkcd.vercel.app/?comic=latest",
      // The data to send (will be converted to a query string)
      data: { 
              // here is where any data required by the api 
              //   goes (check the api docs)
              //id: 123,
              //api_key: "blahblahblah",
            },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(comicObj) {
          // do stuff
          console.log(comicObj);
          // Parse and display the output in the #output div
          $("#output").html("<h3>" + comicObj.title + "</h3><br><img src=" + comicObj.img + " alt=" + comicObj.alt + " />");
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) { 
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  })

});
