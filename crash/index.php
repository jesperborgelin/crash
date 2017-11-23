<?php
require('config/config.php');
require('config/db.php');
require('steamauth/steamauth.php');

if(isset($_SESSION['steamid'])){
  $id = $_SESSION['steamid'];
} else {
  //Ei kirjauduttu sisään
}

$query = 'SELECT * FROM rounds ORDER BY user_profit DESC';

//Get result
$result = mysqli_query($conn, $query);

//Fetch data
$scoret = mysqli_fetch_all($result, MYSQLI_ASSOC);

//free result
mysqli_free_result($result);

//Close connection
mysqli_close($conn);


?>
<body onload="alkukierros()" background="img/background2.jpeg" style="background-repeat:no-repeat; background-size:cover;">
  <script src="js/jquery.js">
  </script>
  <?php include('inc/header.php') ?>
    <?php if(isset($_SESSION['steamid'])){?>
      <?php require('steamauth/userInfo.php');?>
      <div class="row">
  <canvas style="background-color:white; border: solid black;" id="canvas" width="400" height="400"></canvas>
<h6 style="" id ="voitit"></h6>
  <div class="container">
    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post" id="form" name="form">
      <div class="row">
    <input onkeyup="tarkista()" class="form-control"id="panosinput" type="number"placeholder="Panos">
    <input type="number" id="userbet" readonly hidden  name="user_bet">
    <input type="number" id="steamid" value="<?php echo $_SESSION['steamid']?>" hidden readonly name="steamid">

    <input type="number" hidden id="profit" readonly name="profit">
    <input type="number" hidden id="crashed_at" readonly name="crashed_at">

    <input class="form-control"id="autocashout" type="number"placeholder="Lopeta automaattisesti">
    <p style="color:white">Kyllä</p><br>
    <input name="autocashout" id="radio1" type="radio">
    <p style="color:white">Ei</p><br>
    <input name="autocashout" id="radio2" type="radio">
    <input type="submit" id="pelaanappi" name="Panosnappi" onclick="pelaa()" class="btn btn-primary" value="Aseta panos tälle kierrokselle">
    <input type="submit" id="lopetanappi" name="Lopetanappi" onclick="lopeta()" class="btn btn-danger" value="Lopeta pelaaminen">
    </form>

<script>
$(document).on('click','#pelaanappi',function(e) {
  e.preventDefault();
});
$(document).on('click','#lopetanappi',function(b) {
  b.preventDefault();
var data = $("#form").serialize();
$.ajax({
     data: data,
     type: "post",
     url: "asd.php",
});
});
</script>

  </div>
</div>
</div>
<?php foreach ($scoret as $score) : ?>
  <?php if ($_SESSION['steamid'] = $score['steamid']): ?>

  <?php endif ?>
<?php endforeach ?>

<script src="js/script.js">
</script>
<script src="js/main.js">
</script>
<audio controls>
 <source src="music.mp3" type="audio/mp3">
Your browser does not support the audio element.
</audio>
<?php } else { ?>
      <body background="img/background2.jpeg" style="background-repeat:no-repeat; background-size:cover;">
        <div class="container">
            <h3>Kirjaudu sisään että voit pelata!</h3>
        </div>
  <?php }?>
  </body>
</html>
