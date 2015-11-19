console.log("modals.js loaded");

// Toggle whether to show the activity form when the "new activity" button
// or the black background overlay behind the form is clicked
$("#new_activity, #back").on("click", function(){
  $("#new_activity_form").fadeToggle(500);
});

// Toggle the selected state of tags CSS
$("#new_activity_form").on("click", ".tag-form", function(){
  $(this).toggleClass("tag-active");
});

$("#submit_new_activity").on("click", function(){
  // return whether the form is valid or not
  var valid_submission = validate("new_activity_form");

  // check if the form fields are valid, if so create the activity
  if ( valid_submission ){

    // create a string array of all the selected tags names to get which tags to add to the activity
    var tags_array = [];
    $(this).siblings("#activity_tags_field").children(".tag-active").each(function(){
      tags_array.push($(this).text());
    })

    // create a new activity from the data passed
    new_activity = {
      "id": last_activity_id,
      "title": sanitize( $(this).siblings("#activity_title_field").val() ),
      "description": sanitize( $(this).siblings("#activity_description_field").val() ),
      "tags": tags_array
    }
    // add the new_activity using the activity template
    $("#activity-template").tmpl(new_activity).appendTo(".activities");

    // Clear the form details
    $(".tag-active").removeClass("tag-active");
    $("#activity_title_field, #activity_description_field").val("");

    // hide the form
    $("#new_activity_form").fadeToggle(500);
  }
});
