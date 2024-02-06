/** @type {Intl.DateTimeFormatOptions} */
const timeFormatOpts = {
  hour12: false,
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'UTC',
}

const updateClock = () => {
  const date = new Date()

  chrome.action.setBadgeText({
    text: date.toLocaleTimeString(undefined, timeFormatOpts),
  })

  setTimeout(updateClock, 5000)
}

/** Start clock timer & set badge color */
const init = () => {
  updateClock()
  chrome.action.setBadgeBackgroundColor({ color: [0, 215, 0, 255] })
}

chrome.runtime.onStartup.addListener(init)
init()
