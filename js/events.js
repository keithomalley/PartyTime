console.log("events.js loaded");

$(".activities").on("click", ".checkbox", function(){
  $(this).parent().toggleClass("complete");
});

$(".activities").on("click", ".show-more-arrow", function(){
  // Toggle the class name on the dropdown button
  $(this).toggleClass("down");
  // Toggle the visibility of the list
  $(this).parent().next("ul").slideToggle();
});

$(".activities").on("change", ".add_todo", function(){
  last_todo_id++;
  new_todo = {
    "id": last_todo_id,
    "title": sanitize($(this).val()),
    "active": true
  }
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

// need a function to update the checklist_item_count
$(".activities").on("click change", "li, input", function(){
  $(this).parent("ul").siblings("p").find(".checklist_item_count")
  .text( $(this).parent("ul").children(".complete").length + " / " + $(this).parent("ul").children("li").length );
})
