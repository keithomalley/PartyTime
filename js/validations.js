// Script to validate any inputs
console.log("validations.js loaded");

function validate(form_id){
  console.log("validating " + form_id);
  var valid = true;
  $("#" + form_id + " .required").each(function(){
    if( $(this).val() == "" ){
      $(this).addClass("field-error");
      valid = false;
    } else {
      $(this).removeClass("field-error");
    }
  });
  return valid;
}
