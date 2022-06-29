
//display current date using moment.js and jquery 
var currentDate = moment().format("dddd, MMMM Do")
$("#currentDay").text(currentDate)


//compare hour rows to current hour and change class accordingly 
function trackHours() {
    //current hour
    var currentHour = moment().hour();

    $(".time-block").each(function () {
        var hourRow = parseInt($(this).attr("id").split("hour")[1]);
        // console.log( hourRow, currentHour)

        //conditionals comparing hour rows to current hour and adding or removing appropriate classes
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


//click listener for save button that gets user input and hour row data
$(".saveBtn").on("click", function () {
    // console.log(this);
    var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
    var hour = $(this).parent().attr("id"); // taken the change from the parent html id attribute

    //setting localStorage
    localStorage.setItem(hour, text);
})



//get/load data from localStorage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


//add refresh function?


