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
      url: "https://yesno.wtf/api",
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
      success: function(data) {
          // do stuff
          console.log(data);
          // Parse and display the output in the #output div
          const outputHtml = `
              <p>Answer: ${data.answer}</p>
              <img src="${data.image}" alt="Yes/No Image" />
          `;
          $('#output').html(outputHtml);
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) { 
          // do stuff
          console.log("Error:", textStatus, errorThrown);
          $("#output").html(`<p>Error: ${errorThrown}</p>`);
      }
  })

});