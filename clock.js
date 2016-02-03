window.onload = function(){

var clock = document.getElementById('clock');
writeDate();//selleks et poleks näha 00:00:00
//käivitan intervalli
window.setInterval(function(){
  writeDate();

}, 500);

};

function writeDate(){
  var today = new Date();

  var hours = addZeroBefore(today.getHours());
  var minutes = addZeroBefore(today.getMinutes());
  var seconds = addZeroBefore(today.getSeconds());

clock.innerHTML = hours + ':' + minutes + ':' + seconds;

}

function addZeroBefore(number){

if(number < 10){
  number = "0" + number;
}

  return number;
}
