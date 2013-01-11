function clockWrite() {
	var d = new Date(),
	h = d.getUTCHours(),
	m = d.getUTCMinutes(),
	s = d.getUTCSeconds();
	
	//Need to set day of the week & month to array & display that
	day	= d.getUTCDay(),
	date = d.getUTCDate(),
	month = d.getUTCMonth() + 1,
	year = d.getUTCFullYear();
	
	h = (h < 10 ? '0' : '') + h;
	m = (m < 10 ? '0' : '') + m;
	s = (s < 10 ? '0' : '') + s;
	
	utctime = (h + ':' + m + ':' + s);
	utcdate = (day + '-' + month + '-' + date + '-' + year);
	
	document.getElementById("time").firstChild.nodeValue = utctime;
	document.getElementById("date").firstChild.nodeValue = utcdate;
}

document.addEventListener('DOMContentLoaded', function () {
	setInterval(clockWrite, 1000); clockWrite();
});
