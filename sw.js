//Set badge text refresh rate: 5s
var refresh = 5000
setInterval(updateClock, refresh)

function badgeColor() {
  chrome.action.setBadgeBackgroundColor({ color: [0, 215, 0, 255] })
}

function updateClock() {
  var date = new Date(),
    hour = date.getUTCHours(),
    min = date.getUTCMinutes()

  hour = (hour < 10 ? '0' : '') + hour
  min = (min < 10 ? '0' : '') + min
  time = hour + '' + min

  chrome.action.setBadgeText({ text: '' + time })
}

//Run Clock function & set badge
updateClock()
badgeColor()
