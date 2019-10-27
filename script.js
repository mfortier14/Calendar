
// Refresh clock every min
setInterval($("#momentDate").text(moment().format("LLL")), 60000);
var hourTime = parseInt(moment().format('H'));
// store key value pair in LocalStorage
$("button").on("click", function () {
    var key = $(this).attr("data-info");
    var value = $("#" + key).val();
    localStorage.setItem(key, value);
});

// function timeUpdate() {
    
// }

if(hourTime  === 9) {
    $("#hour1").removeClass("past");
    $("#hour1").addClass("present");
}

if (hourTime === 10) {
    $("#hour2").removeClass("past");
    $("#hour2").addClass("present");
}

if (hourTime < 10) {
    $("#hour2").removeClass("past");
    $("#hour2").addClass("future");
}

if (hourTime === 11) {
    $("#hour3").removeClass("past");
    $("#hour3").addClass("present");
}

if (hourTime < 11) {
    $("#hour3").removeClass("past");
    $("#hour3").addClass("future");
}

if (hourTime === 12) {
    $("#hour4").removeClass("past");
    $("#hour4").addClass("present");
}

if (hourTime < 12) {
    $("#hour4").removeClass("past");
    $("#hour4").addClass("future");
}

if (hourTime === 13) {
    $("#hour5").removeClass("past");
    $("#hour5").addClass("present");
}

if (hourTime < 13) {
    $("#hour5").removeClass("past");
    $("#hour5").addClass("future");
}

if (hourTime === 14) {
    $("#hour6").removeClass("past");
    $("#hour6").addClass("present");
}

if (hourTime < 14) {
    $("#hour6").removeClass("past");
    $("#hour6").addClass("future");
}

if (hourTime === 15) {
    $("#hour7").removeClass("past");
    $("#hour7").addClass("present");
}

if (hourTime < 15) {
    $("#hour7").removeClass("past");
    $("#hour7").addClass("future");
}

if (hourTime === 16) {
    $("#hour8").removeClass("past");
    $("#hour8").addClass("present");
}

if (hourTime < 16) {
    $("#hour8").removeClass("past");
    $("#hour8").addClass("future");
}

if (hourTime === 17) {
    $("#hour9").removeClass("past");
    $("#hour9").addClass("present");
}

if (hourTime < 17) {
    $("#hour9").removeClass("past");
    $("#hour9").addClass("future");
}