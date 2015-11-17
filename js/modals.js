console.log("modals.js loaded");

$("#new_activity").on("click", function(){
  $("#new_activity_form").fadeToggle(500);
});

$("#back").on("click", function(){
  console.log("back clicked");
  $("#new_activity_form").fadeToggle(500);
});
