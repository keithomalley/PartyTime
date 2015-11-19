console.log("common.js loaded");

// return the day of the month with the correct suffix
function getDateFormatted(day){
  var suffix;
  if( day == 1 || day == 21 || day == 31) {
    suffix = "st";
  } else if (day == 2 || day == 22) {
    suffix = "nd";
  } else if (day == 3 || day == 23) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  return day + suffix;
}

// function to add a format to times as 00
// eg "1" will be formatted as "01"
function checktime(s){ return (s < 10) ? "0" + s : s; }

// Function to manage the timeline elements bars and updating timer
function update_timeline(){

  // Array of months to be used to display the correct name
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // set up a date object we can use, at todays date and time
  var time = new Date();

  // set the time_label's text value to the current time in format "07:21:01"
  $("#time_label").text(checktime( time.getHours()) + ":" + checktime(time.getMinutes()) + ":" + checktime(time.getSeconds()));

  // Set the date_labels date to todays date in format "1st November 2015"
  $("#date_label").text(getDateFormatted( time.getDate() ) + " " + months[time.getMonth()] + " " + (time.getYear() + 1900));

  // update the position of each of the time_indicators to be relative to the current_time_indicator
  $(".time_indicator").each(function(){
    // variable to keep track of the time_indicators locations
    var j;
    $(this).css("left", function(){
      j = $(this).data('left');
      var multiplier = 2.5;
      if (j <= 5 ){
        return "calc(50% - " + ( ( j * 60 * multiplier ) + ( time.getMinutes() * multiplier) ) + "px)";
      } else {
        return "calc(50% + " + ( ( (j % 6) * 60 * multiplier ) - ( time.getMinutes() * multiplier) ) + "px)";
      }
    }).find(".timelabel").text(function(){
      if (j <= 5 ){
        return ( time.getHours() - j + ":00" ) ;
      } else {
        return ( time.getHours() + (j % 6) + ":00" ) ;
      }
    });
  });

  // update the timeline every half a second
  setTimeout(update_timeline, 500);
}

// Get the text of the string element to get rid of any html elements from it
function sanitize(str){
  // wrap it in a p tag so we can get the text()
  str = "<p>" + str + "</p>";
  // return the value of html() or the value of text() or the string itself
  return $(str).html() || $(str).text() || str;
}

// Function to return the tags an activity has in a class string
function getTagsAsClasses(tags){
  var classlist = "";
  for (i=0; i < tags.length; i++){
    classlist += " " + tags[i].toLowerCase();
  }
  return classlist;
}

// Update the count of (completed/total) todos in a checklist
function updateCompletedCount(){
  $(".activities ul").each(function(){
    $(this).prev().find(".checklist_item_count")
    .text( $(this).children(".complete").length + " / " + $(this).children("li").length );
  });
}
