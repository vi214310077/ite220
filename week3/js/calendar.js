var calendar = {
	header: "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr><tr>", 
	displayCalendar: function(){
		var ele = document.getElementById("calender");
		var calendarText = "<table class='table table-condensed'>";
		calendarText += this.header;
		var cut = 0;
		for(var i = 1; i <= 31; i++){
			calendarText += "<td>" + i + "</td>";
			cut ++;
			if (cut > 6){
				calendarText += "</tr>";
				cut = 0;
				}
			
		}
		calendarText += "</table>"
		ele.innerHTML = calendarText;
	}
}
calendar.displayCalendar();