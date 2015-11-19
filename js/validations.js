// Script to validate any inputs
console.log("validations.js loaded");

// Function to validate empty .required fields on a form
function validate(form_id){
  console.log("validating " + form_id);
  // set the valid var to true, if it gets turned false we won't submit the form
  var valid = true;
  // check if each of the children of this form with ".required" are empty
  $("#" + form_id + " .required").each(function(){
    if( $(this).val() == "" ){
      $(this).addClass("field-error");
      valid = false;
    } else {
      $(this).removeClass("field-error");
    }
  });
  // returns true if all of the fields arent empty, false if any are
  return valid;
}
