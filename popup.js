function clockWrite() {
	var d = new Date(),
	h = d.getUTCHours(),
	m = d.getUTCMinutes(),
	s = d.getUTCSeconds();
	
	h = (h < 10 ? '0' : '') + h;
	m = (m < 10 ? '0' : '') + m;
	s = (s < 10 ? '0' : '') + s;
	
	time = (h + ':' + m + ':' + s);
	
	document.getElementById("clock").firstChild.nodeValue = time;
}

document.addEventListener('DOMContentLoaded', function () {
	setInterval(clockWrite, 1000); clockWrite();
});
