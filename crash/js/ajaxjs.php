<?php
// Fetching Values From URL
$rahat = mysqli_real_escape_string($conn, $_POST['rahat']);
$userbet = mysqli_real_escape_string($conn, $_POST['userbet']);
$crashed_at = mysqli_real_escape_string($conn, $_POST['crashed_at']);
$steamid = mysqli_real_escape_string($conn, $_POST['steamid']);
$profit = mysqli_real_escape_string($conn, $_POST['profit']);
if (isset($_POST['rahat'])) {
  $query = "INSERT INTO rounds(steamid, rahat, crashed_at, user_bet, user_profit) VALUES ('$steamid', '$rahat', '$userbet', '$crashed_at', '$profit')";
  if (mysqli_query($conn, $query)) {
      }else {
        echo 'ERROR '. mysqli_error($conn) ;
      }
    }



mysql_close($conn); // Connection Closed
?>
