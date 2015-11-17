console.log("modals.js loaded");

$("#new_activity, #back").on("click", function(){
  $("#new_activity_form").fadeToggle(500);
});

$("#new_activity_form").on("click", ".tag-form", function(){
  $(this).toggleClass("tag-active");
});

$("#submit_new_activity").on("click", function(){
  var valid_submission = validate("new_activity_form");
  if ( valid_submission ){

    var tags_array = [];
    $(this).siblings("#activity_tags_field").children(".tag-active").each(function(){
      console.log($(this));
      tags_array.push($(this).text());
    })

    new_activity = {
      "id": last_activity_id,
      "title": sanitize( $(this).siblings("#activity_title_field").val() ),
      "description": sanitize( $(this).siblings("#activity_description_field").val() ),
      "tags": tags_array
    }
    $("#activity-template").tmpl(new_activity).appendTo(".activities");
    $(".tag-active").removeClass("tag-active");
    $("#activity_title_field, #activity_description_field").val("");
    $("#new_activity_form").fadeToggle(500);
  }
});
