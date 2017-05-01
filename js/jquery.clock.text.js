var clockTime= function(){ 
var time = new Date();   
var currHour = time.getHours();
var currMinutes = time.getMinutes();
var currSeconds = time.getSeconds();
var amPm = "AM"; 
   if(currHour <= 11)
    {
        amPm = "AM";
    }else {
    amPm= "PM";
    }   
 
  if (currHour > 12) {
    currHour = currHour - 12;
  } else if (currHour === 0) {
    currhour = 12;
  }
 
  if (currMinutes < 10) {
    currMinutes = "0" + String(currMinutes);
  }
 
  if (currSeconds < 10) {
    currSeconds = "0" + String(currSeconds);
  }
      
var currTime = currHour + ':' + currMinutes + ':' + currSeconds + ' ' + amPm;
 
  return currTime;
};
//using JQuery".text()" method istead of the ".innerText property 
var time = $j("#time");
 
setInterval(function() {
  time.text(clockTime());
}, 1000);

	$j(document).ready(function() {
	alert('You did it! You are on Github!!!!');
});
</script>
</body>
</html>