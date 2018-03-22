$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var animal = parseInt($("input:radio[name=animal]:checked").val());
    var activity = parseInt($("input:radio[name=activity]:checked").val());
    var fear = parseInt($("input:radio[name=fear]:checked").val());
    var score = animal + activity + fear;

    $("#output").show();
    if (score <=3) {
      $("#harry").show();
    } else if (score <=6) {
      $("#ron").show();
    } else {
      $("#hermione").show();
    }

    $("form#quiz").hide();
  });
});
