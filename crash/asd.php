<?php
require('config/config.php');
require('config/db.php');

if(isset($_REQUEST))
{
  $steamid = mysqli_real_escape_string($conn, $_POST['steamid']);
  $profit = mysqli_real_escape_string($conn, $_POST['profit']);
  $crashed_at = mysqli_real_escape_string($conn, $_POST['crashed_at']);
  $user_bet = mysqli_real_escape_string($conn, $_POST['user_bet']);
  $query = "INSERT INTO rounds(steamid, user_profit, user_bet, crashed_at) VALUES ('$steamid','$profit','$user_bet','$crashed_at')";
          if (mysqli_query($conn, $query)) {
          }else {
            echo 'ERROR '. mysqli_error($conn) ;
          }

            mysqli_close($conn);
          }
?>
