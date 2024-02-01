/** @type {Intl.DateTimeFormatOptions} */
const timeFormatOpts = {
  hour12: false,
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'UTC',
}

function updateClock() {
  const date = new Date()

  chrome.action.setBadgeText({
    text: date.toLocaleTimeString(undefined, timeFormatOpts),
  })

  setTimeout(updateClock, 5000)
}

//Run Clock function & set badge
chrome.action.setBadgeBackgroundColor({ color: '#00d700' })
updateClock()
