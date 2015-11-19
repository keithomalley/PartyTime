// Script to populate from the templates
console.log("templates.js loaded");

// Hard-coded the values of each of the ids to simulate the returned value
// from the server if we were to actually create new ones with an API
// Note: I am aware this leaves these variables open in the global scope and
//       am only using them as placeholders for id values
var last_checklist_id = 1;
var last_activity_id = 3;
var last_tag_id = 5;
var last_todo_id = 4;

// function to populate the page with data using templates
function populate(){
  // longform jquery ajax request to get the data files for activities, and populate them on success
  $.ajax({
    url: "data/activities.json",
    success: function(data){
      // create the activity template from the data and append to the activities div
      $("#activity-template").tmpl(data).appendTo(".activities");
      // call the function to set the values of all of the counters on checklists
      updateCompletedCount();
    },
    dataType: "json"
  });

  // longform jquery ajax request to get the data files for tags, and populate them on success
  $.ajax({
    url: "data/tags.json",
    success: function(data){
      // create the tag template from the data and append to the p.tags
      $("#tag-template").tmpl(data).appendTo(".tags");
      // create the tag template from the tag data and append to the activities form
      $("#tag-form-inputs-template").tmpl(data).appendTo("#activity_tags_field");
    },
    dataType: "json"
  });
}
