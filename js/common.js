console.log("common.js loaded");

function update_timeline(){
  // set up a date object we can use
  var time = new Date();
  // function to add a format times as 00
  function checktime(s){ return (s < 10) ? "0" + s : s; }
  // set the time_label's text value to the current time in format 00:00:00
  $("#time_label").text(checktime(time.getHours()) + ":" + checktime(time.getMinutes()) + ":" + checktime(time.getSeconds()));

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
