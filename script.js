  window.onload = function() {
	  function digitalClock(){
			var today = new Date();
			var hour = today.getHours();
			var min = today.getMinutes();
			var sec = today.getSeconds();
			var day = today.getDay();
			var date = today.getDate();
			var month = today.getMonth();
			var year = today.getFullYear();
			month += 1;

			document.getElementById('time').innerHTML = hour + ":" +  addZero(min) + ":" + addZero(sec);
			document.getElementById('date').innerHTML = dayOfTheWeek(day) + ", " + date + "." + month + "." +  year;
			setInterval(digitalClock,1000);
		}

		function addZero(index){
			if(index < 10){
				index = "0" + index;
			}
			return index;
		}

		function dayOfTheWeek(day){
		   var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		   if(day >= 0 && day <= 6){
				return week[day];
		   }
		}
		digitalClock();
  }