var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var numero = 0;
var x = 50;
var d = Math.floor((Math.random() * 100));
var numero3 = 0;
var numero4 = 0.1;




if (localStorage.getItem("rahat") === null) {
  var rahat = 50;
} else {
  var rahat = localStorage.getItem("rahat");
}

function lataahistoria(){

}

function alkukierros(){

  tarkista();
  document.getElementById('radio2').disabled = false;
  document.getElementById('radio1').disabled = false;
  document.getElementById('autocashout').disabled = false;
  document.getElementById('lopetanappi').style.visibility = 'hidden';
  if (d < 85) {
  numero3 = Math.floor((Math.random() * 11));
  }else if (d < 90){
  numero3 = Math.floor((Math.random() * 99));
}else if (d < 98){
  numero3 = Math.floor((Math.random() * 999));
  } else {
  numero3 = Math.floor((Math.random() * 9999));
}
  x = x + 10;
  document.getElementById('rahat').innerHTML = Math.round(rahat);
  makeid();
  ctx.clearRect(0, 0, 400, 400);
  ctx.font="30px Verdana";
  ctx.fillStyle = 'black';
  ctx.fillText("Peli", 60 , 200);
  ctx.font="14px Verdana";
  ctx.fillText("Kierroksen id = " + makeid(), 30 , 20);


  lataahistoria();
}

function tarkista(){
  var panos =  document.getElementById('panosinput').value;
  if (panos <= 0) {
    document.getElementById('pelaanappi').disabled = true;
    ctx.fillText("Panos ei voi olla 0 tai alle 0!", 50 , 50);
  } else if (panos = ""){
    document.getElementById('pelaanappi').disabled = true;
  } else {
    document.getElementById('pelaanappi').disabled = false;
  }

}


function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#¤%&/=?@£$€]}µ,.;:_-*+äöåÄÅÖ€½§~^`´";
  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function uusikierros(){
setTimeout(function () {
location.reload();
}, 3000);
}

function lopetakierros(){
  setTimeout(function () {
  uusikierros();
  }, 3000);
  }

function lopeta(){
  var panos =  document.getElementById('panosinput').value;
  var profit = panos * numero
if (numero <= numero3) {
rahat = Math.round(profit) + Math.round(rahat);
localStorage.setItem("rahat", Math.round(rahat));
document.getElementById('rahat').innerHTML = Math.round(rahat);
document.getElementById('lopetanappi').style.visibility = 'hidden';
panosinput.value="";
document.getElementById('voitit').innerHTML = "Voitit " + Math.round(profit) + ". Odota seuraavan kierroksen alkua";
localStorage.setItem("historia", Math.round(profit));
document.getElementById("profit").value = Math.round(profit);
document.getElementById("crashed_at").value = Math.round(numero3);
return;
}else{
}
localStorage.setItem("rahat", Math.round(rahat));
document.getElementById('rahat').innerHTML = Math.round(rahat);
}

function kierros(){

  var panos =  document.getElementById('panosinput').value;
  var numero2 = (Math.random() * (0.001 - 0.2) + 0.2);
  var profit = panos * numero;
  var auto =  document.getElementById('autocashout').value;
    if (numero > 1) {
    numero4 = numero4 + 0.005;
    var numero2 = numero2 + numero4;
    }

    if(document.getElementById('radio1').checked && numero >= auto ) {
      var panos =  document.getElementById('panosinput').value;
      var profit = panos * numero
      lopeta();
      document.getElementById('radio2').disabled = true;
    } else if (document.getElementById('radio2').checked) {
      document.getElementById('radio1').disabled = true;
    }
  if (numero >= numero3) {
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = 'red';
    ctx.fillText("CRASHED @ " + Math.round(numero) , 60 , 150);
    ctx.fillText("Uusi kierros alkaa 5s kuluttua", 60 , 250);
    document.getElementById('lopetanappi').style.visibility = 'hidden';
    ctx.font="20px Verdana";
    ctx.fillStyle = 'green';

    lopetakierros();


} else {
  ctx.clearRect(0, 0, 400, 400);
  numero = numero + numero2;
  ctx.font="50px Verdana";
  ctx.fillText("X" + numero.toFixed(2) , 100 , 200);

  ctx.font="14px Verdana";
  ctx.fillText("Panos " + panos , 20 , 350);
  ctx.fillText("Profit " + Math.round(profit) , 200 , 350);
}
}



function pelaa(){
  tarkista();
  ctx.clearRect(0, 0, 400, 100);
  var auto =  document.getElementById('autocashout').value;
  var panos =  document.getElementById('panosinput').value;
  if(document.getElementById('radio1').checked) {
    document.getElementById('autocashout').disabled = true;
    document.getElementById('radio2').disabled = true;
    document.getElementById('radio1').disabled = true;
  } else if (document.getElementById('radio2').checked){
    document.getElementById('radio1').disabled = true;
    document.getElementById('autocashout').disabled = true;
    document.getElementById('radio2').disabled = true;
  }
  panos = panos*1;
  rahat = rahat*1;
  auto = auto*1;
  if (panos < 0){
    ctx.font="14px Verdana";
    ctx.fillStyle = 'red';

    return false;

  }else if (panos > rahat){
    ctx.font="14px Verdana";
    ctx.fillStyle = 'red';
    ctx.fillText("Panos ei voi olla isompi kun rahamääräsi!", 50 , 50);
    return false;

  } else {
  rahat = rahat - panos;
  document.getElementById('rahat').innerHTML = Math.round(rahat);
  ctx.font="30px Verdana";
  ctx.fillStyle = 'black';
  ctx.fillText("Panos: " + panos, 50 , 50);
  localStorage.setItem("rahat", Math.round(rahat));
  document.getElementById('rahat').innerHTML = Math.round(rahat);
  document.getElementById('pelaanappi').style.visibility = 'hidden';
  document.getElementById('panosinput').style.visibility = 'hidden';
  document.getElementById('lopetanappi').style.visibility = 'visible';
  document.getElementById("userbet").value = panos;
  kierros();
  setInterval(kierros, 75);
  }


if (d < 90) {
numero3 = Math.floor((Math.random() * 11));
}else if (d < 8){
numero3 = Math.floor((Math.random() * 99));
}else{
numero3 = Math.floor((Math.random() * 999));
}
}
