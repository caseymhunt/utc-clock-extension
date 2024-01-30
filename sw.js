//Set badge text refresh rate: 5s
const refresh = 5000
setInterval(updateClock, refresh)

const formatter = Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 })

function updateClock() {
  const date = new Date()
  const hour = formatter.format(date.getUTCHours())
  const min = formatter.format(date.getUTCMinutes())

  chrome.action.setBadgeText({ text: `${hour}:${min}` })
}

//Run Clock function & set badge
chrome.action.setBadgeBackgroundColor({ color: '#00d700' })
updateClock()
