
// Refresh clock every min
setInterval($("#momentDate").text(moment().format("LLL")), 60000);

// store key value pair in LocalStorage
$("button").on("click", function () {
    var key = $(this).attr("data-info");
    var value = $("#" + key).val();
    localStorage.setItem(key, value);
});

// function timeUpdate() {
    
// }