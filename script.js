$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var dine = $("select#dine").val() === "true";
    var cuisine = $("select#cuisine").val() === "true";

    if (dine && cuisine) {
      var celebrity = "Guy Fieri";
    } else {
      var celebrity = "Julia Childs";
    }

    $("#celebrity").empty().append(celebrity);
    $("#result").show();

  
    event.preventDefault();
  });
});


// $(document).ready(function() {
//   $("form#insurance").submit(function(event) {
//     var age = parseInt($("input#age").val());
//     var gender = $("select#gender").val();
//
//     var quote = (100 - age) * 3;
//     if (gender === 'male' && age < 26) {
//       quote += 50;
//     }
//
//     $("#rate").text(quote);
//     $("#quote").show()
//
//     event.preventDefault();
//   });
// });
