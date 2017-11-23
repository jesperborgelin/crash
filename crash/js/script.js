function myFunction() {
var rahat = document.getElementById("rahat2").value;
var userbet = document.getElementById("userbet").value;
var crashed_at = document.getElementById("crashed_at").value;
var steamid = document.getElementById("steamid").value;
var profit = document.getElementById("profit").value;
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'rahat=' + rahat + '&userbet=' + user + '&crashed_at=' + crashed_at + '&steamid=' + steamid + '&profit' + profit;
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "ajaxjs.php",
data: dataString,
cache: false,
success: function(html) {
alert(html);
}
});
}
