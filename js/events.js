console.log("events.js loaded");

// toggle the completed class of a checkbox item's parent li
$(".activities").on("click", ".checkbox", function(){
  $(this).parent().toggleClass("complete");
});

// drop down the contents of a checklist when the arrow is clicked
$(".activities").on("click", ".show-more-arrow", function(){
  // Toggle the class name on the dropdown button
  $(this).toggleClass("down");
  // Toggle the visibility of the list
  $(this).parent().next("ul").slideToggle();
});

// create a new todo when the input changes (enter/tab pressed)
$(".activities").on("change", ".add_todo", function(){
  last_todo_id++;
  // create a new todo object
  new_todo = {
    "id": last_todo_id,
    "title": sanitize($(this).val()),
    "active": true
  }

  // insert the new_todo into the todo template, before the input
  $("#todo-template").tmpl(new_todo).insertBefore($(this));

  // Set the value to blank so we can add more todos.
  $(this).val("");
});

$(".activities").on("change", ".add_checklist", function(){
  last_checklist_id++;
  new_checklist = {
    "id": last_checklist_id,
    "title": sanitize($(this).val()),
    "active":true,
    "todos": []
  };
  $("#checklist-template").tmpl(new_checklist).insertBefore($(this));
  $(this).val("");
});

// When a list item is clicked call the updateCompletedCount function to
// update the count of (complete / total) for each of the checklists
$(".activities").on("click change", "li, input", updateCompletedCount );
