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
}

/** Start clock timer & set badge color */
const init = async () => {
  updateClock()

  const hasAlarms = await chrome.alarms.get('recurring-alarm')

  if (!hasAlarms?.name) {
    const date = new Date()

    // chrome won't let us start updating before 30 seconds have passed,
    // so if we're in the back half of the current minute, allow that
    // minute to finish before beginning updates
    date.setSeconds(date.getSeconds() >= 30 ? 60 : 0)
    date.setMinutes(date.getMinutes() + 1)

    chrome.alarms.create('recurring-alarm', {
      periodInMinutes: 1,
      when: date.valueOf(),
    })
  }

  if (!chrome.alarms.onAlarm.hasListener(updateClock)) {
    chrome.alarms.onAlarm.addListener(updateClock)
  }

  chrome.action.setBadgeBackgroundColor({ color: [0, 215, 0, 255] })
}

chrome.runtime.onStartup.addListener(init)
init()
