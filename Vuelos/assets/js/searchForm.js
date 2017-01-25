function searchForm() {
  this.sForm = $("#FormReserva");

  this.setUpForm();
}

searchForm.prototype.setUpForm = function() {
  //DATEPICKERS
  var that = this;
  $("#checkIn").datepicker({
  	minDate: "+0",
    changeMonth: true,
    showAnim: "slideDown",
    numberOfMonths: 1
  }).on("change",function() {
    $("#checkOut").prop("disabled", false);
     $("#checkOut").datepicker("option", "minDate", that.getDate(this));
  });
  $("#checkOut").prop("disabled", true)
    .datepicker({
      defaultDate: "+1w",
      showAnim: "slideDown",
      changeMonth: true,
      numberOfMonths: 1
    }).on("change",function() {
    $("#checkIn").datepicker("option", "maxDate", that.getDate(this));
  });
    $("#maxPrice").on("change",function(){
    	$("label").find("span").html(this.value);
    });
    $("checkInTime").timepicker();
    $("checkOutTime").timepicker();
}
searchForm.prototype.getDate = function(element) {
  var dateFormat = "mm/dd/yy";
  var date;
  try {
    date = $.datepicker.parseDate(dateFormat, element.value);
  } catch (error) {
    date = null;
  }
  return date;
}