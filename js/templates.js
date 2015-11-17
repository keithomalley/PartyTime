// Script to populate from the templates
console.log("templates.js loaded");

// Hard-coded the values of each of the ids to simulate the returned value
// from the server if we were to actually create new ones with an API
var last_checklist_id = 1;
var last_activity_id = 3;
var last_tag_id = 5;
var last_todo_id = 4;

function populateActivities(){
  $.ajax({
    url: "data/activities.json",
    success: function(data){
      $("#activity-template").tmpl(data).appendTo(".activities");
      updateCompletedCount();
    },
    dataType: "json"
  });

  $.ajax({
    url: "data/tags.json",
    success: function(data){
      $("#tag-template").tmpl(data).appendTo(".tags");
      $("#tag-form-inputs-template").tmpl(data).appendTo("#activity_tags_field");
    },
    dataType: "json"
  });
}
