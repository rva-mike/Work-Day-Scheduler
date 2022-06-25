//display current date using moment.js and jquery 
var currentDate = moment().format("dddd, MMMM Do")
$("#currentDay").text(currentDate)





function trackHours() {
    var currentHour = moment().hour(); 

    $(".time-block").each(function () {
        var hourRow = parseInt($(this).attr("id").split("hour")[1]);
        // console.log( hourRow, currentHour)

        if (hourRow < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (hourRow === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
trackHours(); 
























