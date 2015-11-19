// When the document is loaded, run this anonymous function
$(document).ready(function(){

  //====================================================================================
  // Load each JS file from the js folder
  //====================================================================================

  // prevent caching of files to keep data up-to-date
  $.ajaxSetup({ cache: false });

  // An array of all the javascript files in the js folder
  var scripts = ["common", "events", "filters", "modals", "templates", "validations"];
  var count_ajax_returned = 0;
  // load in each script with an ajax request using its name from the array
  for( i=0 ; i < scripts.length; i++ ){
    // if the function returns successfully run the anonymous callback function
    $.getScript("js/" + scripts[i] + ".js", function(){
      count_ajax_returned++;
      setup();
    });
  }

  // Function to set up the timeline and populate data
  function setup(){
    // check if all the scripts have been retrieved successfully
      if (count_ajax_returned == scripts.length){
        update_timeline();
        populate();
      } else {
        return;
      }
  }

})
