console.log("common.js loaded");

function update_timeline(){

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

  // function to add a format times as 00
  function checktime(s){ return (s < 10) ? "0" + s : s; }
  
  // Array of months to display the correct name
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // set up a date object we can use
  var time = new Date();


  // set the time_label's text value to the current time in format 00:00:00
  $("#time_label").text(checktime( time.getHours()) + ":" + checktime(time.getMinutes()) + ":" + checktime(time.getSeconds()));
  $("#date_label").text(getDateFormatted( time.getDate() ) + ", " + months[time.getMonth()] + " " + (time.getYear() + 1900));

  // update the position of each of the time_indicators to be relative to the current_time_indicator
  $(".time_indicator").each(function(){
    $(this).css("left", function(){
      var j = $(this).data('left');
      var multiplier = 2.5;
      if (j <= 5 ){
        return "calc(50% - " + ( ( j * 60 * multiplier ) + ( time.getMinutes() * multiplier) ) + "px)";
      } else {
        return "calc(50% + " + ( ( (j % 6) * 60 * multiplier ) - ( time.getMinutes() * multiplier) ) + "px)";
      }
    })

    // TODO set up a label that gets the time +- "j" hours
  });

  setTimeout(update_timeline, 500);
}
