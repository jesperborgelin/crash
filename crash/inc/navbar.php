<nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="<?php echo ROOT_URL; ?>">CRASH-Peli</a>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <?php if(isset($_SESSION['steamid'])){  ?>
              <?require('steamauth/userInfo.php');?>
                <a style="color:yellow" id ="rahat"></a>
              <img style="width:50px;height:50px" src="img/bp.png">
              <a href="logout.php" style="float:right; display:block;" class="btn btn-danger">Kirjaudu ulos</a>
              <a href="#"><img style="float:right;" class="img-rounded" src="<?=$steamprofile['avatar']; ?>" alt=""><b style="float:right;"><?=$steamprofile['personaname']; ?></b><b class="caret"></b></a>
              <a href="scoret.php" class="btn btn-primary">Parhaimmat tulokset</a>
            <? } else { ?>
              <?echo loginbutton(); ?>
             <? } ?>
          </li>
        </ul>
      </div>
    </nav>
