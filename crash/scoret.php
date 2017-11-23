<?php
require('config/config.php');
require('config/db.php');
require('steamauth/steamauth.php');

$query = 'SELECT * FROM rounds ORDER BY user_profit DESC';

//Get result
$result = mysqli_query($conn, $query);

//Fetch data
$scoret = mysqli_fetch_all($result, MYSQLI_ASSOC);

//free result
mysqli_free_result($result);

//Close connection
mysqli_close($conn);


if(isset($_SESSION['steamid'])){
  $id = $_SESSION['steamid'];
} else {
  //Ei kirjauduttu sisään
}
?>
<body background="img/background2.jpeg" style="background-repeat:no-repeat;">
  <?php include('inc/header.php') ?>
  <?php foreach ($scoret as $score) :?>

    <div class="well">
      <a style="color:white">Milloin: <?php echo $score['played_at'];?></a>
      <h5>Tienattu yhdestä pelistä: <?php echo $score['user_profit'];?></h3>
      <h6>Steamid: <?php echo $score['steamid'];?></h6>
      <br>
    </div>
<?php endforeach ?>
</body>
</html>
