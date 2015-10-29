$(document).ready(function(){


  //====================================================================================
  // Load each JS file from the js folder
  //====================================================================================

  // An array of all the javascript files in the js folder
  var scripts = ["common", "events", "filters", "modals", "templates", "validations"];
  var count_ajax_returned = 0;
  // load in each script using its value form the array
  for( i=0 ; i < scripts.length; i++ ){
    $.getScript("js/" + scripts[i] + ".js", function(){
      count_ajax_returned++;
      setup();
    });
  }

  function setup(){
      if (count_ajax_returned == scripts.length){
        //setup_timeline();
        update_timeline();
      } else {
        return;
      }
  }

})
