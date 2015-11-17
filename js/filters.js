console.log("filters.js loaded");

var tags = [];

// Event listener to allow filtering by tags, by managing the tags array with any tags that have been clicked
$(".tags").on("click", ".tag-filter", function(){
  // toggle the active class of a tag
  $(this).toggleClass("tag-active");

  // get the tag-name attribute to
  var tag = $(this).data("tag-name");

  //check if the tag has a position in the array tags
  if($.inArray(tag, tags) > -1){
    // tag is in tags[]
    tags = jQuery.grep(tags, function(t) {
      // remove the tag if it is in tags
      return t !== tag;
    });
  } else {
    // if not, put the tag into tags[]
    tags.push(tag);
  }
  // finally call the update activites method
  updateActivities(tags);
});

// Function to handle displaying the activities
function updateActivities(tags){
  var delay_time = 150;
  var tag_class;
  $(".activity").delay(delay_time).fadeOut(delay_time).delay(delay_time);
  // Only show activities with the tags that are selected
  if(tags.length > 0){
    tag_class = "";
    for( i=0 ; i < tags.length ; i++ ){
      tag_class += "." + tags[i];
      if(i != (tags.length - 1)){
        tag_class += ", ";
      }
    }
    $(tag_class).fadeIn(delay_time);
  } else {
    // If there are no tags selected just show everything
    $(".activity").delay(delay_time).fadeIn(delay_time);
  }
}
