var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

function clockWrite() {
	//Set all the time variables
	var d = new Date(),
	h = d.getUTCHours(),
	m = d.getUTCMinutes(),
	s = d.getUTCSeconds();
	
	//Set all the date variables
	day	= d.getUTCDay(),
	date = d.getUTCDate(),
	month = d.getUTCMonth(),
	year = d.getUTCFullYear();
	
	h = (h < 10 ? '0' : '') + h;
	m = (m < 10 ? '0' : '') + m;
	s = (s < 10 ? '0' : '') + s;
	
	utctime = (h + ':' + m + ':' + s);
	utcdate = (days[day] + ' ' + months[month] + ' ' + date + ', ' + year);
	
	document.getElementById("time").firstChild.nodeValue = utctime;
	document.getElementById("date").firstChild.nodeValue = utcdate;
}

document.addEventListener('DOMContentLoaded', function () {
	setInterval(clockWrite, 1000); clockWrite();
});
